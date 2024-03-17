import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Standby from "../assets/img/stanby.png"
import Kondisi2 from "../assets/img/Kondisi2.png"
import Kondisi1 from "../assets/img/kondisi1.png"
import { AlignCenter } from "react-bootstrap-icons";



export const Deskripsi = () => {


  return (
    <section className="deskripsi" id="deskripsi">
      <Container>
        <Row className="align-items-center">
          <Col>
                <h2>Deskripsi Alat</h2>
                <p>Berikut adalah beberapa kondisi dimana Alat akan berfungsi dan mengeluarkan output yang sesuai dengan kondisi yang terpenuhi</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="pertama">Kondisi 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="kedua">Kondisi 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ketiga">Stand-by</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="pertama">
                    <Row className="align-items-center">
                    <h1>Kondisi Api Menyala Tetapi tidak ada yang mendekat </h1>
                      <Col xs={12} md={6} xl={7}>
                          <p>Pada Kondisi ini Flame sensor akan mendeteksi adanya API dan mengeluarkan output pada LCD berupa "BAHAYAA ADA API!!!, namun Ultrasonic tidak menyala dan tidak mengeluarkan output apa apa" </p>
                          </Col>
                          <Col xs={12} md={6} xl={5}>
                            <img src={Kondisi1} alt="Kondisi1 Img"/>
                          </Col>
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="kedua">
                    <Row className="align-items-center">
                      <h1>Kondisi Api Menyala dan ada yang mendekat</h1>
                      <Col xs={12} md={6} xl={7}>
                        <img src={Kondisi2} alt="Kondisi2 Img"/>
                      </Col>
                        <Col xs={12} md={6} xl={5}>
                        <p>Pada Kondisi ke-2, ketika Flame sensor menyala, dan Ultrasonic membaca bahwa terdapat ada yang mendekat pada jarak telah ditentukan maka akan mengeluarkan output di LCD berupa "BAHAYA JANGEN MENDEKAT ___ cm Jarak Berbahaya Jangan mendekat" dan Buzzer akan berbunyi</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="ketiga">
                      <Row className="align-items-center" >
                        <h1>Kondisi Aman</h1>
                          <p>Pada Kondisi ini Alat dalam posisi Stand-by, Flame Sensor standby, ultrasonic dalam Kondisi mati, dan Buzzer Tidak berbunyi</p>
                          <Col>
                            <img src={Standby} alt="Standby Img"/>
                          </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}