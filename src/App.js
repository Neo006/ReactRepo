import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/main/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Main} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
