import React, { useState } from "react";
import '../pre-game/pregame.css';
import { Button, Container, Row, Alert, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Footer from "../../components/footer/footer.js";

function Pregame() {

  const [num, setNum] = useState("");
  
  const handleSubmit = (evt) => {
      if (num === 0 || num < 0 || 6 < num) {
        alert(`Submit a value between 1 to 6`);
        evt.preventDefault();
      } else {
      console.log("lala");
      }
  }

  return (
    <Container className="App" fluid>
        <Row>
        <Alert className="App-Header" variant="light">
          <h1>CatchPhrase</h1>
          <small>- Word/Party Game</small>
        </Alert>
        </Row>
        <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Set duration</Form.Label>
            <Form.Control type="number" placeholder="In Minutes" onChange={e => setNum(e.target.value)} required/>
            <Form.Text className="text-muted">
              In Minutes (3 to 6 mins)
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
          <Link to={{ pathname: `ingame`, state: num}}>
                Start
          </Link >
          </Button>
        </Form>
        </Row>
       <Footer />
    </Container>
  );
}

export default Pregame;
