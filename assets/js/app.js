/*
* @Author: Inferjay
* @Date:   2017-10-30 21:32:41
* @Last Modified by:   ZHC
* @Last Modified time: 2017-10-30 21:37:19
*/
var wechatQrcode = $('.follow-us-wechat-official-qrcode');
$('.follow-us-social-item.wechat').hover(function() {
		wechatQrcode.show();
}, function() {
		wechatQrcode.hide();
});