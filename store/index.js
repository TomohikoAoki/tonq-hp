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
    async createArticle({ state }, data) {
        if (data.imageData) {
            axios
                .post(`${process.env.API_NEWS_BASE_URL}/image-upload`, data.imageData, {
                    headers: {
                        Authorization: `Bearer ${state.user.token}`,
                        "Content-Type": "multipart/form",
                    },
                    withCredentials: true,
                })
                .then((res) => {
                    console.log(
                        "画像アップロード完了,フォームデータのアップロードに移ります",
                        res.data
                    );
                    return res;
                })
                .then((res) => {
                    data.formData.public = data.formData.public ? 1 : 0;
                    data.formData["thumb_filename"] = res.data;
                    return axios.post(
                        `${process.env.API_NEWS_BASE_URL}/article/create`,
                        data.formData, {
                            headers: {
                                Authorization: `Bearer ${state.user.token}`,
                                "Content-Type": "application/json",
                            },

                            withCredentials: true,
                        }
                    );
                }).then((res) => {
                    console.log('全部うまく行ったはず', res)
                })
                .catch((res) => {
                    console.log("画像アップロード失敗", res);
                });
            return false;
        }

        data.formData.public = data.formData.public ? 1 : 0;
        axios
            .post(`${process.env.API_NEWS_BASE_URL}/article/create`, data.formData, {
                headers: {
                    Authorization: `Bearer ${state.user.token}`,
                    "Content-Type": "application/json",
                },

                withCredentials: true,
            })
            .then((res) => {
                console.log("画像が無くてフォームアップロード成功", res);
            })
            .catch((error) => {
                console.log("画像が無くて失敗", error);
            });
    },
    async editArticle({ state }, data) {
        const id = data.id;
        const response = await axios.post(
            `${process.env.API_NEWS_BASE_URL}/article/edit/${id}`,
            data,
            state.header
        );

        console.log(response);
    },
    async deleteArticle({ state }, id) {
        const response = await axios.delete(
            `${process.env.API_NEWS_BASE_URL}/article/delete/${id}`,
            id,
            state.header
        );

        console.log(response);
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
