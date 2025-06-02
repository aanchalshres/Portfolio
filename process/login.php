<?php
require_once('../db/connect.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['email'])&&isset($_POST['pass1'])){
        $email = $_POST['email'];
        $pass1 = $_POST['pass1'];
        if($email!=''){
            $enc= md5($pass1);
            $query="SELECT * FROM users WHERE email ='$email' and password ='$enc'";
            $result=mysqli_query($conn,$query);
            if(mysqli_num_rows($result)==1){
                $row=mysqli_fetch_assoc($result);
                session_start();
                $_SESSION['id']=$row['id'];
                $_SESSION['email']=$row['email'];
                $msg="Successfully login";
            }else{
                $errmsg="email and password doesnot match";
            }
        }else{
            $errmsg="email cannot be empty";
        }
    }else{
        $errmsg="All field are required";
    }
}else{
    $errmsg="GET request is not support";
}
if($msg!=''){
    $user_id=$_SESSION['id'];
    $query="SELECT * FROM profile WHERE user_id='$user_id'";
    $result =mysqli_query($conn,$query);
    if(mysqli_num_rows($result)==1){
        header('Location:../dashboard.php');

    }else{
        header('Location:../profile_register.php');

    }
    
}else{
    header('Location:../login.php?err='.$errmsg);
}
