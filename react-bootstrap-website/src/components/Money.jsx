import React, { Component } from 'react';
import { Grid, Row, Col, Image, ProgressBar, Tab, Nav, NavItem } from 'react-bootstrap';
import './Money.css';

export default class Money extends Component {
  render() {
    return (
      <div>
          <Grid>
          <Tab.Container  className="container" id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix">
                  <Col sm={4}>
                      <Nav bsStyle="pills" stacked>
                          <NavItem eventKey="first">Money</NavItem>
                          <NavItem eventKey="second">Patrons</NavItem>
                      </Nav>
                  </Col>
                  <Col sm={8}>
                      <Tab.Content animation >
                          <Tab.Pane eventKey="first">
                              <Row>

                                  <Col xs={12} md={6} >
                                      <h3>Balance</h3>
                                      <p>На цьому місці має бути скріпт по вирахунку грошей</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>
                                      <p className="red">-20 грн - мандаринки</p>

                                  </Col>
                                  <Col xs={12} md={6}>
                                      <h3>Deposit</h3>
                                      <p className="green">+800 грн - Олег</p>
                                      <p className="green">+10 грн - Олексій</p>
                                  </Col>
                              </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                              <Row>



                                  <Col xs={12} md={4}>
                                      <h3>Patrons</h3>
                                      <p>Oleg - 800 грн </p>
                                      <p>Oleksyi - 300 грн</p>
                                      <p>Anatolyi - 10 грн</p>
                                      <p> Deposit[0] + Deposit[deposit.length] = Deposit</p>
                                  </Col>
                              </Row>
                          </Tab.Pane>
                      </Tab.Content>
                  </Col>
              </Row>
          </Tab.Container>


            {/*<Row className="text-center mt-4">*/}
                {/*<Col md={12}>*/}
                    {/*<p > <span  className="green">Deposit</span> - <span  className="red">Costs</span> = balance</p>*/}
                {/*</Col>*/}
            {/*</Row>*/}
        </Grid>
      </div>
    )
  }
}
