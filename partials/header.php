            <header>
                <img id="img-header" ng-src="images/header.png">
                
                <!-- Show if Not Signed in -->
                <form ng-hide="signed_in" id="form-sign-in">
                    <p class="text-center">Username: demo, Password: password</p>
                    <div class="form-group">
                        <label>Username</label>
                        <input placeholder="My Username" ng-model="user.name" type="text" class="form-control">
                        <label>Password</label>
                        <input placeholder="password" ng-model="user.password" type="password" class="form-control">
                        <button ng-click="sign_in()" class="btn btn-center btn-success">Sign In</button>
                    </div>
                </form>

            </header>