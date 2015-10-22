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
    <script src="js/app.js"></script>
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
             <nav>
                <ul id="nav">
                    <li class="text-center"><img ng-src="images/red-book.png"><br>
                    Add Book</li>
                    <li class="text-center"><img ng-src="images/writing.png"><br>
                    Talk (x)</li>
                    <li class="text-center"><img ng-src="images/batman_profile.jpg"><br>
                    Profile</li>
                </ul>
            </nav>   
            
            <!-- Row for main content -->
            <div class="row" id="main_content">
                <!-- Left column, 5 col wide -->
                <div class="col-md-5">
                    <h3>Book I'm Currently Reading</h3>
                    <img ng-src='{{book.volumeInfo.imageLinks.thumbnail}}'>
                    {{book.volumeInfo.title}}
                    {{book.volumeInfo.description}}
                </div>
                
                <!-- Right column, 7 wide -->
                <div class="col-md-7">
                    <h3>Books I've Read</h3>
                    
                  <input ng-model="read_search.volumeInfo.title" type="text">
                  
                  <table id="read-books">
                    <div ng-repeat="book in books | filter: read_search | limitTo: 5">  
                    <tr>
                        <td rowspan="2"><img ng-src='{{book.volumeInfo.imageLinks.thumbnail}}'><td>
                        <td>{{book.volumeInfo.title}}</td>
                      </tr>
                      <tr>
                        <td>{{book.volumeInfo.author}}</td>
                      </tr>
                    </div>
                  </table>
                  
                    <input ng-model="read_search.volumeInfo.title" type="text">
                    <div ng-repeat="book in books | filter: read_search | limitTo: 5">
                        <p>Title: {{book.volumeInfo.title}}</p>
                    </div>
                    
                    SEARCH
                    <input ng-model="search" ng-change="searchBooks()" ng-model-options="{debounce: 1000}" type="text"></input>
                    <div ng-repeat="item in results">
                        <p>Title: {{item.volumeInfo.title}}</p>
                    </div>
                </div>
            </div>

            
        </div>

    </div>
</body>
</html>