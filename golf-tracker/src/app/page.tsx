'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Card, Col, Container, Row, Stack, Tab, Tabs } from "react-bootstrap";
import { Gear, Plus, PlusLg, PlusSquareFill } from 'react-bootstrap-icons'

import { Course } from './data/Course';
import { useEffect, useState } from 'react';
import { getCurDate } from '@/utils/GetCurDate';
import { useLocalStorage } from 'usehooks-ts';
import { Round } from './data/Round';
import RoundComponent from '@/components/RoundComponent';
import { mockRounds } from './data/MockData/MockRoundData';

export type TestType = {
  someData: string
}

export default function Home() {
  const [courses, setCourses] = useLocalStorage<Course[]>("COURSES", [], { initializeWithValue: false })
  // const [rounds, setRounds] = useLocalStorage<Round[]>("ROUNDS", [], {initializeWithValue : false})
  const rounds: Round[] = mockRounds

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
            <Link href="/new-round"><Button><PlusLg /></Button></Link>
            <Link href="/settings"><Button variant="outline-secondary"><Gear></Gear></Button></Link>
          </Stack>
        </Col>
      </Row>
      <Row className='my-1'>
        <Tabs
          defaultActiveKey="CompletedRounds"
          id="settings-tab-pane"
          className='mb-3'>
          <Tab eventKey="CompletedRounds" title="Completed">
            <Stack gap={3}>
              <Row xs={1} sm={2} lg={4} xl={8} className='g-3'>
                {rounds.map(round => (
                  <Col key={round.id}>
                    <RoundComponent round={round} />
                  </Col>
                ))}
              </Row>
            </Stack>
          </Tab>
          <Tab eventKey="InProgressRounds" title="In Progress">
            <Stack gap={3}>
              <Row xs={1} sm={2} lg={4} xl={8} className='g-3'>
                {rounds.map(round => (
                  <Col key={round.id}>
                    <RoundComponent round={round} />
                  </Col>
                ))}
              </Row>
            </Stack>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
