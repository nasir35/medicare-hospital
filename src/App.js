import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/Shared/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer';
import Team from './pages/Team/Team';
import Appointment from './pages/Appointment/Appointment';
import Details from './pages/Home/Services-section/Details-page/Details';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingSuccess from './pages/Appointment/BookingSuccess/BookingSuccess';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/team">
              <Team></Team>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/bookingSuccess">
              <BookingSuccess></BookingSuccess>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
