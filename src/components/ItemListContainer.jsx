import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
// import {doc, getDoc, getFirestore} from 'firebase/firestore'

export const ItemListContainer = () => {

    const [list, setList] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        // const db = getFirestore()

        // const data = doc(db, "items", "2TrTJLXV1OEQZdq0hmg0")
        // getDoc(data).then((value) => {
        //     console.log(value.data())
        // })

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