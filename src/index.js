import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from "redux";
import { Provider }  from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import allReducers from "./redux/reducers/allReducers";
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig={
  key: 'root',
  storage,
};
const persistedReducer =  persistReducer(persistConfig, allReducers);
const store=createStore(persistedReducer, applyMiddleware(ReduxThunk));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
