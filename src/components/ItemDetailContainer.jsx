import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
        return (
            <div className='containerError'>
                <h1 className='cuatrocientos'>404</h1>
                <h2 className='tituloError'>Lo sentimos. El producto no existe :(</h2>
                <Link to="/"><button className='botonCard'>Regresar al Inicio</button></Link>
            </div>
        )
    } else {
        return detalle ? <ItemDetail item={detalle}/> : <div className="spinnerBootstrap"><Spinner animation="border" role="status"></Spinner></div>
    }
}