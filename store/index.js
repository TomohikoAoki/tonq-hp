const axios = require("axios");

const state = () => ({
    user: null,
});

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
};

const actions = {
    //firebase ユーザーの変化があれば動く
    async onAuthStateChangedAction({ commit }, { authUser, claims }) {
        if (!authUser) {
            commit("SET_USER", null);

            // リダイレクトの設定
            this.$router.push({
                path: "/news/form/",
            });
        } else {
            const { uid, email } = authUser;
            const token = await authUser.getIdToken();
            commit("SET_USER", {
                uid,
                email,
                token,
            });
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