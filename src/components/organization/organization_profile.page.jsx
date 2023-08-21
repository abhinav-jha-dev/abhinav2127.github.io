// @ts-ignore
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { OrganizationApi, SkillApi, ExperienceApi } from '../../data/app-data';
import { appModule, getKeyByEnumValue, employedAs } from '../../utilities/enums';
import { getRandomColor } from '../../utilities/extensions';
import OrganizationWidget from '../profile/organization.widget';
import MarkdownRenderer from '../common/markdown/markdown.renderer';

function OrganizationProfilePage() {
    let { name } = useParams();
    let organization, skills, experiences;

    if (name != "") {
        organization = OrganizationApi.getByName(name);
        skills = SkillApi.getSkillByIds(organization.skills);
        // @ts-ignore
        experiences = ExperienceApi.getOrganizationTimeline().find(x => x.organization.orgId == organization.orgId);
    }

    const getSkillComponent = function () {
        if (skills.length > 0) {
            return (
                <div className="mt-md-2">
                    <h5>Skills</h5>
                    {
                        skills.map((x, i) => {
                            return (
                                <div className="skill-item" key={i}>
                                    <div className="language-mark" style={{ backgroundColor: getRandomColor(x.level ? x.level : "Default") }}></div>
                                    <small>{x.title}</small> &nbsp;
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
        return null;
    }

    const getKeyRoleTemplate = function () {
        if (organization.keyAreas.length > 0) {
            return (<div>
                <h5>Key Roles</h5>
                <ListGroup variant="flush">
                    {
                        organization.keyAreas.map((x, i) => {
                            return (
                                <ListGroup.Item key={i} className={'p-0'}>{x}</ListGroup.Item>
                            );
                        })
                    }
                </ListGroup>
            </div>);
        }
        return null;
    }

    const getRelatedOrganizationTemplate = function () {
        if (organization.relatedOrganizations.length > 0) {
            return (
                <div className="mt-md-2">
                    <h5>{organization.workStatus == employedAs.FullTime ? "Contractors" : "Service Provider"}</h5>
                    <OrganizationWidget ids={organization.relatedOrganizations}></OrganizationWidget>
                </div>
            );
        }
    }

    return (
        <div className="organization-profile">
            <Row>
                <Col className="mb-3 mb-sm-0">
                    <div className="title-container">
                        <p className="title"> {name}</p>
                        <small>As <b>{getKeyByEnumValue(employedAs, organization.workStatus, true)}</b> Employee</small>
                        {experiences ? <small className="float-right" ><i>Work Experience: </i><b>{experiences.
                            // @ts-ignore
                            experience}</b></small> : null}
                        <small className="float-right" style={{ marginRight: "5px" }}><i>Work location: </i><b>{organization.location}</b></small>
                    </div>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, order: 1 }} sm={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
                    <MarkdownRenderer
                        fileName={organization.descriptionFile}
                        moduleType={appModule.Organization}></MarkdownRenderer>
                </Col>
                <Col md={{ span: 4, order: 2 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <Row >
                        <Col className="pb-2 pb-md-0" md={{ span: 12, order: 1 }} sm={{ span: 8, order: 1 }} xs={{ span: 7, order: 1 }}>
                            {getKeyRoleTemplate()}
                        </Col>
                        <Col md={{ span: 12, order: 3 }} sm={{ span: 4, order: 1 }} xs={{ span: 5, order: 1 }}>
                            {getRelatedOrganizationTemplate()}
                        </Col>
                        <Col className="d-none d-md-block" md={{ span: 12, order: 2 }} >
                            {getSkillComponent()}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default OrganizationProfilePage;
