import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {CategoriesContainer} from './components/CategoriesContainer'
import {DetailContainer} from './components/DetailContainer'

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={
                    <ItemListContainer/>
                }/>
                <Route exact path='/:id' element={
                    <CategoriesContainer/>
                }/>
                <Route exact path='/item/:id' element={
                    <DetailContainer/>
                }/>
            </Routes>
        </BrowserRouter>
    );
  }

export default App;
