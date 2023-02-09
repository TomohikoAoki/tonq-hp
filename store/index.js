const axios = require("axios");

const state = () => ({
    user: null,
    header: null,
    successFlag: false,
    postData: null,
    errorMessage: null,
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
    SET_SUCCESS_FLAG(state) {
        state.successFlag = !state.successFlag;
    },
    SET_POST_DATA(state, data) {
        state.postData = data;
    },
    CLEAR_POST_DATA(state) {
        state.postData = null;
        state.errorMessage = null
    },
    SET_ERROR_MESSAGE(state, message) {
        state.errorMessage = message;
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
    //ニュース一覧取得
    async fetchNews({ commit }, page = 1) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/posts/index?page=${page}`
            );
        } catch (err) {
            commit('SET_ERROR_MESSAGE', err.response.data)
        }

        let data = {
            news_data: response.data.news_data,
            paginate: {
                page: response.data.page,
                limit: response.data.limit,
                count: response.data.count,
            },
        };

        commit("SET_POST_DATA", data);
    },
    //ニュース一覧取得 店舗別
    async fetchNewsByShop({ commit }, args) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/posts/shop/${args.shopId}?page=${args.page}`
            );
        } catch (err) {
            commit('SET_ERROR_MESSAGE', err.response.data)
        }

        let data = {
            news_data: response.data.news_data,
            paginate: {
                page: response.data.page,
                limit: response.data.limit,
                count: response.data.count,
            },
        };

        commit("SET_POST_DATA", data);
    },
    //ニュース１記事取得
    async fetchPost({ commit }, id) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/articles/${id}`
            );
        } catch (err) {
            commit('SET_ERROR_MESSAGE', err.response.data)
        }
        commit("SET_POST_DATA", response.data);
    },
    //postData初期化
    clearPostData({ commit }) {
        commit("CLEAR_POST_DATA");
    },

    //ニュース記事送信 作成＆編集
    async sendArticle({ state, commit }, data) {
        const AuthHeader = `Bearer ${state.user.token}`;
        const postImageUrl = `${process.env.API_NEWS_BASE_URL}/article/image-upload`;
        const baseFormUrl = `${process.env.API_NEWS_BASE_URL}/article`;

        //サムネイル画像があれば先にアップロード,fileName取得
        if (data.imageData) {
            let resImage = null;
            try {
                resImage = await axios.post(postImageUrl, data.imageData, {
                    headers: {
                        Authorization: AuthHeader,
                        "Content-Type": "multipart/form",
                    },
                });
            } catch (err) {
                $nuxt.$loading.finish();
                if (err.response.status === 422) {
                    console.log("画像アップロード失敗", err.response.data);
                }

                return false;
            }

            data.formData["thumb_filename"] = resImage.data;
        }

        data.formData.public = data.formData.public ? 1 : 0;

        //データ送信
        let sendUrl, axiosMethod;
        if (data.mode === "create") {
            sendUrl = `${baseFormUrl}/create`;
            axiosMethod = "POST";
        } else {
            sendUrl = `${baseFormUrl}/edit/${data.formData.id}`;
            axiosMethod = "PUT";
        }

        let resForm = null;
        try {
            resForm = await axios({
                method: axiosMethod,
                url: sendUrl,
                data: data.formData,
                headers: {
                    Authorization: AuthHeader,
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            $nuxt.$loading.finish();
            if (err.response.status === 422) {
                //画像削除の処理が入れれたらgood!
                console.log("フォームアップロード失敗", err.response.data);
            }

            return false;
        }

        $nuxt.$loading.finish();
        commit("SET_SUCCESS_FLAG", true);
        console.log("すべて成功");
    },
    //ニュース記事削除
    async deleteArticle({ state, commit }, id) {
        const response = await axios({
            method: "delete",
            url: `${process.env.API_NEWS_BASE_URL}/article/delete/${id}`,
            headers: {
                Authorization: `Bearer ${state.user.token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            $nuxt.$loading.finish();
            commit("SET_SUCCESS_FLAG", true);
            console.log("削除成功！");
        } else {
            $nuxt.$loading.finish();
            console.log("削除失敗！");
        }
    },
    changeSuccessFlag(context) {
        context.commit("SET_SUCCESS_FLAG");
    },
    clearPostData({ commit }) {
        commit('CLEAR_POST_DATA')
    },
};

const getters = {
    getUser: (state) => state.user,
    isLogin: (state) => !!state.user,
    getSuccessFlag: (state) => state.successFlag,
    getPostData: (state) => state.postData,
    getErrorMessage: (state) => state.errorMessage
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};