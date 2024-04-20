'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Gear } from 'react-bootstrap-icons'

export type ServerSettingsProps = {
}

export default function ServerSettings() {

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
    }

    function handleReset(){

    }

  return (
    <>
    <Container>
        <Form onSubmit={handleSubmit}>

            <FormGroup className='mb-3'>
                <Form.Label>Server IP</Form.Label>
                <Form.Control type='text'/>
            </FormGroup>

            <FormGroup className='mb-3'>
                <Form.Label>Server Port</Form.Label>
                <Form.Control type='text'/>
            </FormGroup>

            <Stack direction='horizontal' gap={2} className='justify-content-end'>
                <Button type='submit' variant='primary'>Save</Button>
                <Button variant='outline-secondary' onClick={handleReset}>Reset</Button>

            </Stack>

        </Form>
    </Container>
    </>
  );
}