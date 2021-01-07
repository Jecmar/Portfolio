import React, { Fragment } from 'react'
import Header from "./components/header.js"
import Card from "./components/card.js"
import CardP from './components/cardp.js'
import Skill from './components/skills.js'
import Form from './components/form.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'

function App() {
  return (
    <Fragment>
      <Header />
      <section className='ancho'></section>
      <section id='home' className='principal'>
        <img src='img/wave.svg' alt='Imagen de onda'/>
        <h1>Hola que tal, mi nombre es Josue Eduardo, <br /> soy desarrollador web jr y este es mi portafolio</h1>
      </section>

      <section id='about' className='contenido'>
        <h2>Acerca de mi</h2>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-8 col-sm'>
            <Card icon='img/perfil.jpg' title='Hola mi nombre es Josue' description='Tengo 22 años, 
          soy recien egresado de la Universidad de Colima en la Facultad de Ingenieria Electromecanica en Ingenieria en Sistemas Computacionales 
          y mi pasion es el desarrollo de software, actualmente me dedico en el desarrollo web, mi hobbie son los videojuegos y poder aprender nuevas tecnologias.
          Mis metas son poder trabajar como lider de proyecto y poder ayudar a los nuevos usuarios relacionados a la programacion y desarrollo de software.' />
          </div>
        </div>
      </section>

      <section id='portfolio' className='contenido'>
        <h2>Portafolio</h2>

        <div className='row portafolio'>
          <div className='col-lg-3'>
            <CardP icon='img/evidence/recompensas.png' text='Link de la Web' link='https://recompensas.app1.mx' title='Aplicacion de recompensas' description='Proyecto desarrollado con CodeIgnither, este fue mi primer proyecto de manera freelancer, el proposito del proyecto
        es en crear una aplicacion en la cual el cliente se registra y pueda escanear tanto generar codigos QR, con el motivo de acumular puntos para despues utilizarlos en los restuarantes u hoteles participantes, del lado del proveedor
        tambien podia generar el codigo QR con la cantidad deseada de la recompensa, posteriormente tambien puede escanear codigo del cliente para descontarlo.'/>

          </div>
          <div className='col-lg-3'>
            <CardP icon='img/evidence/contador.png' text='Link de la Web' link='https://rutadelsabor.com.mx' title='Aplicacion contador de visitas' description='El proyecto se desarrollo con CodeIgniter, el prosito es saber el numero visitas de cada participante ya que se llevo a cabo 
        un evento de restuarantes en la que se hacia un recorrido a distintos restaurantes para probar sus distintas comidas, para ello el cliente escanea un codigo QR de la cual el local le va otorgar en esta misma aplicacion, al final el cliente puede ver la cantidad de visitas que realizo 
        junto a su historial donde muestra el nombre del restaurante, fecha y hora de la visita, ademas de tener un apartado de una lista de los restaurantes participantes.'/>
          </div>

          <div className='col-lg-3'>
            <CardP icon='img/evidence/dashB.png' text='Link de repositorio' link='' title='Dashboard con Dark mode' description='En este proyecto lo desarrolle en mis practicas profecionales en la empresa Grupo Web' />
          </div>

          <div className='col-lg-3'>
            <CardP icon='img/evidence/visualizarvideo.PNG' text='Link de repositorio' link='https://github.com/Jecmar/CodeIgniter/' title='Crud con CodeIgniter' description='Proyecto desarrollado con CodeIgnither, este fue mi primer proyecto de manera freelancer, el proposito del proyecto
        es en crear una aplicacion en la cual el cliente se registra y pueda escanear tanto generar codigos QR, con el motivo de acumular puntos para despues utilizarlos en los restuarantes u hoteles participantes, del lado del proveedor
        tambien podia generar el codigo QR con la cantidad deseada de la recompensa, posteriormente tambien puede escanear codigo del cliente para descontarlo.'/>

          </div>

        </div>
      </section>

      <section id='skills' className='contenido'>
        <h2>Habilidades</h2>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-8'>
            <Skill />
          </div>
        </div>
      </section>

      <section id='contact' className='contenido'>
        <h2>Contacto</h2>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-8'>
            <Form/>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <div className="text-center p-3 estilo">
          <h5>Mis redes sociales</h5>
          <div className='row reducir'>
            <div className='col-md'>
              <img src='img/icons/facebook.png' alt='icono facebook' />
              <p>@Josue Martinez</p>
            </div>
            <div className='col-md'>
              <img src='img/icons/twitter.png' alt='icono twitter'/>
              <p>@Jecmar98</p>
            </div>
            <div className='col-md'>
              <img src='img/icons/github.png' alt='icono github'/>
              <p>@jecmar</p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
export default App;
