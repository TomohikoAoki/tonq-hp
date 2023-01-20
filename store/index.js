const axios = require("axios");

const state = () => ({
    user: null,
    header: null,
});

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_HEADER(state, token) {
        state.header = {
            Authorization: `Bearer ${token}`,
            "Context-type": "application/json",
        };
    },
};

const actions = {
    //firebase ユーザーの変化があれば動く
    async onAuthStateChangedAction({ commit }, { authUser, claims }) {
        if (!authUser) {
            commit("SET_USER", null);
            commit("SET_HEADER", null);

            // リダイレクトの設定
            this.$router.push({
                path: "/news/form/login",
            });
        } else {
            const { uid, email } = authUser;
            const token = await authUser.getIdToken();
            commit("SET_USER", {
                uid,
                email,
                token,
            });
            commit("SET_HEADER", token);
        }
    },
    //ニュース記事送信 作成＆編集
    async sendArticle({ state }, data) {
        const AuthHeader = `Bearer ${state.user.token}`;
        const postImageUrl = `${process.env.API_NEWS_BASE_URL}/image-upload`;
        const baseFormUrl = `${process.env.API_NEWS_BASE_URL}/article`;


        //サムネイル画像があれば先にアップロード,fileName取得
        if (data.imageData) {
            const resImage = await axios.post(postImageUrl, data.imageData, {
                headers: {
                    Authorization: AuthHeader,
                    "Content-Type": "multipart/form",
                },
                withCredentials: true,
            });

            if (resImage.status !== 200) {
                console.log(resImage.error)
                $nuxt.$loading.finish()
                return false
            }
            console.log(
                "画像アップロード完了,フォームデータのアップロードに移ります",
                resImage.data
            );
            data.formData["thumb_filename"] = resImage.data;
        }

        data.formData.public = data.formData.public ? 1 : 0;

        //データ送信
        let sendUrl, axiosMethod
        if (data.mode === "create") {
            sendUrl = `${baseFormUrl}/create`
            axiosMethod = 'POST'
        } else {
            sendUrl = `${baseFormUrl}/edit/${data.formData.id}`
            axiosMethod = 'PUT'
        }

        const resForm = await axios({
            method: axiosMethod,
            url: sendUrl,
            data: data.formData,
            headers: {
                Authorization: AuthHeader,
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        if (resForm.status === 200) {
            $nuxt.$loading.finish()
            console.log("すべて成功");

        } else {
            $nuxt.$loading.finish()
            console.log("失敗");
        }
    },
    //ニュース記事削除
    async deleteArticle({ state }, id) {
        const response = await axios({
            method: "delete",
            url: `${process.env.API_NEWS_BASE_URL}/article/delete/${id}`,
            headers: {
                Authorization: `Bearer ${state.user.token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            console.log('削除成功！')
        } else {
            console.log('削除失敗！')
        }
    },
};

const getters = {
    getUser: (state) => state.user,
    isLogin: (state) => !!state.user,
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
