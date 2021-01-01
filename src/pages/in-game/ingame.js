import React, { useState, useEffect } from "react";
import '../in-game/ingame.css';
import { Button, Container, Row, Col, Alert, Card, ButtonGroup } from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLowVision, faEye } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../components/footer/footer.js";
import TimerSound from "../../assets/audio/timer.mp3";
import EndTimerSound from "../../assets/audio/bomb.mp3";

function Ingame() {
  const [myObj, setMyObj] = useState(["a","b","c"]);
  const { state } = useLocation();
  const [min] = useState(state);
  const [millisec] = useState((min*60)*1000);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(true);
  const [rand, setRand] =  useState(Math.round(Math.random() * (myObj.length-1)));
  const [temp, setTemp] = useState(rand);
  const [audio] = useState(new Audio(TimerSound));
  const [endAudio] = useState(new Audio(EndTimerSound));
  const [gameStatus, setGameStatus] = useState(false);

  const getData=()=>{
    fetch('https://api.motasimfoad.com/catch_phrase/catch_phrase.json'
    ).then(function(response){
        return response.json();
      })
     .then(function(myJson) {
        setMyObj(myJson);
      });
  }

  function toggle() {
     setFlag(!flag);
  }

  function word() {
     setRand(Math.round(Math.random() * (myObj.length-1)));
     setTemp ( Math.round(rand));
    }

  function getPercentageChange(){
      audio.play();
  }

  getPercentageChange();
  
  useEffect(() => {
     getData();
     const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
      }, 1000);
     const timeout = setTimeout(() => {
          endAudio.play();
          setGameStatus(true);
          clearInterval(interval);
      }, millisec);
      return () => clearTimeout(timeout);
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
              {myObj[temp]}
              </Card.Body>
              <Card.Footer>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="warning" className="btnPadding" onClick={word} disabled={gameStatus}>Next</Button>
                  <Link to="/pregame"><Button variant="danger" className="btnPadding">Reset</Button></Link>
                </ButtonGroup>   
              </Card.Footer>
            </Card>
            </Row>
           <Footer />
        </Container>
  );
}

export default Ingame;
