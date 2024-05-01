'use client'
import { Round } from '@/app/data/Round';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear, Grid3x2, PencilSquare, Trash } from 'react-bootstrap-icons'
import PlayedHoleComponent from './PlayedHoleComponent';

export type RoundProps = {
    round: Round
}

export default function RoundComponent({ round }: RoundProps) {

    function handleEditClicked() {
        console.log("Edit clicked for ")
    }

    function handleDeleteClicked() {
        console.log("Delete clicked for ")
    }

    function handleShowScoreCard() {
        console.log("Handle show score card clicked")
    }
    return (
        <>
            <Card className={`h-100 text_reset text-decoration-none`}>
                <Card.Header>

                    <Stack gap={1} direction='horizontal' className='justify-content-end'>
                        <Col>{round.date.toDateString()}</Col>
                        <Grid3x2 style={{ cursor: 'pointer' }} onClick={handleShowScoreCard}/>
                        <PencilSquare style={{ cursor: 'pointer' }} onClick={handleEditClicked} />
                        <Trash style={{ cursor: 'pointer' }} onClick={handleDeleteClicked} />
                    </Stack>
                </Card.Header>
                <Card.Body>
                    <Carousel controls={true} interval={null} touch={true}>
                        <Carousel.Item>
                            <Stack gap={1}>
                                <div>{round.courseName}</div>
                                <div>Round Data</div>
                            </Stack>
                        </Carousel.Item>
                        {round.holeData.map(hole => (
                            <Carousel.Item key={hole.id}>
                                <PlayedHoleComponent hole={hole}/>
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Card.Body>

                <Card.Footer>Score: {round.score} Differential: {round.differential} </Card.Footer>

            </Card>
        </>
    );
}