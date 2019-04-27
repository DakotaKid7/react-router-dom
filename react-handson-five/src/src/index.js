import React from 'react';
import { render } from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Things from './screens/Things';
import FavoriteThings from './screens/FavoriteThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Things">Things</Link>
        </li>
        <li>
          <Link to="/FavoriteThings">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Things" component={Things} />
      <Route path="/FavoriteThings" component={FavoriteThings} />
    </div>
  </Router>
);

render(<App />, document.getElementById('root'));