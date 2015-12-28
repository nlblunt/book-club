<div class="col-md-6">
    <h2>Books On Server</h2>
    <div class="media animate-repeat" ng-repeat="book in server_books | filter: search | limitTo: 5">
        <div class="media-left">
            <img class="media-object read_books_img" ng-src='{{book.cover}}'>
        </div>    
        <div class="media-body">
            <p class="scroll-y">
            <h4 class="media-heading">{{book.title}}</h4>
            By: {{book.author}}<br>
            Pages: {{book.pages}}<br>
            </p>
        </div>
    </div>
</div>