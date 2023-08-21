import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';
import { MdContactMail } from 'react-icons/md';
import { FaWpforms, FaDiscord } from 'react-icons/fa';
import { Link } from '@primer/components';

function HireConnectWidget(props) {
    const [companyInfo, setCompanyInfo] = useState(false);
    return (
        <ListGroup horizontal={"sm"}>
            <ListGroup.Item style={{ border: "none" }}>
                <Button as={Link} href="#" variant={"outline-secondary"} onClick={() => setCompanyInfo(true)} className="w-100 text-left">
                    <FiDownload />{' '}
                    Cover letter
                </Button>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
                <Button as={Link} target={"blank"} href="https://forms.gle/ZWbGRnbY9FJiXbGi6" variant={"outline-secondary"} className="w-100 text-left">
                    <FaWpforms />{' '}
                    Send details
                </Button>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
                <Button as={Link} target={"blank"} href="https://www.linkedin.com/in/abhinavjha58/" variant={"outline-secondary"} className="w-100 text-left">
                    <GrLinkedin />{' '}
                    LinkedIn
                </Button>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
                <Button as={Link} target={"blank"} href="mailto:abhinav.jhs58@gmail.com?subject=Looking%20to%20hire%20for" variant={"outline-secondary"} className="w-100 text-left">
                    <MdContactMail />{' '}
                    Mail me
                </Button>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>
                <Button as={Link} target={"blank"} href="https://discord.gg/JKKwgZH" variant={"outline-secondary"} className="w-100 text-left">
                    <FaDiscord />{' '}
                    Discord
                </Button>
            </ListGroup.Item>
        </ListGroup>
    )
}

HireConnectWidget.propTypes = {

};

export default HireConnectWidget;

