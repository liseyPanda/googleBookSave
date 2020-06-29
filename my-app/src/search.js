import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col } from "react-bootstrap";
import { Card, Form, FormControl, Button } from 'react-bootstrap'
import './App.css';

function Search(props) {
  return (
    <Container>
    <Jumbotron fluid>
      <Container>
        <h1>(React) Google Books Serach</h1>
        <h3> Search for and Save Books of Interest </h3>
      </Container>
    </Jumbotron>
    <Card id="search">
      <Card.Body>
        <Card.Text>
          <h3> Book Search </h3>
          <h6> Book </h6>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default Search;
