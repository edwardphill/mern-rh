import React, { Component } from "react";
// import ReactTable from "react-table-6";
import api from "../api";
// import ranches from "./ranches.json";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CardDeck from 'react-bootstrap/CardDeck'
// import ListGroup from 'react-bootstrap/ListGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

// import Ranches_model from "../";

class FieldDash extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />

                <Container fluid="md">


                    <Row className="justify-content-md-center">

                        <Col md="auto">


                            <h2 className="text-center">Manage Fields </h2>
                            <small className="text-muted text-center">

                            </small>


                            <br />
                            <br />
                        </Col>

                    </Row>
                </Container>


                <CardDeck>
                    <Card>

                        <Card.Body>
                            <Card.Title>Upper Clover</Card.Title>
                            <Card.Text>
                                <br />
                                View Upper Clover field
                                <Link to="/field" > here</Link>.
      </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Middle Clover</Card.Title>
                            <Card.Text>
                                <br />
                                View Middle Clover field
                                <Link to="/field" > here</Link>.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Lower Clover</Card.Title>
                            <Card.Text>
                                <br />
                                View Lower Clover field
                               <Link to="/field" > here</Link>.
      </Card.Text>
                        </Card.Body>

                    </Card>
                </CardDeck>



                <Row className="justify-content-md-center">

                    <Col md="auto">

                        <br />
                        <br />

                        <Button variant="success" size="lg">
                            <Link to="/AddField" className="text-white" >Add A Field </Link>
                        </Button>
                    </Col>

                </Row>

            </Container>
        );
    }
}
export default FieldDash;
