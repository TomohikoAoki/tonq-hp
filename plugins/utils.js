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

    inject("generateDate", generateDate);
    inject("generateImageUrl", generateImageUrl);
    inject("generateShopLabels", generateShopLabels);
    inject("generateJsonLd", generateJsonLd)
};