import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>

        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>About us</h3>
              <h4>Ups... It's empty but don't worry look another page</h4>
          </Col>
        </Grid>
      </div>
    )
  }
}
