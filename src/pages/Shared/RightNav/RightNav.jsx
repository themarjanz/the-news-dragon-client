// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    const style = { color: "blue", fontSize: "1rem" }
    const InstalStyle = { color: "red", fontSize: "1rem" }
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>

            <div >
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook style={style}></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter style={style}></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram style={InstalStyle}></FaInstagram> Instagram</ListGroup.Item>

                </ListGroup>
            </div>

            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;