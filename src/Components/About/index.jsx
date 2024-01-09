/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import SimpleCardParent from "../SimpleCardParent";
import styled from "styled-components";
import Book from "../Book";
function About() {
  return (
    <AboutContainer>
      <Container>
        <Row>
          <SimpleCardParent />
          <div className='pt-5 bg-light'>
            <Book heading1Text='Why this book' />
          </div>
        </Row>
      </Container>
    </AboutContainer>
  );
}
export default About;
const AboutContainer = styled.div``;
