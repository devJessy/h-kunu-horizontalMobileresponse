import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from 'layouts'
import Landing from 'pages/Landing'
// import './App.css';
import "aos/dist/aos.css";

const App = () => {
  return (
    <div className='App' style={{overflowX : 'hidden'}}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/'>
              <Landing />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}

export default App