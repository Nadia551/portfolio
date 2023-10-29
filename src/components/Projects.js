

import React from 'react';
import { Row, Col, Card , Container, Image} from 'react-bootstrap';
import briefcaseimage from '../Assets/briefcase.png';
const Projects = () => {
  return (
    <div className="projectbackground">
           <div className="text-center">
            <h2 className="d-inline">Open Source Projects</h2>
          </div>
    <Row className='m-0 p-0'>
        <Col sm={7}>
            <Row>
      <Col sm={6} className="p-3">
        <Card className="my-card">
          <Card.Body>
            <Card.Title> Cookbook Contentful</Card.Title>
            <Card.Text>
              Recipe Website with Contentful and React
            </Card.Text>
            <Container className="text-center">
      <a href="https://github.com/arojproj/cookbook-contentful" target="_blank" className="m-2">Github</a>
      <a href="https://wd-34-group1-cookbook.netlify.app"  target="_blank"className="m-2">Website</a>
    </Container>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="p-3">
        <Card className="my-card">
          <Card.Body>
            <Card.Title>Pokemon Fight</Card.Title>
            <Card.Text>
              Pokefight Website using Node.js React Bootstrap
            </Card.Text>
            <Container className="text-center">
      <a href="https://github.com/clirimaga/pokefight" target="_blank" className="m-2">Github</a>
      <a href="https://pokefightbyacnn.netlify.app"  target="_blank"className="m-2">Website</a>
    </Container>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="p-3">
        <Card className="my-card">
          <Card.Body>
            <Card.Title> Full-Stack Project</Card.Title>
            <Card.Text>
            Learning Website with Front-end Back-end
            </Card.Text>
            <Container className="text-center">
      <a href="https://github.com/clirimaga/final-project" target="_blank" className="m-2">Github</a>
      <a href="https://learn-german.onrender.com/"  target="_blank"className="m-2">Website</a>
    </Container>
          </Card.Body>
        </Card>
      </Col>
   <Col sm={6} className="p-3">
      <Card className="my-card">
        <Card.Body>
          <Card.Title>To Do List</Card.Title>
          <Card.Text>
            To Do List Create React App
          </Card.Text>
          <Container className="text-center">
    <a href="https://github.com/Jagholin/todo_react" target="_blank" className="m-2">Github</a>
    <a href="https://lighthearted-cucurucho-b95044.netlify.app"  target="_blank"className="m-2">Website</a>
  </Container>
        </Card.Body>
      </Card>
    </Col>
    <Col sm={6} className="p-3 mx-auto">
      <Card className="my-card">
        <Card.Body>
          <Card.Title> Hacker News</Card.Title>
          <Card.Text>
          News Website with API  React
          </Card.Text>
          <Container className="text-center">
    <a href="https://github.com/mae-rwen/HackerNewsAPI" target="_blank" className="m-2">Github</a>
    <a href=""  target="_blank"className="m-2">Website</a>
  </Container>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    </Col>
    <Col sm={5}> <Image src={briefcaseimage} className="briefcase"></Image></Col>
  </Row>
  </div> 
  );
};





export default Projects;