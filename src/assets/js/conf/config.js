let prodUrl = "//vueshop.glbuys.com"; // 生产环境
let devUrl = "/proxy"; // 开发者环境
let baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl;

const exportedObject = {
    baseUrl: baseUrl,
    path: "/",
    token: "1ec949a15fb709370f"
};

export default exportedObject;