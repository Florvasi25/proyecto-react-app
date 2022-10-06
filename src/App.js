import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Prueba from "./components/Prueba"
import ItemListContainer from './components/ItemListContainer';


function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={
                    <Prueba/>
                }/>
                <Route exact path='/function' element={
                    <ItemListContainer/>
                }/>
                <Route exact path='/items/:id' element={
                    <ItemListContainer/>
                }/>
            </Routes>
        </BrowserRouter>
      );
  }

export default App;
