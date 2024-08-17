"use client"
import { Card, Col, Container, Row } from 'react-bootstrap'
import IndividualIntervalsExample from '../components/sliderPagina'
import VideoPlayerp1 from '../components/videoP1'
import styles from "../page.module.css"
import Image from 'next/image'
import Badge from 'react-bootstrap/Badge';
import HeaderAndFooterExample2 from '../components/ancha2'








function page() {
  return (
    <>

      <div className={styles.containerp1} >
        <Row  >
          <Col  data-aos="fade-down">

          <VideoPlayerp1 videoSrc="/etend1.mp4" />
          </Col>
        </Row>

        <Container >

          <Row>
            <Col style={{ display: "flex", justifyContent: "center", marginTop: "30px", textAlign: "center", alignItems: "center" }} data-aos="fade-down">
              <h2 style={{ color: "lightseagreen", fontFamily: "unset", fontSize: "3rem", fontWeight: "bold" }} >Contenido Interactivo</h2>
            </Col>
          </Row>

          <Row style={{ marginTop: "60px" }}>
            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }} data-aos="flip-left" data-aos-duration="1000">
              <Card style={{ width: '25rem', background: "none" }}>
                <Card.Body >
                  <Card.Img variant="top" src="unity2.png" />
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }} data-aos="flip-right" data-aos-duration="1000">
              <Card style={{ width: '25rem', background: "none" }}>
                <Card.Body >
                  <Card.Img variant="top" src="clogo.png" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>

            <Col style={{
              display: "flex", justifyContent: "center",
              flexWrap: "nowrap", margin: "30px 30px"
            }} data-aos="zoom-in">
              <Badge  pill bg="primary" data-aos="flip-down"
                    data-aos-duration="2000">
                VR
              </Badge>{' '}

              <Badge pill bg="success" data-aos="flip-down"
                    data-aos-duration="2000">
                C#
              </Badge>{' '}
              <Badge pill bg="danger"data-aos="flip-down"
                    data-aos-duration="2000">
                Testing
              </Badge>{' '}
             
              <Badge pill bg="info" data-aos="flip-down"
                    data-aos-duration="2000">
                IA
              </Badge>{' '}


            </Col>

          </Row>
          <Row data-aos="fade-up"
            data-aos-duration="3000">
            <Image
              src="/gamer1.jpg"
              alt="Programacion propia"
              width={854}
              height={480}
            />
          </Row>



          <Row data-aos="fade-up"
            data-aos-duration="2000">
            <HeaderAndFooterExample2 />
          </Row >
          <Row style={{ height: "50px" }}>

</Row>
            
        </Container>
        <Row data-aos="fade-up"
            data-aos-duration="1500">
        <IndividualIntervalsExample />
        </Row>
       


      </div>
    </>
  )
}

export default page