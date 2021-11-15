import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import About from './component/Home/About/About';
import Banner from './component/Home/Banner/Banner';
import Contact from './component/Home/Contact/Contact';
import Login from './component/Home/Login/Login/Login';
import Reg from './component/Home/Login/Login/Reg';
import PrivateRoute from './component/Home/Login/PrivateRoute/PrivateRoute';
import Services from './component/Services/Services';
import NotFound from './component/Home/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import Home from './pages/Home/Home';
import Addnewcar from './component/Dashboard/Addnewcar/Addnewcar';
import Booking from './component/Booking/Booking';
import MyOrders from './component/Dashboard/Myorder/MyOrders';
import Admin from './component/Dashboard/Adadmin/Admin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/Banner">
              <Banner></Banner>
            </Route>
            <Route exact path="/About">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/addcar">
              <Addnewcar> </Addnewcar>
            </Route>
            <Route exact path="/admin">
              <Admin> </Admin>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              {' '}
              <Login></Login>{' '}
            </Route>
            <Route exact path="/reg">
              {' '}
              <Reg> </Reg>
            </Route>
            <PrivateRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/myorder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/*">
              <NotFound> </NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
