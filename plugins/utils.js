const generateDate = function(date) {
    return date.substr(0, 10);
}

const generateImageUrl = function(filename) {
    if (filename) {
        return `${process.env.API_NEWS_BASE_URL}/cache/uploads/${filename}`;
    }
    return require("@/assets/image/news/thumb-default.gif");
}

export default ({}, inject) => {
    inject('generateDate', generateDate)
    inject('generateImageUrl', generateImageUrl)
}
