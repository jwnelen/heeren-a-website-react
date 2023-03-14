import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import 'components/UI/index.scss'
// @import 'components/UI/index.scss';

import App from "./containers/App";
import * as serviceWorker from './serviceWorker';

// Importing the Bootstrap CSS
// import '../node_modules/font-awesome/css/font-awesome.min.css';

const root = document.getElementById("root");
const Root = <App />;

ReactDOM.render(Root, root);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
