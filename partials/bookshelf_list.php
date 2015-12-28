<section class="col-md-4">
    <!-- Get the bookshelves for the user -->
    <ul>
        <li ng-repeat="shelves in bookshelves">
            {{shelves.name}} {{shelves.description}}
        </li>
    </ul>
</section>