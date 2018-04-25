import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="jumbo-common  speakers ">
                </div>
                <br/><br/>
                <div className="container-main">
                    <div className="row">
                        <div className="col-12">
                            <form noValidate>
                                Username:<br/>
                                <input
                                    name="email"
                                    type="email"
                                    label="My user ID"
                                /><br/>
                                Password: <br/>
                                <input
                                    name="password"
                                    type="password"
                                    label="My password"
                                />
                                <div className="mt-2">
                                    <button className="btn btn-primary btn-reversed-borders">Ok</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Login.defaultProps = {};

export default Login;
