import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col } from "react-bootstrap";
import './App.css';

function Saved(props) {
  return (
    <Container>
    <Jumbotron fluid>
      <Container>
        <h1>(React) Google Books Serach</h1>
        <h3> Search for and Save Books of Interest </h3>
      </Container>
    </Jumbotron>
    </Container>
  )
}

export default Saved;
