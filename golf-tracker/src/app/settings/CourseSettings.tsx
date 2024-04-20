'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row, Stack } from "react-bootstrap";
import { Gear, PlusLg } from 'react-bootstrap-icons'
import { useLocalStorage } from '../useLocalStorage';
import CourseComponent from '@/components/CourseComponent';


export default function CourseSettings() {
    const [courses, setCourses] = useLocalStorage<Course[]>("COURSES", [])

    const [showAddCourseModal, setShowAddCourseModal] = useState(false)

    const handleCloseCourseModal = () => setShowAddCourseModal(false)
    const handleShowCourseModal = () => setShowAddCourseModal(true)

    function handleImportCourse() {
        console.log("Handle import course")
        // var course = getCourseData("https://www.greenskeeper.org/colorado/Denver_North_Boulder_Fort_Collins/riverdale_golf_course_dunes/scorecard.cfm")
    }
    return (
        <>
            <Modal show={showAddCourseModal} onHide={handleCloseCourseModal}>
                <Modal.Header closeButton> Add Course from URL</Modal.Header>
                <Modal.Body>
                    <Form.Label>Course URL</Form.Label>
                    <Form.Control type='text'></Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Stack direction='horizontal' gap={2}>
                        <Button onClick={handleImportCourse}>Import Course</Button>
                        <Button variant="outline-secondary" onClick={handleCloseCourseModal}>Cancel</Button>
                    </Stack>
                </Modal.Footer>
            </Modal>

            {courses.map(course => (
                            <CourseComponent course={course} />
                        ))}
                        <Button onClick={handleShowCourseModal}><PlusLg /></Button>
        </>
    );
}