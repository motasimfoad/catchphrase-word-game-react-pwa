import React, { useState, useEffect } from "react";
import '../in-game/ingame.css';
import { Button, Container, Row, Col, Alert, Card, ButtonGroup, Modal} from 'react-bootstrap';
import {useLocation, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLowVision, faEye } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../components/footer/footer.js";
import TimerSound from "../../assets/audio/timer.mp3";
import EndTimerSound from "../../assets/audio/bomb.mp3";
import Header from "../../components/header/header.js";
import ProgressBar from 'react-customizable-progressbar';
import ReactGa from 'react-ga';

ReactGa.initialize("UA-154721739-1");
ReactGa.pageview('catchphrase.motasimfoad.com - Ingame Screen');

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Body style={{textAlign:"center"}}>
        <h4>Confirm to <strong>RESET/RESTART</strong> ?</h4>
        <Button variant="success" onClick={props.onHide}>No</Button>
        <Link to="/pregame">
          <Button variant="danger" className="btnPadding">Reset</Button>
        </Link>
      </Modal.Body>
    </Modal>
  );
}

function Ingame() {
  const [modalShow, setModalShow] = React.useState(false);
  const [myObj, setMyObj] = useState("Tap next");
  const getData=()=>{
    fetch('https://api.motasimfoad.com/catch_phrase/catch_phrase.json'
    ).then(response => response.json())
     .then((jsonData) => {
        setMyObj(jsonData);
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const { state } = useLocation();
  const [min] = useState(state);
  const [millisec] = useState((min*60)*1000);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(true);
  const [rand, setRand] =  useState(Math.round(Math.random() * (myObj.length-1)));
  const [audio] = useState(new Audio(TimerSound));
  const [endAudio] = useState(new Audio(EndTimerSound));
  const [gameStatus, setGameStatus] = useState(false);
  
  function toggle() {
     setFlag(!flag);
  }

  function word() {
     setRand(Math.round(Math.random() * (myObj.length-1)));
  }

  function getPercentageChange(){
    var secToMs = (seconds*1000);
    var decreaseValue = millisec - secToMs;
    var temp = (decreaseValue / millisec) * 100;
    temp = Math.round(temp);
    audio.play();
    return temp;
  }

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
           <Header />
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
              {flag ? <ProgressBar
                  radius={40}
                  progress={getPercentageChange()}
                  cut={120}
                  rotate={-210}
                  counterClockwise
                  inverse
                  initialAnimation
                  initialAnimationDelay={1}
                  strokeWidth={10}
                  strokeColor="#d35400"
                  strokeLinecap="butt"
                  trackStrokeWidth={10}
                  trackStrokeLinecap="butt"
                  className="progressBar"
              >
              </ProgressBar>: <h6>Hidden</h6>}
              <div className="indicator">
                <div>{myObj[rand]}</div>
              </div>
              </Card.Body>
              <Card.Footer className="btngroup">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="warning" className="btnPadding" onClick={word} disabled={gameStatus}>Next</Button>
                  {/* <Link to="/pregame"> */}
                    <Button variant="danger" className="btnPadding" onClick={() => setModalShow(true)}>Reset</Button>
                    {/* </Link> */}
                </ButtonGroup>   
              </Card.Footer>
            </Card>
            </Row>
           <Footer />
           <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </Container>
  );
}

export default Ingame;
