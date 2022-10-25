import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Pages/Shared/Header/Header';
import SideNavBar from '../../Pages/Shared/SideNavBar/SideNavBar';
import Footer from '../../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div><Header></Header>
           <Container>
            <Row>
                <Col lg="3">
                <SideNavBar></SideNavBar>
                </Col>
                <Col lg="7">
                <Outlet></Outlet>
                </Col>
                <Col lg="2">
                <h2>Right Side</h2>
                </Col>
            </Row>
            </Container>
            <Footer></Footer> 
        </div>
    );
};

export default Main;