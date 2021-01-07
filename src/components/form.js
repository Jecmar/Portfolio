import React, { Fragment } from 'react'
import '../css/form.css'

export default function Form() {
    return (
        <Fragment>
            <div className='card'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 col-lg-8 line'>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Asunto</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Mensaje</label>
                                <textarea className='form-control'></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>                        
                    </div>
                    
                    <div className='col-md-4 col-lg-4'>
                        <div className='container'>
                            <div className='row justify-content-center my-5 py-5'>
                                <div className='col-md-8 col-lg-8'>
                                    <h6>Email de contacto</h6>
                                    <p>jecmareduardo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}