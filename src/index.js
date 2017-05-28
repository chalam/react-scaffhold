import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import JumbotronGrid from './JumbotronGrid';
import Footer from './Footer';
import HeaderNavigation from './HeaderNavigation';

import About from './About'
import Repos from './Repos'

const JumbotronBody = () => (
  <div>
    <HeaderNavigation/>
    <JumbotronGrid></JumbotronGrid>
    <Footer/>
  </div>
)

const NoBody = () => (
  <div>
    <HeaderNavigation/>
    <Footer/>
  </div>
)

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <App/>
  }, {
    path: '/jumbo',
    sidebar: () => <div>jumbotronBody!</div>,
    main: () => <JumbotronBody/>
  }, {
    path: '/noBody',
    sidebar: () => <div>noBody!</div>,
    main: () => <NoBody/>
  }, {
    path: '/repos',
    sidebar: () => <div>noBody!</div>,
    main: () => <Repos/>
  }, {
    path: '/about',
    sidebar: () => <div>noBody!</div>,
    main: () => <About/>
  }
]

ReactDOM.render(
  <Router>
    <div>
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
