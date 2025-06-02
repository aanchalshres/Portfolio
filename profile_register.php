<?php
require_once('db/connect.php');
session start();
$id=$_SESSION['id'];
$query="SELECT * FROM profile where user_id='$id'";
$result=mysqli_query($conn,$query);
if(mysqli_num_rows($result)==1){
    header()
}
?>
<html>
    <head>
        <title>
            Login
        </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style1.css">
    </head>
    <body class="bg">
        <div class="container">
            <div class="row justify-sontent-md-center">
                <div class="col-8">
                    <div class="card mt-5">
                        <div class="card-header">
                            <h3>Profile Register</h3>
                        </div>
                        <div class="card-body">
                        <?php include('include/successmsg.php'); ?>
                        <?php include('include/errmsg.php'); ?>
                            <form action="process/profile_process.php"  method="POST" enctype="multipart/form-data">
                            <div class="mb-3">
                             <label for="exampleFormControlInput1" class="form-label">Full Name </label>
                             <input type="text" name="name" class="form-control" id="exampleFormControlInput1"  required>
                            </div>

                            <div class="mb-3">
                             <label for="pass1" class="form-label">About</label>
                            <textarea name="about" class="form-control" required></textarea>
                            </div>
                            <div class="mb-3">
                             <label for="pass1" class="form-label">Profile Image</label>
                             <input type="file"  name="profile" required>
                            </div>
                            <hr/>
                            <button type="submit" class="btn btn-success">Save</button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</html>