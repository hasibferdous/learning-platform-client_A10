import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Pages/Shared/Header/Header';
import SideNavBar from '../../Pages/Shared/SideNavBar/SideNavBar';
import Footer from '../../Pages/Shared/Footer/Footer';



const Main = () => {
    return (
        <div className='bg-secondary'>
        <Header></Header>
           <Container className='bg-info'>
            <Row>
                <Col lg="3">
                <SideNavBar></SideNavBar>
                </Col>
                <Col lg="9">
                   <Outlet></Outlet>
                </Col>

            </Row>
            </Container>
            <Footer></Footer> 
        </div>
    );
};

export default Main;