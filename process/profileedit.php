<?php
require_once('../db/connect.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=$_POST['fullname'];
    
    $tmp_name=$_FILES['image']['tmp_name'];
    $fileName=$_FILES['image']['name'];
    $msg="";
    move_uploaded_file($tmp_name,'../profile/'.$fileName);
    session_start();
    $user_id=$_SESSION['id'];
    $query="UPDATE profile SET(fullname='$name',profile_image='$fileName')  WHERE user_id='$user_id';
    if(mysqli_query($conn,$query)){
        $msg="Saved";
        
    }
    else{
        $errmsg="Error Occured";
    }
}   
else{
   $errmsg="Request is not support";
}
if($msg!=''){
    header('Location:../dashboard.php');
}else{
    header('Location:../profile_register.php?errmsg='.$errmsg);}
}


