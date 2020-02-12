import React from 'react';
import './App.css';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import MainContainer from './components/MainContainer/MainContainer'
import Result from './components/Result/Result';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <HashRouter >
        {/* <MainContainer />
        <Result /> */}
        <Route exact path="/" component={MainContainer} />
        <Route path="/result" component={Result} />
      </HashRouter>
    </Provider>
  );
}

export default App;
