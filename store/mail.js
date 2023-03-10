const axios = require("axios");

const state = () => ({
    token: null,
    auth: "b647f62728a3e9a7ee5aa6992815c9c880aca65f5e290ba593e651e479bc5d4c",
    confirmData: null,
    invalidMessage: null
});

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_CONFIRM_DATA(state, data) {
        state.confirmData = data;
    },
    SET_INVALID_MESSAGE(state, message) {
        state.invalidMessage = message
    }
};

const actions = {
    //csrf-token 取得
    async fetchToken({ state, commit }) {
        let response = null;
        try {
            response = await axios({
                method: "GET",
                url: `${process.env.API_NEWS_BASE_URL}/mail/token`,
                headers: {
                    Authorization: state.auth,
                },
                withCredentials: true,
            });
        } catch (err) {
            this.$store.dispatch("error/catchError", err.response, { root: true });
        }

        commit("SET_TOKEN", response.data);
    },

    //mail サーバーサイドのバリデーション
    async checkMail({ state, commit }, data) {
        commit('SET_INVALID_MESSAGE', null)

        Object.keys(state.token).forEach(function(key) {
            data[key] = this[key];
        }, state.token);

        let response = null;

        try {
            response = await axios.post(
                `${process.env.API_NEWS_BASE_URL}/mail/check`,
                data, {
                    headers: {
                        Authorization: state.auth,
                    },
                    withCredentials: true,
                }
            );
        } catch (err) {
            if (err.response.status === 422) {
                commit('SET_INVALID_MESSAGE', err.response.data.messages)
                commit("SET_TOKEN", err.response.data.token);
                return;
            }
            this.$store.dispatch("error/catchError", err.response, { root: true });
        }

        commit("SET_CONFIRM_DATA", response.data.body);
        commit("SET_TOKEN", response.data.token);
    },

    //mail 送信
    async sendMail({ state, commit }) {
        try {
            await axios.post(
                `${process.env.API_NEWS_BASE_URL}/mail/send`,
                state.token, {
                    headers: {
                        Authorization: state.auth,
                    },
                    withCredentials: true,
                }
            );
        } catch (err) {
            this.$store.dispatch("error/catchError", err.response, { root: true });
        }
        commit("SET_CONFIRM_DATA", null);
        commit("SET_TOKEN", null);
    },
};

const getters = {
    getConfirmData: (state) => state.confirmData,
    getInvalidMessage: (state) => state.invalidMessage
};

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions,
};
