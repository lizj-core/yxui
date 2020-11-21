// const proxy = require("http-proxy-middleware");

// module.exports = function(app: any) {
//     app.use(
//         proxy("/fs/api/", {
//             target: "http://192.168.10.89",
//             changeOrigin: true,
//         })
//     );
// };

// export {}
const proxy = require("http-proxy-middleware");
module.exports = function(app){
    app.use(
        proxy("/fs/api/",{
            target:"http://192.168.10.89/fs/api/",
            changeOrigin:true,
            // pathRewrite:{
            // "^/api":""
            // }
        })
    )
}