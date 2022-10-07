import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [list, setList] = useState([])

    useEffect(()=>{
        const res = fetch(`https://rickandmortyapi.com/api/character`)
        res
            .then((res) => res.json())
            .then((value) => setList(value.results))
            .catch((err) => console.log(err));
    },[]);


    return list.length ? <ItemList items={list}/> : <h2>Cargando</h2>
}