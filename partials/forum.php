<section class="col-md-12">
    <section class="{{forum_col_left}}">
        <ul>
            <li class = "lists_plain" ng-repeat="book in user_books">
                <a href class="links_plain" ng-click="get_book_forum(book.id)"><img class="{{book_list}}" ng-src="{{book.cover}}"></a>
            </li>
        </ul>
    </section>
    <section class="{{forum_col_right}}">
        <div id="new_post">
            <form>
                <fieldset class="form-group">
                    <label>Post Title</label>
                    <input type="text" class="form-control" ng-model="post.title">
                    <label>Post</label>
                    <textarea class="form-control" ng-model="post.body" rows="5"></textarea>
                </fieldset>
                <button type="button" class="btn btn-default btn-block" ng-click="addPost(selected_book_id)">Add Post</button>
            </form>
        </div>
        <ul>
            <li class="lists_plain" ng-repeat="post in posts">
                <h2>{{post.title}}</h2>
                <p>{{post.body}}</p>
                <p><em class="text-muted">Posted by: {{post.author}}</em></h4>
                <hr>
            </li>
        </ul>
    </section>
</section>