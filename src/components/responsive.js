import React,{Fragment} from "react"
import Header from '../components/header.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Responsive(){
    return(
        <Fragment>
            <Header/>
            <section>
                <div className='card'>
                    <div className='card-body'>
                        <img className='img-fluid' src='img/perfil.jpg'/>
                        <h5 className='card-title'>Hola mundo</h5>
                        <p className='card-body'>Hola mundo jasjasjajd</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}