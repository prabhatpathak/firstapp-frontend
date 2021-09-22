import './App.css';
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import State from './components/States';
import Gallery from './components/Gallery';
import Slider from './components/slider';

function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/ProductDetails/:id" component={ProductDetails}></Route>
        <Route path="/ProductList" component={ProductList}></Route>
        <Route path="/state" component={State}></Route>
        <Route path="/Gallery" component={Gallery}></Route>
        {/* <Route path="/slider" component={Slider}></Route> */}
      </Router>

    </div>
  );
}

export default App;