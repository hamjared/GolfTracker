'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row, Stack } from "react-bootstrap";
import { Gear, PlusLg } from 'react-bootstrap-icons'
import CourseComponent from '@/components/CourseComponent';
import { useLocalStorage } from 'usehooks-ts';
import { ServerSettingsType, defaultServerSettings } from '../data/ServerSettings';
import { scrapeCourseFromUrl } from '@/ApiCalls/courseData';


export default function CourseSettings() {
    const [courses, setCourses] = useLocalStorage<Course[]>("COURSES", [], { initializeWithValue: false })

    const [serverSettings, setServerSettings] = useLocalStorage<ServerSettingsType>("SERVER_SETTINGS", defaultServerSettings, { initializeWithValue: false })

    const [showAddCourseModal, setShowAddCourseModal] = useState(false)

    const courseURLRef = useRef<HTMLInputElement>(null)

    const handleCloseCourseModal = () => setShowAddCourseModal(false)
    const handleShowCourseModal = () => setShowAddCourseModal(true)

    function handleImportCourse() {
        scrapeCourseFromUrl(courseURLRef.current!.value, serverSettings).then(course => {

            // if (courses.some(c => c.id === course.id))
            setCourses(prev => [course, ...prev])
        })
    }
    return (
        <>
            <Modal show={showAddCourseModal} onHide={handleCloseCourseModal}>
                <Modal.Header closeButton> Add Course from URL</Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="courseURL">
                        <Form.Label>Course URL</Form.Label>
                        <Form.Control required ref={courseURLRef}></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Stack direction='horizontal' gap={2}>
                        <Button onClick={handleImportCourse}>Import Course</Button>
                        <Button variant="outline-secondary" onClick={handleCloseCourseModal}>Cancel</Button>
                    </Stack>
                </Modal.Footer>
            </Modal>

            <Stack gap={3}>
                <Row xs={1} sm={2} lg={4} xl={8} className='g-3'>
                    {courses.map(course => (
                        <Col key={course.id}>
                            <CourseComponent course={course} />
                        </Col>
                    ))}
                </Row>
                <Button onClick={handleShowCourseModal}><PlusLg /></Button>
            </Stack>
        </>
    );
}