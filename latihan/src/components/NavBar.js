import { useState, useEffect } from "react";
import {Navbar, Container, Nav, NavLink} from "react-bootstrap";

import navIcon1 from '../assets/img/github.svg';
import navIcon2 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true); 
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);

    }
    
    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
      <Nav.Link href="#home" style={{fontFamily: 'fantasy',fontSize:'35px'}}>KELOMPOK 5 </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"className= {activeLink ==='home'?'active navbar-link':'navbar-link'}onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#alat"className= {activeLink ==='alat'?'active navbar-link':'navbar-link'}onClick={() => onUpdateActiveLink('alat')}>Alat</Nav.Link>
            <Nav.Link href="#deskripsi"className= {activeLink ==='deskripsi'?'active navbar-link':'navbar-link'}onClick={() => onUpdateActiveLink('deskripsi')}>Deskripsi alat</Nav.Link>
            <Nav.Link href="#profile"className= {activeLink ==='profile'?'active navbar-link':'navbar-link'}onClick={() => onUpdateActiveLink('profile')}>Group Profile</Nav.Link>
            <Nav.Link href="#monitor"className= {activeLink ==='monitor'?'active navbar-link':'navbar-link'}onClick={() => onUpdateActiveLink('monitor')}>Monitoring alat</Nav.Link>
          </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                {/*
                    <a href="#"><img src={navIcon1} alt=""/></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                */}
                </div>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}