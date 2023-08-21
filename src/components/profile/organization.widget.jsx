import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OrganizationApi } from '../../data/app-data';

function OrganizationWidget(props) {
    let organizations;
    let nonProfits = OrganizationApi.getNonProfits();
    if (!props.ids)
        organizations = OrganizationApi.getAll();
    else
        organizations = OrganizationApi.getByIds(props.ids);

    function organizationGrid() {
        return (
            <>
                {props.ids ? null :
                    <>
                        <hr />
                        <h6>Organizations</h6>
                    </>}
                <Row className="organization-widget-pad">
                    {
                        organizations.map((item, index) => {
                            return (
                                <Col xs={2} key={index} className="no-padding mr-1 mb-1" style={{ minWidth: "40px" }}>
                                    <Link to={"/organizations/" + item.name}>
                                        <img src={require('../../assets/images/' + item.logoFile).default}
                                            alt={item.name}
                                            className="rounded-rectangle"
                                            width="100%" />
                                    </Link>
                                </Col>

                            );
                        })
                    }
                </Row>
            </>
        );
    }

    function opensourceOrganizationGrid() {
        return (
            <>
                {props.ids ? null :
                    <>
                        <hr />
                        <h6>Opensource Organization</h6>
                    </>}
                <Row className="organization-widget-pad">
                    {
                        nonProfits.map((item, index) => {
                            return (
                                <Col xs={2} key={index} className="no-padding mr-1 mb-1" style={{ minWidth: "40px" }}>
                                    <Link to={"/non_profit/" + item.name}>
                                        <img src={require('../../assets/images/' + item.logoFile).default}
                                            alt={item.name}
                                            className="rounded-rectangle"
                                            width="100%" />
                                    </Link>
                                </Col>

                            );
                        })
                    }
                </Row>
            </>
        );
    }

    return (
        <>
            {organizationGrid()}
            {props.ids ? null : opensourceOrganizationGrid()}
        </>
    );
}

export default OrganizationWidget;