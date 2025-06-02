<?php
$host="localhost";
$username="root";
$password="";
$dbname="portfolio";

$conn = mysqli_connect($host,$username,$password,$dbname);
if(!$conn){
    die("connection can not be established");
}

?>