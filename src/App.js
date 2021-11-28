import {BrowserRouter,Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css';
import SimpleBottomNavigation from "./components/MainNav";
import Container from '@material-ui/core/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
     <Header />
  <div className="app">

  <Container> 

    <Switch>
    </Switch>
      <Route path ='/' component= {Trending} exact/>
      <Route path ='/movies' component= {Movies}/>
      <Route path ='/series' component= {Series}/>
      <Route path ='/search' component= {Search}/>
  </Container>

  </div>



  <SimpleBottomNavigation/>
  </BrowserRouter>
  );
}

export default App;
