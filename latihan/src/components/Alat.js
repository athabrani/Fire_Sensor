import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import"react-multi-carousel/lib/styles.css";
import ESP from "../assets/img/ESP8266_nodeMCU.png";
import flame from "../assets/img/flame.png";
import ultrasonic from "../assets/img/ultrasonic.png"
import bread from "../assets/img/breadboard.png"
import lcd from "../assets/img/lcd.png"
import jumper from "../assets/img/jumper.png"

export const Alat = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="alat" id="alat">
            <Container>
                <Row>
                    <Col>
                        <div className="alat-bx">
                            <h2>
                                Alat dan Bahan
                            </h2>
                            <p>Kali ini kami menggunakan alat dan bahan yang telah disediakan oleh Lab CPS </p>
                            <Carousel responsive={responsive} infinite={true} className="slider-alat">
                                <div className="item">
                                    <img src={ESP} alt="Image"/>
                                    <h5>ESP8266 nodeMCU</h5>
                                </div>
                                <div className="item">
                                    <img src={flame} alt="Image"/>
                                    <h5>Flame</h5>
                                </div>
                                <div className="item">
                                    <img src={ultrasonic} alt="Image"/>
                                    <h5>Ultrasonic</h5>
                                </div>
                                <div className="item">
                                    <img src={bread} alt="Image"/>
                                    <h5>Breadboard</h5>
                                </div>
                                <div className="item">
                                    <img src={lcd} alt="Image"/>
                                    <h5>LCD L2C 16x2</h5>
                                </div>
                                <div className="item">
                                    <img src={jumper} alt="Image"/>
                                    <h5>Kabel Jumper </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}