import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
} from 'react-router-dom';
import Menu from "./Menu"
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginout, selectUser } from './features/userSlice';
import Signup from './Signup';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
   auth.onAuthStateChanged((userAuth) => {
     if (userAuth) {
       // User is signed in
       dispatch(login({
         email: userAuth.email,
         uid:userAuth.uid,
         displayName: userAuth.displayName
       }))
     } else {
       // User is Signed out
       dispatch(loginout())
     }
   })
  },[dispatch])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
            <HeaderBlock />
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/teslaaccount'>
            {!user ? (
            <Redirect to='/login' /> 
            ) : (
              <>
                <TeslaAccount 
                  isMenuOpen={isMenuOpen} 
                  setIsMenuOpen={setIsMenuOpen} 
                />
                {isMenuOpen && <Menu/>}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
