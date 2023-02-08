const generateDate = function(date) {
    return date.substr(0, 10);
};

const generateImageUrl = function(filename) {
    if (filename) {
        return `${process.env.API_NEWS_BASE_URL}/cache/uploads/${filename}`;
    }
    return require("@/assets/image/news/thumb-default.gif");
};

const generateShopLabels = function(data, param, mode = null) {
    if (typeof(param) === 'number') {
        let result = data.find((item) => item.id === param)
        if (mode === "name") return result.name.replace("とんかつとんＱ", "")
        return result.slug
    }

    if (typeof(param) === 'string') {
        let result = data.find((item) => item.slug === param)
        return result.slug
    }
}



export default (context, inject) => {
    inject("generateDate", generateDate);
    inject("generateImageUrl", generateImageUrl);
    inject("generateShopLabels", generateShopLabels);
};