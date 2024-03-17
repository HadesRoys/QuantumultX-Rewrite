/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */

// $request, $response, $notify(title, subtitle, message), console.log(message)
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
// $response.statusCode, $response.headers, $response.body
//
// $prefs is for persistent store and the data of $prefs will be cleared when Quantumult X is deleted.
// $prefs.setValueForKey(value, key), $prefs.removeValueForKey(key), $prefs.removeAllValues(). Returns true or false, value and key should be string.
// $prefs.valueForKey(key) returns value.
//
// setTimeout(function() { console.log("abc"); }, 1000);
//
// You can optional change the response headers at the same time by using $done({body: modifiedBody, headers: modifiedHeaders}); only change the response headers is not allowed for script-response-body. The modifiedHeaders can be copied and modified from $response.headers, please do not change the content length, type and encoding field.
// Response status can also be optional changed by using $done({body: modifiedBody, headers: modifiedHeaders, status: modifiedStatus}), the modifiedStatus should be like "HTTP/1.1 200 OK"

var body = $response.body;
var obj = '{"resultCode":0,"resultData":{"PRODUCT_CONTENT":"<p><b>产品介绍</b></p><p>新老用户均可参与，通过10积分+0.50元直充90积分，并于72小时内直接兑换为“1元话费券”</p><p><b><font color=\"#c24f4a\">【仅支持中国联通号码充值】</font></b></p><p><font color=\"#c24f4a\"><b>【每个手机号每日限兑1次】</b><b><br/></b></font></p><p><b><font color=\"#c24f4a\">【产品订购后72小时内到账】</font></b></p><p><b>【客服电话：4000600611】</b></p><p><b>【兑换失败不返还兑换次数】</b></p><p><b><br/></b></p><p><b>注意事项</b></p><p>1. 充值方式：直充，1元话费将会在72小时内充值到账</p><p>2. 填写需要充值话费的手机号码</p><p>3. 每个手机号每日仅限兑换1次</p><p>4. 充值成功将收到余额变动短信，查询余额可以拨打联通客服电话10010</p><p>5. 同一手机号码10s内请勿频繁兑换</p><p>6.&nbsp;产品一旦下发成功，不可退换</p><p>7. 若产品订购后72小时内未到账且未自动退款，需要联系客服进行处理</p>","PRODUCT_DELIVERY_TIME":"","PRODUCT_PAY_TYPE":1,"MERGE":"10积分+0.50元","EXCHANGE_COUNT":1,"PRODUCT_NUM":0,"PRODUCT_IMG2":"","PRODUCT_IMG1":"https://burning.wo-adv.cn/img/product/171063679860295880.png","PRODUCT_IS_BIND":0,"PRODUCT_IMG":"https://burning.wo-adv.cn/img/product/171063679860278876.png","PRODUCT_INTEGRAL":10,"PRODUCT_ETIME":"2024-03-17 12:04:58","PRODUCT_IS_XINRANKA":0,"userExchange":0,"PRODUCT_RECHARGE":6,"PRODUCT_ACTION":2,"PRODUCT_URL":"","PRODUCT_ID":763255,"PRODUCT_NAME":"1元话费券","PRODUCT_MONEY":50,"PRODUCT_TYPE":0,"PRODUCT_CTIME":"2024-03-17 08:53:18","PRODUCT_IMG3":"","PRODUCT_STATUS":1,"PRODUCT_SMALL_IMG":"https://burning.wo-adv.cn/img/product/171063679860297868.png","SECKILL_CONFIG_ID":0},"resultMsg":"成功！"}';
obj = JSON.parse(obj);
// body = JSON.stringify(obj);

console.log(body);

$done(body);
