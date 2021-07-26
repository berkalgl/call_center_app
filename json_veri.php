<?php


//DB bağlantı

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
echo "[";
while($veri = @mysql_fetch_assoc($sql)){


$firma_id=$veri['id'];
$firma_adi=$veri['adi'];
$firma_tel=$veri['tel'];
$firma_logo=$veri['logo'];
$firma_kategori=$veri['kategori'];

if($say<$satir){
$virgul=",";
}else{
$virgul="";
}

  echo "{id:".$firma_id.",firma_ismi:'".$firma_adi."',kategori:'".$firma_kategori."',tel:'".$firma_tel."',logo:'".$firma_logo."'}".$virgul;
 

$say=$say+1;
}

// çekilen kayıtlar değişkenlere atanacak Döngü ile dönderilecek


echo "]";
?>