import React from 'react';
import { Alert, Button } from 'react-bootstrap';

function PWAAlert() {
    return (
        <Alert variant="success" className="pwa-alert" id="pwaAlert">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                <b>Oh yes!</b>, seems like you can now download my portfolio app on your device.<br /><b>Try it out and get my latest blogs.</b>
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-success" id="pwaAlert-btn">
                    Install
                </Button>
            </div>
        </Alert>
    )
}

export default PWAAlert;
