import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HireConnectWidget from './hire_connect.widget';
import Resume from '../../assets/Abhinav_Jha_Resume.pdf';

function HireMePage(props) {

    return (
        <Container>
            <Row>
                <Col md={{ span: 12, order: 1 }} xs={{ span: 12, order: 2 }} className="mar-bottom-sm">
                    <HireConnectWidget />
                </Col>
                <Col md={{ span: 12, order: 2 }} xs={{ span: 12, order: 1 }} className="d-none d-md-block">
                    <small style={{ color: "red" }}><i>Feel free to download my resume for future reference.</i></small>
                    <iframe src={Resume} style={{width:'100%', height:'70vh'}} />
                </Col>
            </Row>
        </Container>
    )
}

HireMePage.propTypes = {

};

export default HireMePage;

