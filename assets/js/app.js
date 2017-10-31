/*
* @Author: inferjay
* @Date:   2017-10-30 21:32:41
* @Last Modified by:   inferjay
* @Last Modified time: 2017-10-31 15:49:28
*/
var wechatQrcode = $('.follow-us-wechat-official-qrcode');
$('.follow-us-social-item.wechat').hover(function() {
		wechatQrcode.show();
}, function() {
		wechatQrcode.hide();
});