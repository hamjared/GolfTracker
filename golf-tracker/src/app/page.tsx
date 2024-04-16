'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear } from 'react-bootstrap-icons'

export default function Home() {
  return (
    <Container className='my-4'>
      <Row className='my-4'>
        <Col>Name (HDCP)</Col>
        <Col className='d-flex justify-content-end'>CurDate</Col>
      </Row>
      <Row className='my-1'>
        <Col>Rounds</Col>
        <Col className='d-flex justify-content-end'>
          <Stack gap={2} direction='horizontal'>
          <Button>New</Button>
          <Button><Gear></Gear></Button>
          </Stack>
          
        </Col>
      </Row>
      <Row className='my-1'>
        <Stack className='square border rounded' direction='horizontal' gap={2} >
          <Card className='my-1' 
          style={{
            minWidth: "10vw",
            maxWidth: "20vw"
            
          }}>
            <Card.Header>Date </Card.Header>
            <Card.Body style={{
              padding: "10px"
            }}
            >
              Round Score
              </Card.Body>
            <Card.Footer>Course</Card.Footer>
          </Card>

          <Card className='my-1' style={{
            minWidth: "10vw",
            maxWidth: "15vw"
          }}>
            <Card.Header>Date </Card.Header>
            <Card.Body style={{
              padding: "10px"
            }}
            >
              Round Score
              Round summary
              </Card.Body>
            <Card.Footer>Course</Card.Footer>
          </Card>

        </Stack>
      </Row>
      </Container>
  );
}
