const state = () => ({
    user: null,
});

const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
};

const actions = {　
    async onAuthStateChangedAction({ commit }, { authUser, claims }) {
        if (!authUser) {
            commit("SET_USER", null);

            // リダイレクトの設定
            this.$router.push({
                path: "/news/form/login",
            });
        } else {
            const { uid, email } = authUser;
            commit("SET_USER", {
                uid,
                email,
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
