import React from 'react';
import '../styles/components/AppHeader.css';
import HeaderButton from './HeaderButton';
import {Row} from 'react-bootstrap';

export default function AppHeader({loading}) {
    return (
        <Row className="d-flex flex-row align-content-end justify-content-center">
            <HeaderButton loading={loading} to="/" title="About"/>
            <HeaderButton loading={loading} to="/education" title="Education"/>
            <HeaderButton loading={loading} to="/experience" title="Experience"/>
            <HeaderButton loading={loading} to="/projects" title="Projects"/>
        </Row>
    );
}
