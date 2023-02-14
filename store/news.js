const axios = require("axios");

const state = () => ({
    successFlag: false,
    postData: null,
    errorMessage: null,
});

const mutations = {
    SET_SUCCESS_FLAG(state) {
        state.successFlag = !state.successFlag;
    },
    SET_POST_DATA(state, data) {
        state.postData = data;
    },
    CLEAR_POST_DATA(state) {
        state.postData = null;
        state.errorMessage = null;
    },
    SET_ERROR_MESSAGE(state, message) {
        state.errorMessage = message;
    },
};

const actions = {
    //【GET】ニュース一覧取得
    async fetchNews({ commit }, page = 1) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/posts/index?page=${page}`
            );
        } catch (err) {
            commit("SET_ERROR_MESSAGE", 'データを取得できませんでした。時間をおいて再度お試しください');
            return false
        }

        let data = response.data;

        commit("SET_POST_DATA", data);
    },

    //【GET】ニュース一覧取得 店舗別
    async fetchNewsByShop({ commit }, args) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/posts/shop/${args.shopId}?page=${args.page}`
            );
        } catch (err) {
            commit("SET_ERROR_MESSAGE", 'データを取得できませんでした。時間をおいて再度お試しください');
            return false
        }

        let data = response.data;

        commit("SET_POST_DATA", data);
    },

    //【GET】ニュース１記事取得
    async fetchPost({ commit }, id) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/articles/${id}`
            );
        } catch (err) {
            commit("SET_ERROR_MESSAGE", err.response.data);
            return false
        }
        commit("SET_POST_DATA", response.data);
    },

    //【GET】ニュース最新public ３件取得
    async fetchCurrentNews({ commit }) {
        let response = null;
        try {
            response = await axios.get(
                `${process.env.API_NEWS_BASE_URL}/posts/current`
            );
        } catch (err) {
            commit("SET_ERROR_MESSAGE", 'データを取得できませんでした。時間をおいて再度お試しください');
            return false
        }

        let data = response.data;

        commit("SET_POST_DATA", data);
    },

    //【POST,PUT】ニュース記事送信 作成＆編集
    async sendArticle({ rootState, commit }, data) {
        const AuthHeader = `Bearer ${rootState.user.token}`;
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

    //【DELETE】ニュース記事削除
    async deleteArticle({ rootState, commit }, id) {
        const response = await axios({
            method: "delete",
            url: `${process.env.API_NEWS_BASE_URL}/article/delete/${id}`,
            headers: {
                Authorization: `Bearer ${rootState.user.token}`,
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            $nuxt.$loading.finish();
            commit("SET_SUCCESS_FLAG", true);
        } else {
            $nuxt.$loading.finish();
        }
    },
    changeSuccessFlag(context) {
        context.commit("SET_SUCCESS_FLAG");
    },
    clearPostData({ commit }) {
        commit("CLEAR_POST_DATA");
    },
    clearErrorMessage({ commit }) {
        commit('SET_ERROR_MESSAGE', null)
    }
};

const getters = {
    getSuccessFlag: (state) => state.successFlag,
    getPostData: (state) => state.postData,
    getErrorMessage: (state) => state.errorMessage,
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};