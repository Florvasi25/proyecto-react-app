import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'

export const CategoriesContainer = () => {

    const [category, setCategory] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const res = fetch(`https://rickandmortyapi.com/api/character/?species=${id}`)
        res
            .then((res) => res.json())
            .then((value) => setCategory(value.results))
            .catch((err) => console.log(err));
    },[id]);


    return category.length ? <ItemList items={category}/> : <h2>Cargando</h2>
}