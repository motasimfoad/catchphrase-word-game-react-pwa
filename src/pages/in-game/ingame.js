import React, { useState, useEffect } from "react";
import '../in-game/ingame.css';
import { Button, Container, Row, Col, Alert, Card, ButtonGroup } from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLowVision, faEye } from '@fortawesome/free-solid-svg-icons';

const year = new Date();


const myObj = [ "Ford", "BMW", "Fiat" ] 
  

function Ingame() {
  const { state } = useLocation();
  const [min, setMin] = useState(state);
  const [millisec, setMillisec] = useState((min*60)*1000);
  const [seconds, setSeconds] = useState(0);
  const [secToMilli, setSecToMilli] = useState((min*60)*1000);
  const [flag, setFlag] = useState(true);
  console.log("secons" + secToMilli + " millisec" + millisec+ " flag/true" +flag);
  const [rand, setRand] =  useState(Math.random() * 2);
  const [temp, setTemp] = useState(Math.floor(rand));

  function toggle() {
    setFlag(!flag);
  }

  function word() {
   
    if (rand == temp) {
      word();
    } else {
      setTemp ( Math.floor(rand));
      console.log(Math.floor(rand));
    }
    
    
  }

  useEffect(() => {

     const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
          setSecToMilli(seconds*1000);
      }, 1000);

     const timeout = setTimeout(() => {
          setFlag(false);
          clearInterval(interval);
      }, millisec);
     
      return () => clearInterval(timeout);
    
    }, []);
 



  return (
    <Container className="App" fluid>
        <Row>
        <Alert className="App-Header" variant="light">
          <h1>CatchPhrase</h1>
          <small>- Word/Party Game</small>
        </Alert>
        </Row>
        <Row>
          <Col>
            <Alert className="App-Header" variant="dark">
              {flag ? <h3>{seconds}</h3>: <h4>hidden</h4>}
              <small>Timer</small>
            </Alert>
          </Col>
          <Col>
            <Alert className="App-Header" variant="dark">
              <Button variant="outline-dark" onClick={toggle}>{flag ? <FontAwesomeIcon icon={faLowVision} />: <FontAwesomeIcon icon={faEye} />}</Button>
              <small>Visibility</small>
            </Alert>
          </Col>
        </Row>
        <Row>
        <Card>
          <Card.Body className="App-Game-Rules">
           {myObj[0]}
          </Card.Body>
          <Card.Footer>
            <ButtonGroup aria-label="Basic example">
              <Button variant="warning" className="btnPadding" onClick={word}>Next</Button>
              <Link to="/pregame"><Button variant="danger" className="btnPadding">Reset</Button></Link>
            </ButtonGroup>   
          </Card.Footer>
        </Card>
        </Row>
        <Row>
        &copy; {year.getFullYear()}<a href="https://motasimfoad.com" target="_blank" rel="noreferrer">&nbsp; Motasim Foad</a>
        </Row>
    </Container>
  );
}

export default Ingame;
