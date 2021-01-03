import React, { useState } from "react";
import '../pre-game/pregame.css';
import { Button, Container, Row, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Footer from "../../components/footer/footer.js";
import  Header  from "../../components/header/header.js";

function Pregame() {
  const [num, setNum] = useState("");
  return (
    <Container className="App" fluid>
       <Header />
        <Row>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Set duration</Form.Label>
            <Form.Control type="number" placeholder="In Minutes" onChange={e => setNum(e.target.value)} required/>
            <Form.Text className="text-muted">
             EG: (3 to 6 mins)
            </Form.Text>
          </Form.Group>
          <div style={{textAlign:"center"}}> 
            <Link to={{ pathname: `ingame`, state: num}}>
              <Button variant="outline-light" type="submit">
                    Start
              </Button>
            </Link >
          </div>
        </Form>
        </Row>
       <Footer />
    </Container>
  );
}

export default Pregame;
