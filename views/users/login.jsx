var React = require ('react');
var DefaultLayout = require('../default');

class Login extends React.Component {
    render() {

        return(
            <DefaultLayout>
            <div class="container">
                <div class="row">
                  <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                      <div class="card-body">
                        <h2 class="card-title text-center">Sign In</h2>
                        <form class="form-signin" action="/users/login" method="post">
                            <div class="form-label-group my-2">
                                <label>Email :</label>
                                <input type="email" class="form-control" placeholder="Enter email here" name="username" required autoFocus/>
                            </div>

                            <div class="form-label-group my-2">
                                <label>Password :</label>
                                <input type="password" class="form-control" placeholder="Enter password here" name="password" required/>
                            </div>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input"/>
                                <label class="custom-control-label">Remember password</label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                          </form>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login;