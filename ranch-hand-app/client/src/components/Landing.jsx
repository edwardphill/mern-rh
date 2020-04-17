import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import styles from "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";
// import styled from "styled-components";

class Landing extends Component {
  render() {
    return (
      <Container fluid>
        <br />
        <br />

        <Carousel border="primary">
          <Carousel.Item>
            <img

              className="d-block w-100 rounded mb-0"
              src="https://user-images.githubusercontent.com/30938466/79510363-3dea9200-800b-11ea-90b0-d1798d91cca2.png"
              alt="RH1"
              fluid
              style={{ margin: "auto" }}
            />
            <Carousel.Caption>
              <h3>RANCH HAND</h3>
              <p>Modern ranch and farm manager's tool</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded mb-0"
              src="https://user-images.githubusercontent.com/30938466/79510094-bb61d280-800a-11ea-951d-0bf61bc4ffe1.png"
              alt="Fields"
              fluid
              style={{ margin: "auto" }}
            />

            <Carousel.Caption>
              <h3>Manage Fields</h3>
              <p>Track key data points on all pastures.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded mb-0"
              src="https://user-images.githubusercontent.com/30938466/79510367-3f1bbf00-800b-11ea-9c6d-a666444ea240.png"
              alt="Herds"
              fluid
              display="auto"
              style={{ margin: "auto" }}
            />

            <Carousel.Caption>
              <h3>Track Herds</h3>
              <p>Manage how herds graze and work the land.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />
        <br />
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Manage Fields | 🌾 🚜</Card.Title>
              <Card.Text>
                Create fields with key data inputs for each pasture. Update
                fields throught the season to get live data. Add fields when new
                pasture opens up to herds.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Track Herds | 🐄 🐂</Card.Title>
              <Card.Text>
                Create and follow herds as they move through fields.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Farm Data | 📈🐮🤠</Card.Title>
              <Card.Text>
                Track your farm data in the simple Ranch Hand dashboard.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <br />
        <br />
        <br />
      </Container>
    );
  }
}

export default Landing;

{
  /*
        <Row>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Card>
                  <Card.Header>Ranch Hand</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {" "}
                        A pasture and herd managment tool for ranchers and farm
                        managers. Easy tools for the farm workers in the field
                        and administration to track the farm.{" "}
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <br />
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://user-images.githubusercontent.com/30938466/79505039-c7956200-8001-11ea-81e5-985feb5ccda0.gif"
                  />
                </Card>
              </Col>
            </Row> */
}
