export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "hp-tonq",
        htmlAttrs: {
            lang: "ja",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                rel: "stylesheet",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~assets/css/destyle.css",
        { src: "~assets/css/common.scss", lang: "scss" },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/routerOption.js", ssr: false },
        "@/plugins/vee-validate",
        { src: "~/plugins/axios.js", mode: "client" },
        { src: "@/plugins/quill", mode: "client" },
    ],
    axios: {},

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxt/postcss8"],

    //loading component
    loading: "./components/Loading.vue",

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "nuxt-lazy-load",
        "@nuxtjs/axios",
        "@nuxtjs/style-resources", [
            "@nuxtjs/firebase",
            {
                config: {
                    apiKey: process.env.FIREBASE_APIKEY,
                    authDomain: process.env.FIREBASE_AUTHDOMAIN,
                    projectId: process.env.FIREBASE_PROJECTID,
                    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
                    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
                    appId: process.env.FIREBASE_APPID,
                },
                services: {
                    auth: {
                        persistence: "local", // default
                        initialize: {
                            onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
                            onAuthStateChangedAction: "onAuthStateChangedAction",
                            subscribeManually: false,
                        },
                        ssr: false, // default
                    },
                    firestore: true,
                    storage: true,
                },
            },
        ],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vee-validate/dist/rules"],
    },
};
