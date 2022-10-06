import Card from "./Item"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const name = useParams()
    const [state, setState] = useState([])

    useEffect(()=>{
    
        const res = fetch("https://rickandmortyapi.com/api/character")

        res.then((res)=>{
        return res.json()
        }).then((value)=>{
        setState(value.results)
        })
    },[])
    useEffect(() => {
        const res = state.filter((value) => {
            return value.id == name.id
        })
        setState(res)
    },[name])

    return (
        <>
        <Card items={state}/>
        </>
    )
}

export default ItemListContainer