<?php


//DB bağlantı

 			 header('Access-Control-Allow-Origin: *');
             header("Access-Control-Allow-Credentials: true"); 
             header('Access-Control-Allow-Headers: X-Requested-With');
             header('Access-Control-Allow-Headers: Content-Type');
             header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT'); // http://stackoverflow.com/a/7605119/578667
          
             header('Cache-Control: public, max-age=180'); 
 
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
$username=$_GET['kullanici'];
$pass=$_GET['sifre'];

$sql = @mysql_query("select * from berk_user 
where username='$username' and password='$pass'"); // uygulama bilgileri getiriliyor

//$satir=mysql_num_rows($sql);

$veri = @mysql_fetch_assoc($sql);


$isim = $veri['name'];
$soyisim = $veri['surname'];
$foto = $veri['photo'];


echo  '{';
     	echo '"user_isim":"'.$isim.'",';
        echo '"user_soyisim":"'.$soyisim.'",';
        echo '"user_foto":"'.$foto.'"';

    echo  '}';
  //echo "{id:".$firma_id.",firma_ismi:'".$firma_adi.",kategori:'".$firma_kategori."',tel:'".$firma_tel."',logo:'".$firma_logo."'}".$virgul;
 

// çekilen kayıtlar değişkenlere atanacak Döngü ile dönderilecek


?>