
"use client"
import {Luckiest_Guy } from 'next/font/google'
import styles from "../page.module.css"
import { Col, Container, Row, Card, } from "react-bootstrap"
import VideoPlayerp1 from '../components/videoP1'
import IndividualIntervalsExample2 from "../components/sliderp2";
import HeaderAndFooterExample from "../components/tarjetaancha";




function page() {
   
  return (
    
    <div className={styles.containerp2}>
         
        
      <Container fuid >
      

        <Row>
        
          <Col style={{ display: "flex" }} data-aos="zoom-in-down"  >
            <Card border="info" style={{ margin: 50, width: '50rem', background: "none" }} >
              <Card.Body>
                <h1 style={{ color: "#0deff7", fontFamily: "cursive", }}>Jugabilidad</h1>
                <p className={styles.textohero} style={{color:"white"}}>
                  Desarrollo Profesional adaptable a cualquier dispositivo movil.
                </p>
              </Card.Body>
            </Card>
          </Col>


        </Row>
        <Row >
          <Col style={{ display: "flex", justifyContent: "center" }} data-aos="zoom-in">

            <Card border="info" style={{ width: '25rem', background: "none" }}>
              <Card.Body style={{ margin: 0, padding: 0 }}>
                <Card.Img variant="top" src="h1.jpg" />
              </Card.Body>
            </Card>


          </Col>
        </Row>
        <Row data-aos="fade-down">
        <HeaderAndFooterExample />
      </Row>
      <Row style={{ height: "50px" }}>

      </Row>
      <Row data-aos="zoom-in"  >

        <VideoPlayerp1  videoSrc="/barc1.mp4" />
      </Row>

      
      


      <Container style={{ marginTop: "40px" }}>
        <Row xs={1} md={2} className="g-5">
          <Col style={{ display: "flex", justifyContent: "center" }} data-aos="flip-left">
            <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
              <Card.Img variant="top" src="quiz10.jpg" />
              <Card.Body >
                <Card.Title style={{ color: "#0deff7", fontFamily: "cursive" }}>Casos de Uso</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Metodologias agiles para las actualizaciones y los contenidos dinamicos escalables
                  en varios sistemas operativos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }} data-aos="flip-right">
            <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
              <Card.Img variant="top" src="quiz12.jpg" />
              <Card.Body>
                <Card.Title style={{ color: "#0deff7", fontFamily: "cursive" }}>Testing</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Producto testiado en la plataforma para varios dispositivos y distintas resoluciones siendo
                  totalmente responsivo y adaptativo
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }} data-aos="flip-up">
            <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
              <Card.Img variant="top" src="c4.jpg" />
              <Card.Body>
                <Card.Title style={{ color: "#0deff7", fontFamily: "cursive" }} >Jugabilidad e interacciones</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  Intuitiva y dinamica la experiencia con el usuario y el recorrido a travez de las
                  distintas modalidades de juego y contenidos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }} data-aos="flip-down">
            <Card border="info" style={{ width: '20rem', backgroundColor: "black" }}>
              <Card.Img variant="top" src="menuu.jpg" />
              <Card.Body>
                <Card.Title style={{ color: "#0deff7", fontFamily: "cursive" }}>Seguro y Confiable</Card.Title>
                <Card.Text style={{ color: "white" }}>
                  App desarrollada bajos los standares de seguridad y proteccion de Datos sin conexion a bases de Datos ni ficheros externos
                  todo el contenido esta en esta App.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ height: "50px" }}>

        </Row>
        <IndividualIntervalsExample2 />
        <Row style={{ height: "50px" }}>

        </Row>
      </Container>
      </Container>

    </div>
  )
}

export default page
