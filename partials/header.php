            <header>
                <img id="img-header" ng-src="images/header.png">
                
                <!-- Show if Not Signed in -->
                <form ng-hide="signed_in" id="form-sign-in">
                    <div class="form-group">
                        <label>Username</label>
                        <input placeholder="MyUsername" ng-model="user.name" type="text" class="form-control">
                        <label>Password</label>
                        <input placeholder="someone@somewhere.com" ng-model="user.password" type="password" class="form-control">
                        <button ng-click="sign_in()" class="btn btn-center btn-success">Sign In</button>
                    </div>
                    
                    <p class="text-center">New to this? <a href> Sign Up Now</a></p>
                </form>

            </header>