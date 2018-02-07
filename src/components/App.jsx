import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Body from './body/Body';
import Header from './header/Header';
import SignUp from './body/SignUp';
import Footer from './footer/Footer';


const App = () => {
  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        body{
          font-family: 'Montserrat', 'san-serif'
        }
      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Body} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
};


export default App;
