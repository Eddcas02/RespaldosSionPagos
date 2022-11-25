<?php 
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: multipart/form-dat; application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$prefijo = $_POST["prefijo"];

if(isset($_FILES["image"])){
    move_uploaded_file($_FILES["image"]["tmp_name"], "../archivos/". $prefijo . $_FILES["image"][""]);
    if(isset($_FILES["original"])){
        $prefijoTmp = $_POST["prefijoTmp"];
        move_uploaded_file($_FILES["original"]["tmp_name"], "../archivos/original_".$prefijoTmp."_". $_FILES["original"]["name"]);
    }

    http_response_code(200);
}else{
    http_response_code(503);
} 
?>