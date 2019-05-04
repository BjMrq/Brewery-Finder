import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from 'views/App';

axios.defaults.baseURL = 'https://api.openbrewerydb.org'

// redux specific imports
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
// import configureStore from './store';

// Global styles
// import 'sanitize.css/sanitize.css';
// import 'semantic-ui-css/semantic.min.css';

// If not using redux:
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);


// It is not at all a requirement to use redux nor is it expected.
// However, if you want to use redux, here is a working setup:
// Create redux store with history
// const initialState = {};
// const history = createHistory();
// const store = configureStore(initialState, history);
//
// render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <App />
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('app')
// );
