// import React, { Component } from 'react';
// import logo from '../assets/images/logo.svg';
// import {TopBar} from './TopBar';
// // import '../styles/App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import { TopBar } from './TopBar';
import {Main} from './Main';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: false
    }

    handleLogin = () => {
        this.setState({isLoggedIn: true});
    }
    handleLogout = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        return (
            <div className="App">
                <TopBar isLoggedIn={this.state.isLoggedIn}
                        handleLogout={this.handleLogout}/>
                <Main />
            </div>
        );
    }
}

export default App;