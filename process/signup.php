<?php
require_once('../db/connect.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['email'])&&isset($_POST['pass1'])&&isset($_POST['pass2'])){
        $email = $_POST['email'];
        $pass1 = $_POST['pass1'];
        $pass2 = $_POST['pass2'];

        if($email!=''){
            if($pass1==$pass2){
                if(strlen($pass1)>=8){
                    $enc=md5($pass1);
                    $query="INSERT INTO users(email,password) values('$email','$enc')";
                    if(mysqli_query($conn,$query)){
                        $msg="Successfuflly signup";
                        
                    }else{
                        $errmsg= "some error occured";
                    }

                }else{
                    $errmsg="Password must be at least 8 length";
                }
            }else{
                $errmsg="password and password confirmation does not match"; 
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
    header('Location:../login.php?msg='.$msg);
}else{
    header('Location:../signup.php?err='.$errmsg);
}
