'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear, Plus, PlusLg, PlusSquareFill } from 'react-bootstrap-icons'

import { Course } from './data/Course';
import { useEffect, useState } from 'react';
import { getCurDate } from '@/utils/GetCurDate';
import { useLocalStorage } from 'usehooks-ts';

export type TestType = {
  someData: string
}

export default function Home() {
  const [courses, setCourses] = useLocalStorage<Course[]>("COURSES", [], { initializeWithValue: false })

  return (
    <Container className='my-4'>
      <Row className='my-4'>
        <Col>Name (HDCP)</Col>
        <Col className='d-flex justify-content-end'>{getCurDate()}</Col>
      </Row>
      <Row className='my-1'>
        <Col>Rounds</Col>
        <Col className='d-flex justify-content-end'>
          <Stack gap={2} direction='horizontal'>
          <Link href="/new-round"><Button><PlusLg/></Button></Link>
          <Link href="/settings"><Button variant="outline-secondary"><Gear></Gear></Button></Link>
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
