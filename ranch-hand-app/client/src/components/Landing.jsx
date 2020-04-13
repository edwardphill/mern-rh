import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Button from "react-bootstrap/Button";
// import styled from "styled-components";

class Landing extends Component {
  render() {
    return (
      <Container fluid>
        <br />
        <br />

        <Row>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Card>
                  <Card.Header>Ranch Hand App</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {" "}
                        A modern pasture and herd managment tool for farmers. 🐄
                        👩‍🌾 🚜.{" "}
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <br />
            <br />
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title>Manage Fields</Card.Title>
                  <Card.Text>
                    Create fields with key data inputs for each pasture. Update
                    fields throught the season to get live data. Add fields when
                    new pasture opens up to herds.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Track Herds</Card.Title>
                  <Card.Text>
                    Create and follow herds as they move through fields.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Visualize Data</Card.Title>
                  <Card.Text>
                    Track your farm data in the simple Ranch Hand dashboard.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Landing;
