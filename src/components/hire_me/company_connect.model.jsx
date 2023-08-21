import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CompanyConnectWidget(props) {
    const [height, setHeight] = React.useState(window.innerHeight);
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <small><b>Please leave your details to download CV/Resume.</b></small>
            </Modal.Header>
            <Modal.Body>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOxLM4nP_RM08SHUWOrhkefIJLIKxPdVIZPCaoouF8wpFIZA/viewform?embedded=true" width="100%" height={height - 180} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Modal.Body>
        </Modal>
    )
}

export default CompanyConnectWidget;

