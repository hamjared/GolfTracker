'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear } from 'react-bootstrap-icons'

export type CourseProps = {
  course: Course
}

export default function CourseComponent({course} : CourseProps) {

  return (
    <>
    <h1>Course</h1>
    </>
  );
}