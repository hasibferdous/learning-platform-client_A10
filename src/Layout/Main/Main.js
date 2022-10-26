import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Pages/Shared/Header/Header';
import SideNavBar from '../../Pages/Shared/SideNavBar/SideNavBar';
import Footer from '../../Pages/Shared/Footer/Footer';
import './Main.css'
const Main = () => {
    return (
        <div className='bg-secondary'>
        <Header></Header>
           <Container className='Container'>
            <Row>

                <Col lg="12">
                   <Outlet></Outlet>
                </Col>

            </Row>
            </Container>
            <Footer></Footer> 
        </div>
    );
};
export default Main;