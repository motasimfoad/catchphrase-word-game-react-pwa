import React from 'react';
import '../main/main.css';
import { Button, Container, Row, Alert, ListGroup } from 'react-bootstrap';
import {  Link } from "react-router-dom";

const year = new Date();

function App() {
  return (
    <Container className="App" fluid>
        <Row>
        <Alert className="App-Header" variant="light">
          <h1>CatchPhrase</h1>
          <small>- Word/Party Game</small>
        </Alert>
        </Row>
        <Row>
            <ListGroup className="App-Game-Rules" variant="flush">
                <ListGroup.Item><strong>Rules</strong></ListGroup.Item>
                <ListGroup.Item><small>> Its a game for even number of peoples (4/6/8 ++)</small></ListGroup.Item>
                <ListGroup.Item><small>> Pair up with a partner and make multiple groups</small></ListGroup.Item>
                <ListGroup.Item><small>> You can say anything you want or do whatever you want but cant say any word from the clue </small></ListGroup.Item>
                <ListGroup.Item><small>> When the times up the person holding the device looses.</small></ListGroup.Item>
                <ListGroup.Item><small>> After successfull guess pass the device to your RIGHT</small></ListGroup.Item>
                <ListGroup.Item><small>> Whoever looses a round gets a -1</small></ListGroup.Item>
                <ListGroup.Item><small>> Every other groups get +1</small></ListGroup.Item>
                <ListGroup.Item><small>> Which group has most score after certain rounds wins</small></ListGroup.Item>
                <Link to="/pregame"><Button variant="light">Start</Button></Link>
            </ListGroup>
            
        </Row>
        <Row>
        &copy; {year.getFullYear()}<a href="https://motasimfoad.com" target="_blank" rel="noreferrer">&nbsp; Motasim Foad</a>
        </Row>
    </Container>
  );
}

export default App;
