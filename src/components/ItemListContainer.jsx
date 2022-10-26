import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner';

// import {doc, getDoc, getFirestore} from 'firebase/firestore'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const {category} = useParams()
    
    useEffect(() => {

        const db = getFirestore()
        let data
        if (category) {
            data = query(collection(db, "items"),where("category", "==", category))
        } else {
            data = collection(db, "items")
        }
        getDocs(data).then((value) => {
            setItems(value.docs.map((value) => {
                return {id: value.id, ...value.data()}
            }))
        })

    },[category]);

    return items.length ? <ItemList itemList={items}/> : <div className="spinnerBootstrap"><Spinner animation="border" role="status"></Spinner></div>
}