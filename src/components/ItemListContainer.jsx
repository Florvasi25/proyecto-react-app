import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [list, setList] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        let res
        if (id) {
            res = fetch(`https://rickandmortyapi.com/api/character/?species=${id}`)
        } else {
            res = fetch(`https://rickandmortyapi.com/api/character`)
        }
        res
            .then((res) => res.json())
            .then((value) => setList(value.results))
            .catch((err) => console.log(err));
    },[id]);

    return list.length ? <ItemList items={list}/> : <h2>Cargando</h2>
}