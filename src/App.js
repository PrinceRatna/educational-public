
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Event from './component/Event/Event';
import Register from './component/Register/Register';
import SignIn from './component/SignIn/SignIn';
import Footer from './component/Footer/Footer';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
          <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
                 <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/event">
              <Event></Event>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/sign">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          </BrowserRouter>
    </div>
  );
}

export default App;
