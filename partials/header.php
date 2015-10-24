            <header>
                <img id="img-header" ng-src="images/header.png">
                
                <!-- Show if Not Signed in -->
                <form ng-hide="signed_in" id="form-sign-in">
                    <div class="form-group">
                        <label>Sign In</label>
                        <input type="text" class="form-control">
                        <label>Password</label>
                        <input type="password" class="form-control">
                    </div>
                    
                    <p class="text-center">New to this? <a href> Sign Up Now</a></p>
                </form>

            </header>