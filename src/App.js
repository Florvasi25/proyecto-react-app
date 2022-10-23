import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import {CartContextProvider} from './context/CartContext';
import {Checkout} from './components/Checkout';

function App() {

    return (
        <BrowserRouter>
        <CartContextProvider>
            <NavBar/>
            <Routes>
                <Route path='/' element={
                    <ItemListContainer/>
                }/>
                <Route path='/:id' element={
                    <ItemListContainer/>
                }/>
                <Route path='/item/:id' element={
                    <ItemDetailContainer/>
                }/>
                <Route path='/cart' element={
                    <Checkout/>
                }>
                </Route>
            </Routes>
        </CartContextProvider>
        </BrowserRouter>
    );
  }

export default App;
