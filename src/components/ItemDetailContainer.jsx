import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [detalle, setDetalle] = useState()
    
    useEffect(() => {

        const db = getFirestore()

        const data = doc(db, "items", id)
        getDoc(data).then((value) => {
            if (value.exists()) {
                setDetalle({id: value.id, ...value.data()})
            } else {
                return setDetalle(-1)
            }
        })
    },[id]);

    if (detalle === -1) {
        return <p>error</p>
    } else {
        return detalle ? <ItemDetail item={detalle}/> : <div className="spinnerBootstrap"><Spinner animation="border" role="status"></Spinner></div>
    }
}