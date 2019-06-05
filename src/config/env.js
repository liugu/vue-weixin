//获取图片地址
const imgurl = 'http://127.0.0.1/files/images/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://127.0.0.1:8003'
}else{
	baseUrl = 'http://127.0.0.1:8003'
}
export {
	baseUrl,
	imgurl 
}
