import React from 'react'
import img from '../assets/store.jpg'
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';

const Header = () =>
      <Container>
        <Row className="justify-content-md-center">
        <Col><img src={img} /></Col>
        <Col md="auto"><h2>Learning bootstrap </h2> </Col>
        </Row>
      </Container>

export default Header
