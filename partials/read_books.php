<section class="col-md-7">
    <h3 class="text-center">Books I've Read</h3>
    <p class="text-center">
        <a href class="hidden-print" ng-click="searchShowRead()">Search</a>
        <a href class="hidden-print" ng-click="showAllRead()">Show All</a>
    </p>
    
    <!-- Show search bar -->
    <div ng-show="search_show_read">
        <input class="form-control" ng-model="read_search.volumeInfo.title" type="text">
        <a href ng-click="cancelSearchShowRead()" class="text-center">Cancel Search</a>
    </div>
  
  <!-- Show only if 'show_all_read' is not selected.  Only show the last 5 books or narrow with search -->

    
    <div class="media animate-repeat" ng-repeat="book in books | filter: read_search | limitTo: 5">
        <div class="media-left">
            <img class="media-object read_books_img" ng-src='{{book.volumeInfo.imageLinks.thumbnail}}'>
        </div>    
        <div class="media-body">
            <p class="scroll-y">
            <h4 class="media-heading">{{book.volumeInfo.title}}</h4>
            {{book.volumeInfo.description}}
            </p>
        </div>
    </div>
    
    SEARCH - WILL BE ADD NEW BOOK
    <input ng-model="search" ng-change="searchBooks()" ng-model-options="{debounce: 1000}" type="text"></input>
    <div ng-repeat="item in results">
        <p>{{item.volumeInfo.title}}<br>
        by {{item.volumeInfo.authors[0]}}</p>
        <img title='{{item.volumeInfo.description}}' ng-src='{{item.volumeInfo.imageLinks.smallThumbnail}}'>
    </div>
</section>