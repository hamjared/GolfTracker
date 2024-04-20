'use client'
import { Course } from '@/app/data/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row, Stack } from "react-bootstrap";
import { Gear, PlusLg } from 'react-bootstrap-icons'
import { useLocalStorage } from '../useLocalStorage';
import CourseComponent from '@/components/CourseComponent';


export default function UserSettings() {
    return (
        <>
            User Settings
        </>
    );
}