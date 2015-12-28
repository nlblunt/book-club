<section class="col-md-6">
    <h2>Books Found on Google</h2>
    <article class="media animate-repeat" ng-repeat="book in results | limitTo: 5">
        <div ng-if="added(book) === 0">
            <div class="media-left">
                <img class="media-object read_books_img" ng-src='{{book.volumeInfo.imageLinks.thumbnail}}'>
            </div>    
            <div class="media-body">
                <p class="scroll-y">
                <h4 class="media-heading">{{book.volumeInfo.title}}</h4>
                By: {{book.volumeInfo.authors[0]}}<br>
                Pages: {{book.volumeInfo.pageCount}}<br>
                Rating: {{book.volumeInfo.averageRating}}
                <progress class="progress progress-striped progress-info" value='{{book.volumeInfo.averageRating}}' max="5">{{book.volumeInfo.averageRating}}</progress>
                <button class="btn btn-link" ng-click="addBookFromGoogle(book, 'false')">Currently Reading</button>
                <button class="btn btn-link" ng-click="addBookFromGoogle(book, 'true')">Finished</button>
                </p>
            </div>
        </div>
    </article>
</section>