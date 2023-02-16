export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "とんかつとんＱ",
        htmlAttrs: {
            lang: "ja",
            prefix: "og: http://ogp.me/ns#",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "『とんかつとんＱ』は茨城県つくば市を中心に、 茨城、千葉、埼玉へ店舗展開中のとんかつ専門店。 農林水産大臣賞を受賞した 国産ブランド「やまと豚」のとんかつをメインに、 お膳の五品 〈とんかつ・キャベツ・ご飯・味噌汁・お新香〉 すべてにこだわりをもってお作りし、 友人を家に招いているような暖かい接客で お客様にご提供しております。" },
            { name: "format-detection", content: "telephone=no" },
            { hid: "og:site_name", property: "og:site_name", content: "とんかつとんＱ" },
            { hid: "og:type", property: "og:type", content: "website" },
            { hid: "og:url", property: "og:url", content: `${process.env.BASE_URL}` },
            { hid: "og:title", property: "og:title", content: "とんかつとんＱ" },
            {
                hid: "og:description",
                property: "og:description",
                content: "『とんかつとんＱ』は茨城県つくば市を中心に、 茨城、千葉、埼玉へ店舗展開中のとんかつ専門店。 農林水産大臣賞を受賞した 国産ブランド「やまと豚」のとんかつをメインに、 お膳の五品 〈とんかつ・キャベツ・ご飯・味噌汁・お新香〉 すべてにこだわりをもってお作りし、 友人を家に招いているような暖かい接客で お客様にご提供しております。",
            },
            //{ hid: "og:image", property: "og:image", content: "画像のURL" },
            //{ name: "twitter:card", content: "summary" }, //　twitterの画像サイズ
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
        "@/plugins/utils",
        '~/plugins/jsonld'
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
                        persistence: "session", // default
                        initialize: {
                            onAuthStateChangedAction: "onAuthStateChangedAction",
                            subscribeManually: false,
                        },
                        ssr: false, // default
                    },
                    firestore: false,
                    storage: false,
                },
            },
        ],
        "@nuxtjs/dotenv",
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vee-validate/dist/rules"],
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                minifyURLs: true,
                removeComments: true,
                removeEmptyElements: true,
            },
        },
    },
};