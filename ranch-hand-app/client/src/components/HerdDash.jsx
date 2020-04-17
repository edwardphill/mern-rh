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

class HerdDash extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <br />

                <Container fluid="md">


                    <Row className="justify-content-md-center">

                        <Col md="auto">


                            <h2 className="text-center">Manage Herds </h2>
                            <small className="text-muted text-center">

                            </small>


                            <br />
                            <br />
                        </Col>

                    </Row>
                </Container>


                <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://user-images.githubusercontent.com/30938466/79610539-b9f5e000-80c6-11ea-9d77-da525a950b07.gif" />
                        <Card.Body>
                            <Card.Title>Calves and Mothers</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="success">   <Link to="/Herd" className="text-white" > Checkout Herd</Link></Button>
                        </Card.Body>
                    </Card>




                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://user-images.githubusercontent.com/30938466/79611146-ececa380-80c7-11ea-9df4-52f966488eb0.gif" />
                        <Card.Body>
                            <Card.Title>Bulls</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="success">   <Link to="/Herd" className="text-white" > Checkout Herd</Link></Button>
                        </Card.Body>
                    </Card>


                </CardDeck>

                <Row className="justify-content-md-center">

                    <Col md="auto">

                        <br />
                        <br />

                        <Button variant="success" size="lg"> <Link to="/AddHerd" className="text-white" > Add Herd</Link>
                        </Button>
                    </Col>

                </Row>

                <br />
                <br />
                <br />
            </Container>
        );
    }
}
export default HerdDash;
