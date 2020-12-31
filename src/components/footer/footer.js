import React from 'react';
import { Row } from 'react-bootstrap';

const year = new Date();

function Footer() {
  return (
        <Row>
        &copy; {year.getFullYear()}<a href="https://motasimfoad.com" target="_blank" rel="noreferrer">&nbsp; Motasim Foad</a>
        </Row>
  );
}

export default Footer;
