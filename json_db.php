<?php


//DB bağlantı

 			 header('Access-Control-Allow-Origin: *');
             header("Access-Control-Allow-Credentials: true"); 
             header('Access-Control-Allow-Headers: X-Requested-With');
             header('Access-Control-Allow-Headers: Content-Type');
             header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT'); // http://stackoverflow.com/a/7605119/578667
       
 
$servername = "46.101.127.161";
$username = "admin_yildizedu";
$password = "bilenbilen";
$con = mysql_connect($servername, $username, $password) or die ("Could not connect: " . mysql_error());;
mysql_select_db('admin_edu', $con);

mysql_query("SET NAMES 'utf8'"); 
mysql_query("SET CHARACTER SET utf8"); 
mysql_query("SET COLLATION_CONNECTION = 'utf8_turkish_ci'");  
header('Content-type: text/html; charset=UTF-8');


// Select ile firmalar tablosundaki kayıtları çekeceğiz

$sql = @mysql_query("select * from berk_firmalar"); // uygulama bilgileri getiriliyor

$satir=mysql_num_rows($sql);
$say=1;
$id=0;
echo "[";
while($veri = @mysql_fetch_assoc($sql)){


$firma_id = $veri['id'];
$firma_adi = $veri['adi'];
$firma_tel = $veri['tel'];
$firma_logo = $veri['logo'];
$firma_kategori = $veri['kategori'];

if($say<$satir){
$virgul=",";
}else{
$virgul="";
}


echo  '{';
     	echo '"id":'.$id.',';
        echo '"ad":"'.$firma_adi.'",';
        echo '"kategori":"'.$firma_kategori.'",';
        echo '"logo":"'.$firma_logo .'",';
        echo '"tel":"'.$firma_tel .'"';

    echo  '}'.$virgul;
  //echo "{id:".$firma_id.",firma_ismi:'".$firma_adi.",kategori:'".$firma_kategori."',tel:'".$firma_tel."',logo:'".$firma_logo."'}".$virgul;
 

$say=$say+1;
$id=$id+1;
}

// çekilen kayıtlar değişkenlere atanacak Döngü ile dönderilecek


echo "]";
?>