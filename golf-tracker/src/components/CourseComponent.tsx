'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear, PencilSquare, Trash } from 'react-bootstrap-icons'

export type CourseProps = {
  course: Course,
}

export default function CourseComponent({ course }: CourseProps) {
  
  function handleEditClicked() {
    console.log("Edit clicked for " + course.name)
  }

  function handleDeleteClicked() {
    console.log("Delete clicked for " + course.name)
  }
  return (
    <>
      <Card className={`h-100 text_reset text-decoration-none`}>
        <Card.Header>
          <Stack gap={1} direction='horizontal' className='justify-content-end'>
            <PencilSquare style={{cursor:'pointer'}} onClick={handleEditClicked}/>
            <Trash style={{cursor:'pointer'}} onClick={handleDeleteClicked}/>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Stack gap = {1}>
            <div>{course.name}</div>
            <div>Tees:</div>
          </Stack>
        </Card.Body>

        <Card.Footer>Par: Rating: Slope: </Card.Footer>

      </Card>
    </>
  );
}