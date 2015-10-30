<!DOCTYPE html>

<html ng-app="projectApp">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    
    <!-- Load jQuery -->
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    <!-- Latest compiled and minified Bootstrap JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    
    <!-- Start AngularJS -->
    <!-- <script src="../AngularJS/angular-1.4.7/angular.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-resource.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-route.js"></script>
    <script src="app.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/services.js"></script>
</head>

<body class="container-fluid" ng-controller="homeController as homeCtrl">
    
    <!-- Header row-->
    <div class="row">
        
        <!-- 10 col, offset 1 col right -->
        <div class="col-md-10 col-md-offset-1">
            
            <!-- header.php -->
            <?php include("partials/header.php"); ?>
        </div>
    </div>
    
    <!-- Show only if Signed in -->
    <div class="row" ng-show="signed_in">
        
        <!-- 10 col, offset 1 col right -->
        <div class="col-md-10 col-md-offset-1">
            
             <!-- Horizontal Navbar -->
             <?php include("partials/nav.php"); ?> 
            
            <!-- Row for main content -->
            <div class="row" id="main_content">
                
                <!-- Current Book : Left column, 5 col wide -->
                <?php include("partials/current_book.php"); ?>

                <!-- Read Books : Right column, 7 col wide -->
                <?php include("partials/read_books.php"); ?>
            </div>
            
            <!-- Footer -->
            <?php include("partials/footer.php"); ?>
        </div>
    </div>
</body>
</html>