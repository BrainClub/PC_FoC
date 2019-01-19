import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron className="jumbotron__img">
          <h2>Fruit Or Candy (FOC)</h2>
          <p>A page where we will monitor our food and balance</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.png" circle className="profile-pic"/>
            <h3>Oleg</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad assumenda at atque eos eveniet ex, illo inventore libero magnam optio quaerat quam recusandae rem sequi tempore voluptatibus! Modi.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.png" circle className="profile-pic"/>
            <h3>Oleksyi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate doloremque eaque est in incidunt nulla, odit officiis quae sit ut vel veniam voluptatem? Debitis eligendi officiis sequi sunt veritatis.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.png" circle className="profile-pic"/>
            <h3>Oleksyi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt in nihil quos velit. Adipisci aliquam aut consequatur et expedita, provident ratione vero voluptatum! Dolorum eius molestias possimus quia quibusdam.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.png" circle className="profile-pic"/>
            <h3>Oleg</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad assumenda at atque eos eveniet ex, illo inventore libero magnam optio quaerat quam recusandae rem sequi tempore voluptatibus! Modi.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.png" circle className="profile-pic"/>
            <h3>Oleksyi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate doloremque eaque est in incidunt nulla, odit officiis quae sit ut vel veniam voluptatem? Debitis eligendi officiis sequi sunt veritatis.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.png" circle className="profile-pic"/>
            <h3>Oleksyi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt in nihil quos velit. Adipisci aliquam aut consequatur et expedita, provident ratione vero voluptatum! Dolorum eius molestias possimus quia quibusdam.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
