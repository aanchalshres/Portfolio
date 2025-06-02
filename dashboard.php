<?php include('include/logincheck.php'); ?>
<?php
require_once('db/connect.php');
session_start();
$id=$_SESSION['id'];
$query="SELECT * FROM profile where user_id='$id'";
$result=mysqli_query($conn,$query);

?>
<html>
    <head>
        <title>
            Dashboard
        </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style1.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <section class="profile_info">
                        <div class="profile_image">
                        <img src="img/bgimg.jpg">
                        </div>
                        <hr/>
                            <h3>Mr. Ram Kumar Shrestha </h3>
                            <hr/>
                    </section>
                    <div class="card">
                        <div class="card-header alert-danger">
                            Skills
                            <span class="addIcon">+</span>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Html</li>
                                <li>CSS</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div class="card-header alert-danger">
                            Projects
                            <span class="addIcon">+</span>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Education</li>
                                <li>Edu 2</li>
                                <li>Edu 3</li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn btn-danger">
                        <a href="process/logout.php">Logout</a>
                    </button>

                </div>
                <div class="col-8">
                <div class="card">
                        <div class="card-header alert-danger">
                           About
                            <span class="addIcon">+</span>
                        </div>
                        <div class="card-body">
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti magnam minus aliquam rem laudantium. Consequuntur inventore rerum dolorum ea? Porro, rem asperiores iste officia tenetur consectetur veniam aliquid dolores!
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit eveniet soluta quas enim dolor rem velit maxime incidunt! Quos distinctio aspernatur iure voluptatem id itaque similique, sint sapiente sequi.
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde iste illo, et perferendis ex alias similique distinctio assumenda nihil temporibus quis placeat optio reprehenderit enim sint repellendus repudiandae, odit aut?

                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-header alert-danger">
                           Projects
                            <span class="addIcon">+</span>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Pro 1</li>
                                <li>Pro 2</li>
                                <li>Pro3</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</html>