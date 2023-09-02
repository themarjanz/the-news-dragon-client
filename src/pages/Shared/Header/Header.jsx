// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
    const style = { fontSize: "2rem" }
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondry'><small>Journalism Without Fear or Favour</small></p>
                {/* <p>{moment().format()}</p> */}
                {/* <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> */}
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            {/* <div className='d-flex bg-light'> */}
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={50} >
                    I can be a React component, multiple React components, or just some text....
                    I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>


            <Navbar collapseOnSelect expand="lg" bg="light" variant='light'>
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#carrier">Carrier</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><FaUserCircle style={style}></FaUserCircle></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;