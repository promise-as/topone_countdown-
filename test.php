<?php
function curl($url, $params = false, $ispost = 0) {
    $httpInfo = array();
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22');
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    if ($ispost) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_URL, $url);
    } else {
        if ($params) {
            curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);
        } else {
            curl_setopt($ch, CURLOPT_URL, $url);
        }
    }
    $response = curl_exec($ch);
    if ($response === FALSE) {
        return false;
    }
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
    curl_close($ch);
    return $response;
}
$t = '';
if(!empty($_POST['time'])){
    $m = $_POST['time'];
    if($m == '0'){
        $t = '-1hour';
    } else if($m == '1'){
        $t = '-5minute';
    } else if($m == '2') {
        $t ='-1minute';
    } 
} else{
    $t ='-10minute';
}

// if(!empty($_POST['time'])){
//     $m = $_POST['time'];
//     if($m == '5'){
//         $t = '-5minute';
//     } else if($m == '15'){
//         $t = '-15minute';
//     } else if($m == '60') {
//         $t ='-1hour';
//     } else if($m == '720') {
//         $t ='-12hour';
//     }
// } else{
//     $t ='-5hour';
// }



//首次展示行情图
$time = strtotime(date('Y-m-d H:i:s', strtotime($t))) * 1000;
$data = [
    'timestamp' => $time,    //参数格式时间戳 * 1000
    'symbol' => 'ETHBTC',     //产品
    'interval' => '1m'
];
$params = json_encode($data);
$datas = $params;
$res = curl('http://118.24.194.127/kline.php', $datas, $ispost = 1);
echo $res;
?>