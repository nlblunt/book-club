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
             <?php include("partials/nav.php"); ?> 
            
            <!-- Row for main content -->
            <div class="row" id="main_content">
                
                <!-- Left column, 5 col wide -->
                <section class="col-md-5">
                    <?php include("partials/current_book.php"); ?>
                </section>
                
                <!-- Right column, 7 wide -->
                <section class="col-md-7">
                    <h3 class="text-center">Books I've Read</h3>
                    <p class="text-center">
                        <a href ng-click="searchShowRead()">Search</a>
                        <a href ng-click="showAllRead()">Show All</a>
                    </p>
                    
                    <!-- Show search bar -->
                    <div ng-show="search_show_read">
                        <input class="form-control" ng-model="read_search.volumeInfo.title" type="text">
                        <a href ng-click="cancelSearchShowRead()" class="text-center">Cancel Search</a>
                    </div>
                  
                  <!-- Show only if 'show_all_read' is not selected.  Only show the last 5 books or narrow with search -->
                  <table ng-hide="show_all_read" id="read-books">
                    <tr class="animate-repeat" ng-repeat="book in books | filter: read_search | limitTo: 5">
                        <td class="read_books"><img title='{{book.volumeInfo.description}}' class="animate-repeat" ng-src='{{book.volumeInfo.imageLinks.thumbnail}}'><td>
                        <td class="align_top"><p><span class="book_title">{{book.volumeInfo.title}}</span><br>
                            {{book.volumeInfo.authors[0]}}</p></td>
                    </tr>
                  </table>
                    
                    SEARCH - WILL BE ADD NEW BOOK
                    <input ng-model="search" ng-change="searchBooks()" ng-model-options="{debounce: 1000}" type="text"></input>
                    <div ng-repeat="item in results">
                        <p>{{item.volumeInfo.title}}<br>
                        by {{item.volumeInfo.authors[0]}}</p>
                        <img title='{{item.volumeInfo.description}}' ng-src='{{item.volumeInfo.imageLinks.smallThumbnail}}'>
                    </div>
                </section>
            </div>
        </div>
    </div>
</body>
</html>