import React,{Fragment} from 'react'
import '../css/card.css'

export default function Card({title,description, icon}){
    return(
        <Fragment>
            <div className='card'>
            <img className='img-fluid redondear' src={icon} alt=""/>
                <div className='card-body'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-text perfil'>{description}</p>
                    <a href='' download>Descargar CV</a>
                </div>
            </div>
        </Fragment>
    )
}