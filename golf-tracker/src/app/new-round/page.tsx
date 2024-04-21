'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear } from 'react-bootstrap-icons'
import { TestType } from '../page';
import { FormEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts';


export type NewRoundProps = {
}

export default function NewRound({} : NewRoundProps) {

  const [test, setTest] = useLocalStorage<TestType[]>("TEST", [], { initializeWithValue: false })



  function addTest(test: TestType) {
    console.log("In add test")
    setTest(prev => {return [...prev, test]})
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log("In handle submt")
    addTest({someData: "Yay!"})
  }
  return (
    <>
    <h1>New Round</h1>
    <Button onClick={handleSubmit}>Test</Button>
    </>
  );
}
