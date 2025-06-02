<html>
    <head>
        <title>
            Signup
        </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style1.css">
    </head>
    <body class="bg">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <div class="card mt-5">
                        <div class="card-header">
                            <h3>Signup</h3>
                            
                        </div>
                        <div class="card-body">
                            <?php include('include/errmsg.php'); ?>
                            <form action="process/signup.php"  method="POST">
                            <div class="mb-3">
                             <label for="exampleFormControlInput1" class="form-label">Email address</label>
                             <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>

                            <div class="mb-3">
                             <label for="pass1" class="form-label">Password</label>
                             <input type="password" class="form-control" id="pass1" name="pass1">
                            </div>

                            <div class="mb-3">
                             <label for="pass1" class="form-label">Password Confirmation</label>
                             <input type="password" class="form-control" id="pass2" name="pass2">
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