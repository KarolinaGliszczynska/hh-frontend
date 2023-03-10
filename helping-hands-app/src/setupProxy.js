const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:8080/",
            changeOrigin: true,

           pathRewrite: (path, req) => {
                path = path.replace("/api/events", "/events");
                return path;
           }
        })
    );
};
