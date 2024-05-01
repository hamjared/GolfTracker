'use client'
import { PlayedHoleData, Round } from '@/app/data/Round';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel, Col, Container, Row, Stack } from "react-bootstrap";
import { Gear, PencilSquare, Trash } from 'react-bootstrap-icons'

export type PlayedHoleProps = {
    hole: PlayedHoleData
}

export default function PlayedHoleComponent({ hole }: PlayedHoleProps) {

    function handleEditClicked() {
        console.log("Edit clicked for ")
    }

    function handleDeleteClicked() {
        console.log("Delete clicked for ")
    }
    return (
        <>
            <div>Hole #{hole.holeNumber}</div>
        </>
    );
}