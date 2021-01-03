import React from 'react';
import '../main/main.css';
import { Button, Container, Row } from 'react-bootstrap';
import Footer from "../../components/footer/footer.js";
import Header from '../../components/header/header.js';
import Mbc from '../../components/main-body-content/mbc.js';
import {  Link } from "react-router-dom";

function App() {
  return (
    <Container className="App" fluid>
        <Header />
        <Row>
            <h4 style={{textDecoration:"underline"}}>RULES</h4>
        </Row>
        <Mbc />
        <Row>
          <Link to="/pregame"><Button variant="outline-light">Start</Button></Link>
        </Row>
        <Footer />
    </Container>
  );
}

export default App;
