<section class="col-md-8">
    <h3>Books I'm Currently Reading</h3>

    
    <div ng-repeat="book in current_books">
        <img ng-src='{{book.cover}}' description='{{book.description}}'>
        <p>Title: {{book.title}}<br>
        Author: {{book.author}}<br>
        Pages: {{book.pages}}</p>
    </div>
</section>