import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar } from '@primer/components';
import SocialContactWidget from './social_contact.widget';
import OrganizationWidget from './organization.widget';
import { Link } from '@primer/components';
import { MetaDataApi } from '../../data/app-data';

function ProfilePage() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
    let profileInfo = MetaDataApi.getPersonData();
    return (
        <>
            <Row>
                <Col md={12} sm={3} xs={4}><Card>
                    <Card.Img variant="top" src={profileInfo.imageUrl} />
                    <Card.Body className={'pad-xs d-none d-md-block'}>
                        <Card.Text style={{ "fontSize": "12px" }}>
                            <Avatar src="https://github.githubassets.com/images/icons/emoji/octocat.png" />
                    &nbsp;&nbsp;
                    <span style={{ "verticalAlign": "middle" }}>{profileInfo.role}</span>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col md={12} sm={9} xs={8}><h3 className="mt-md-2">
                    <Link href="/" style={{ color: "inherit" }}>
                        {profileInfo.name}
                        <div style={{ "fontSize": "12px" }} className={'pt-2 d-md-none d-sm-block'} >
                            <Avatar src="https://github.githubassets.com/images/icons/emoji/octocat.png" />
                    &nbsp;&nbsp;
                    <span style={{ "verticalAlign": "middle" }}>{profileInfo.role}</span>
                        </div>
                    </Link>
                </h3>
                    <SocialContactWidget sideNav={false} />
                </Col>
                <Col sm={12} className={'d-none d-md-block'} >
                    <OrganizationWidget />
                </Col>
            </Row>
        </>
    );
}

export default ProfilePage;