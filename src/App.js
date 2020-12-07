import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/style.scss'
import IndexPage from './containers/IndexPage'
import AuthPage from './containers/AuthPage'
import PhotoItem from './components/PhotoItem'


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={IndexPage} />        
          <Route exact path='/auth' component={AuthPage} />
          <Route exact path='/photos/:photoId' component={PhotoItem} />
          <Route component={IndexPage} />  
        </Switch>
      </Router>          
    </div>
  )
}

export default App;
