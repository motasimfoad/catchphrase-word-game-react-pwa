import React from 'react';
import { Row, Alert } from 'react-bootstrap';

function Header() {
  return (
    <Row>
      <Alert className="App-Header" variant="light">
        <h1>CatchPhrase</h1>
        <small>- Word/Party Game</small>
      </Alert>
    </Row>
  );
}

export default Header;
