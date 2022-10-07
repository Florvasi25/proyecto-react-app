import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from './Detail'

export const DetailContainer = () => {

    const [card, setCard] = useState()
    const {id} = useParams()

    useEffect(()=>{
        const res = fetch(`https://rickandmortyapi.com/api/character/${id}`)
        res
            .then((res) => res.json())
            .then((value) => setCard(value))
            .catch((err) => console.log(err));
    },[id]);

    return card ? <Detail card={card}/> : <h2>Cargando</h2>
}