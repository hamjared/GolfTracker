'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent, useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Gear } from 'react-bootstrap-icons'
import { ServerSettingsType, defaultServerSettings } from '../data/ServerSettings';
import { useLocalStorage } from 'usehooks-ts';

export type ServerSettingsProps = {
}

export default function ServerSettings() {

    
    const [serverSettings, setServerSettings] = useLocalStorage<ServerSettingsType>("SERVER_SETTINGS", defaultServerSettings, { initializeWithValue: false })

    const serverIp = useRef<HTMLInputElement>(null)

    const serverPort = useRef<HTMLInputElement>(null)



    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        setServerSettings({
            ip: serverIp.current!.value,
            port: +serverPort.current!.value,
            isHttps: true,
            usePort: false
        })
    }

    function handleReset(){

    }

  return (
    <>
    <Container>
        <Form onSubmit={handleSubmit}>

            <FormGroup className='mb-3' >
                <Form.Label>Server IP</Form.Label>
                <Form.Control type='text' defaultValue={serverSettings.ip} ref={serverIp} />
            </FormGroup>

            <FormGroup className='mb-3'>
                <Form.Label>Server Port</Form.Label>
                <Form.Control type='text' defaultValue={serverSettings.port} ref={serverPort}/>
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