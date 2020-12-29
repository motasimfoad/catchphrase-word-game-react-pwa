import React, { useState, useEffect } from "react";
import '../in-game/ingame.css';
import { Button, Container, Row, Alert, Card, ButtonGroup } from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';

const year = new Date();

function Ingame() {
  const { state } = useLocation();
  const [min, setMin] = useState(state);
  const [millisec, setMillisec] = useState((min*60)*1000);
  const [seconds, setSeconds] = useState(0);
  const [secToMilli, setSecToMilli] = useState((min*60)*1000);
  const [flag, setFlag] = useState(true);
  console.log("secons" + secToMilli + " millisec" + millisec+ " flag/true" +flag);

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
     
      


    // setTimeout(() => {
    //   setFlag(false);
    //   clearInterval();
    // }, millisec);
  

   
      
      
     
    
    
    // else{
    //   setSeconds("Times Up");
    //   return () => clearInterval();
    // }

   


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
        <Alert className="App-Header" variant="dark">
          <h3>{seconds}</h3>
          <small>Timer</small>
        </Alert>
        </Row>
        <Row>
        <Card>
          <Card.Body className="App-Game-Rules">
           Word
          </Card.Body>
          <Card.Footer>
            <ButtonGroup aria-label="Basic example">
              <Button variant="warning" className="btnPadding">Next</Button>
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
