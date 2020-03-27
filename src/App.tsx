import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.less';
import  Home from './page/home'

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
    		<Switch>
    			<Route path="/index" component={Home} />
    			<Redirect from="/" exact to="/index" />
    		</Switch>
    	</BrowserRouter>
    </div>
  );
}

export default App;
