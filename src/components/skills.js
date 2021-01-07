import React, { Fragment } from 'react'
import '../css/skill.css'

export default function Skills() {
    return (
        <Fragment>
            <div className='card'>
                <div className='card-body'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8'>
                            <img className='img-fluid estatura' src='img/skill/html-5.png' alt="" />
                        </div>
                        <div className='col-md-8 col-lg-8'>
                            <img className='img-fluid estatura2' src='img/skill/css-3.png' alt="" />
                            <img className='img-fluid estatura2' src='img/skill/js.png' alt="" />
                        </div>
                        <div className='col-md-8 col-lg-8'>
                            <img className='img-fluid estatura3' src='img/skill/php.png' alt="" />
                        </div>
                        <div className='col-md-8 col-lg-8'>
                            <img className='img-fluid estatura4' src='img/skill/codeigniter.svg' alt="" />
                            <img className='img-fluid React' src='img/skill/React.png' alt="" />
                        </div>
                        <div className='col-md-8 col-lg-8'>
                            <img className='img-fluid estatura' src='img/skill/sqll.jpg' alt="" />
                        </div>
                    </div>
                    <h3 className='learn'>Aprendiendo</h3>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-lg-8'>
                            <img className='img-fluid estatura' src='img/skill/vuejs.png' alt="" />
                            <img className='img-fluid estatura' src='img/skill/nodejs.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}