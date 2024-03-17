import { useState, useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/node-min.svg"

export const Banner = () => {
   
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Kelompok 5</span>
                        <h1>{'Fire Detection Sensor '}<span className="wrap">Internet of Things</span></h1>
                        <p>Dalam menghadapi ancaman kebakaran, keamanan dan perlindungan menjadi prioritas utama dalam berbagai konteks, mulai dari rumah tangga hingga lingkungan industri yang kompleks. Oleh karena itu kami dari kelompok 5, melakukan pengembangan alat pendeteksi api yang dengan menggunakan sensor ultrasonic dan flame sensor. 
Sensor flame adalah Sensor api atau sensor nyala adalah perangkat yang digunakan untuk mendeteksi keberadaan api atau panas yang tidak diinginkan. Sensor ini digunakan dalam berbagai aplikasi, termasuk keamanan kebakaran, pengawasan industri, dan otomatisasi proses. Sensor Ultrasonic adalah perangkat elektronik yang menggunakan gelombang suara ultrasonik untuk mendeteksi jarak, kehadiran benda, atau gerakan. Apabila sensor ultrasonik digabungkan dengan sensor api (flame sensor), kombinasi ini dapat digunakan untuk alat pendeteksi api 
</p>    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}