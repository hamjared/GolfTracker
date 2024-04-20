'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServerSettings from './ServerSettings';
import CourseSettings from './CourseSettings';
import UserSettings from './UserSettings';
import { Container, Tab, Tabs } from 'react-bootstrap';

export type SettingsProps = {

}

export default function Settings() {
    return (

        <>
            <Container className='my-4'>
                <Tabs
                    defaultActiveKey="User"
                    id="settings-tab-pane"
                    className='mb-3'>
                    <Tab eventKey="User" title="User">
                        <UserSettings/>
                    </Tab>
                    <Tab eventKey="Courses" title="Courses">
                        <CourseSettings/>
                    </Tab>
                    <Tab eventKey="Server" title="Server">
                        <ServerSettings/>
                    </Tab>
                </Tabs>
            </Container>
        </>
    );
}
