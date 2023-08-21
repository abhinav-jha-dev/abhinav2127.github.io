import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './sidenav.css';
import { Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Link } from '@primer/components';
import { Avatar } from '@primer/components';
import SocialContactWidget from '../profile/social_contact.widget';
import OrganizationWidget from '../profile/organization.widget';
import { MetaDataApi } from '../../data/app-data';

function SideNavWidget(props) {
    const [navState, setNavState] = useState(false)
    let navCoverStyle = { width: navState ? "100%" : "0", display: navState ? "block" : "none" }
    let sideNavStyle = { width: navState ? "250px" : "0", display: navState ? "block" : "none" }
    let profileInfo = MetaDataApi.getPersonData();
    const location = useLocation();

    function openNavClick(e) {
        e.preventDefault()
        setNavState(true);
    }
    function closeNavClick(e) {
        e.preventDefault()
        setNavState(false);
    }

    useEffect(() => {
        setNavState(false);
    }, [location]);

    return (
        <>
            <span onClick={openNavClick} className="open-nav">
                &#9776;
            </span>
            <div
                onClick={closeNavClick}
                className="nav-cover"
                style={navCoverStyle}
            />
            <div className="side-nav" style={sideNavStyle}>
                <Row style={{ color: "white", stroke: "white" }}>
                    <Col xs={12}>
                        <Card style={{ width: "100px" }}>
                            <Card.Img variant="top" src={profileInfo.imageUrl} />
                        </Card>
                        <a href="#" onClick={closeNavClick} className="close-nav">
                            &times;
                        </a>
                    </Col>
                    <Col xs={12}><h3 className="mt-2">
                        <Link href="/" style={{ color: "inherit" }}>
                            {profileInfo.name}
                            <div style={{ "fontSize": "12px" }} className={'pt-2 d-md-none d-sm-block'} >
                                <Avatar src="https://github.githubassets.com/images/icons/emoji/octocat.png" />
                    &nbsp;&nbsp;
                    <span style={{ "verticalAlign": "middle" }}>{profileInfo.role}</span>
                            </div>
                        </Link>
                    </h3>
                        <SocialContactWidget sideNav={true} />
                    </Col>
                    <Col xs={12} >
                        <OrganizationWidget />
                    </Col>
                </Row>
            </div>
        </>
    )
}

SideNavWidget.propTypes = {

};

export default SideNavWidget;

