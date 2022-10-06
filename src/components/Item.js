import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const Card = ({items}) => {

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

    return(
        <div className="containerCuerpoPrincipal">
            {items.map((item)=>{
                return (
                    <div key={item.id} className="cardBody">
                        <p className="textoCard principal"><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></p>
                        <p className="textoCard">Location: {item.location.name}</p>
                        <img src={item.image} alt="" className="imgCard"></img>
                        <p className="botonCard">VER MÁS</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card