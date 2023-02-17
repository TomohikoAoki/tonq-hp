//日付をyyyy-mm-ddで
const generateDate = function(date) {
    return date.substr(0, 10);
};

//newsのサムネ画像のurl　ない場合はdefaultの画像のurl
const generateImageUrl = function(filename) {
    if (filename) {
        return `${process.env.API_NEWS_BASE_URL}/cache/uploads/${filename}`;
    }
    return require("@/assets/image/news/thumb-default.gif");
};

export default ({ store }, inject) => {
    //店舗slugをidに or idをスラグまたは名前に
    const generateShopLabels = function(param, mode = null) {
        let data = store.getters["shops/getShopLabels"];

        if (typeof param === "number") {
            let result = data.find((item) => item.id === param);
            if (mode === "name") return result.name.replace("とんかつとんＱ", "");
            return result.slug;
        }

        if (typeof param === "string") {
            let result = data.find((item) => item.slug === param);
            return result.id;
        }
    };

    //店舗IDからjsonld出力
    const generateJsonLd = function(shopId) {
        const keys = [
            "@context",
            "@type",
            "name",
            "url",
            "description",
            "servesCuisine",
            "menu",
            "address",
            "telephone",
            "geo",
            "openingHoursSpecification",
            "priceRange",
        ];
        let data = store.getters["shops/getShop"];
        let shopData = data.find((item) => item.id === shopId);

        let jsonLd = {};

        keys.forEach((key) => {
            if (shopData[key]) jsonLd[key] = shopData[key];
        });

        return jsonLd;
    };

    //店舗情報からhtmlのhead情報を返す
    const generateHead = function(shopId) {
        let shops = store.getters["shops/getShop"];
        let data = shops.find((item) => item.id === shopId);

        return {
            title: data.name,
            meta: [{
                    hid: "description",
                    name: "description",
                    content: data.description,
                },
                {
                    hid: "og:site_name",
                    property: "og:site_name",
                    content: data.name,
                },
                { hid: "og:type", property: "og:type", content: "website" },
                {
                    hid: "og:url",
                    property: "og:url",
                    content: data.url,
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: data.name,
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: data.description,
                },
                //{ hid: "og:image", property: "og:image", content: "画像のURL" },
                //{ name: "twitter:card", content: "summary" }, //　twitterの画像サイズ
            ],
        };
    };

    inject("generateDate", generateDate);
    inject("generateImageUrl", generateImageUrl);
    inject("generateShopLabels", generateShopLabels);
    inject("generateJsonLd", generateJsonLd);
    inject("generateHead", generateHead);
};
