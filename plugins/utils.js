const generateDate = function(date) {
    return date.substr(0, 10);
};

const generateImageUrl = function(filename) {
    if (filename) {
        return `${process.env.API_NEWS_BASE_URL}/cache/uploads/${filename}`;
    }
    return require("@/assets/image/news/thumb-default.gif");
};

export default ({ store }, inject) => {
    const generateShopLabels = function(param, mode = null) {

        let data = store.getters['shops/getShopLabels']

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

    inject("generateDate", generateDate);
    inject("generateImageUrl", generateImageUrl);
    inject("generateShopLabels", generateShopLabels);
};