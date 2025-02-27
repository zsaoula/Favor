import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss";
import { Provider } from 'react-redux';
//import store from './app/store';
import store from './reducers/index';
import { getPosts } from './actions/post.actions';
import { getUsers } from './actions/users.actions';

store.dispatch(getUsers());
store.dispatch(getPosts());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

