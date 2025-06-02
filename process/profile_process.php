<?php
require_once('../db/connect.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=$_POST['name'];
    $about=$_POST['about'];
    $tmp_name=$_FILES['profile']['tmp_name'];
    $fileName=$_FILES['profile']['name'];
    $msg="";
    move_uploaded_file($tmp_name,'../profile/'.$fileName);
    session_start();
    $user_id=$_SESSION['id'];
    $query="INSERT INTO profile(fullname,profile_image,about,user_id) VALUES('$name','$fileName','$about','$user_id')";
    if(mysqli_query($conn,$query)){
        $msg="Saved";
        
    }else{
        $errmsg="Error Occured";
    }
    
}else{
   $errmsg="Request is not support";
}
if($msg!=''){
    header('Location:../dashboard.php');
}else{
    header('Location:../profile_register.php?errmsg='.$errmsg);
}

