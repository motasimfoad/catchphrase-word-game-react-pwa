import React from 'react';
import { Row, Alert, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStopwatch, faLightbulb, faHeadSideCoughSlash, faBomb, faTrophy, faCrown, faCannabis } from '@fortawesome/free-solid-svg-icons';

function Mbc() {
  return (
   <div>
        <Row>
          <Col>
            <Alert variant="secondery" style={{textAlign:"center"}}>
              <div style={{fontSize:"2em"}}>
                <FontAwesomeIcon icon={faStopwatch} /><br />
              </div>
                <small>set timer</small>
            </Alert>
          </Col>
          <Col>
            <Alert variant="secondery" style={{textAlign:"center"}}>
              <div style={{fontSize:"2em"}}>
                <FontAwesomeIcon icon={faUsers} /><br />
              </div>
              <small>group in pairs</small>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
              <Alert variant="secondery" style={{textAlign:"center"}}>
                <div style={{fontSize:"2em"}}>
                  <FontAwesomeIcon icon={faLightbulb} /><br />
                </div>
                <small>give hint to your partner</small>
              </Alert>
            </Col>
            <Col>
            <Alert variant="secondery" style={{textAlign:"center"}}>
              <div style={{fontSize:"2em"}}>
                <FontAwesomeIcon icon={faHeadSideCoughSlash} /><br />
              </div>
              <small>dont say any word in the clue</small>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
              <Alert variant="secondery" style={{textAlign:"center"}}>
                <div style={{fontSize:"2em"}}>
                  <FontAwesomeIcon icon={faBomb} /><br />
                </div>
                <small>when the bomb explodes, the group holding the phone gets <strong style={{color:"#e74c3c"}}>-1</strong></small>
              </Alert>
            </Col>
          <Col>
            <Alert variant="secondery" style={{textAlign:"center"}}>
              <div style={{fontSize:"2em"}}>
                <FontAwesomeIcon icon={faCrown} /><br />
              </div>
              <small>every other groups gets <strong style={{color:"#2ecc71"}}>+1</strong></small>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
              <Alert variant="secondery" style={{textAlign:"center"}}>
                <div style={{fontSize:"2em"}}>
                  <FontAwesomeIcon icon={faTrophy} /><br />
                </div>
                <small>after few rounds (EG: 2/4/6 rounds), team having most point wins</small>
              </Alert>
            </Col>
          <Col>
            <Alert variant="secondery" style={{textAlign:"center"}}>
              <div style={{fontSize:"2em"}}>
                <FontAwesomeIcon icon={faCannabis} /><br />
              </div>
              <small>have fun !!</small>
            </Alert>
          </Col>
        </Row>
   </div>
  );
}

export default Mbc;
