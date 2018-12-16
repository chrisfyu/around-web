/**
 * Created by yufei on 2018/12/12.
 */
// import React from 'react';
// import { Register } from './Register';
// import { Login } from './Login';
//
// export class Main extends React.Component {
//     render() {
//         return (
//             <div className="main">
//                 <Login />
//                 <Register/>
//             </div>
//         );
//     }
// }

import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
// import { Home } from './Home';
import { Switch, Route, Redirect, Link } from 'react-router-dom'

export class Main extends React.Component {
    // getHome = () => {
    //     return this.props.isLoggedIn ? <Home/> : <Redirect to="/login" />;
    // }

    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLogin={this.props.handleLogin} />;
    }

    render() {
        return (
            <div className="main">
                {/*<Route path="/Login" component={Login}/>*/}
                {/*<Route path="/Login/1" component={Register}/>*/}
                {/*<Link to="Home1" />*/}
                {/*<Redirect to="abc"/>*/}
                {/*<Login />*/}
                {/*<Register/>*/}
                <Switch>
                    <Route exact path="/" render={this.getLogin}/>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    {/*<Route path="/home" render={this.getHome}/>*/}
                    <Route render={this.getLogin}/>
                </Switch>
            </div>
        );
    }
}
