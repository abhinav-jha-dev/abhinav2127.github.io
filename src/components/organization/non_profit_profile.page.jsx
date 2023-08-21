import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { OrganizationApi } from '../../data/app-data';
import { Flex, Box, Link, UnderlineNav } from '@primer/components';
import { Row, Col, Badge } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine, RiGitRepositoryLine } from 'react-icons/ri';
import NonProfitRepositoryWidget from './non_profit_repository.widget';
import NonProfitContributorsWidget from './non_profit_contributors.widget';

const profileStyle = {
    header: {
        backgroundColor: "#fafbfd",
        marginBottom: "1rem",
        borderBottom: "1px solid #e3e4e6"
    },
    logoStyle: {
        borderRadius: 5,
        marginRight: "1.7rem"
    },
    title: {
        color: "#24292e!important",
        fontSize: "1.5rem"
    },

};

function NonProfitProfilePage(props) {
    let { name } = useParams();
    let organization, repositoryCount;

    if (name != "") {
        organization = OrganizationApi.getNonProfitByName(name);
        repositoryCount = organization.repositories.length;
    }

    return (
        <Flex flexDirection="column">
            <header style={profileStyle.header} className="p-0 pr-md-4 pl-md-4">
                <Flex flexDirection="row" className="container-lg pt-4">
                    <Link href={organization.organizationUrl}>
                        <img style={profileStyle.logoStyle} src={require('../../assets/images/' + organization.logoFile).default} width={100} height={100} />
                    </Link>
                    <Flex flexDirection="column">
                        <Link href={organization.organizationUrl} style={{ color: "inherit" }}>
                            <h1 style={profileStyle.title}>{organization.name}</h1>
                        </Link>
                        <small className="mar-bottom-xs">{organization.description}
                            <Link href={organization.founderGithubUrl} target="_blank"><i>{" "}Know more about Founder.</i></Link></small>

                        <ul className="contact-list profile-contact-list">
                            <li className="contact-list-item">
                                <AiOutlineMail />{"  "}
                                <Link href={organization.githubUrl} target="_blank">
                                    <small style={{ color: "#666", verticalAlign: "middle" }}>{organization.email}</small>
                                </Link>
                            </li>
                            <li className="contact-list-item">
                                <FiGithub />{"  "}
                                <Link href={organization.githubUrl} target="_blank">
                                    <small style={{ color: "#666", verticalAlign: "middle" }}>{"@_thepolyglotacademy"}</small>
                                </Link>
                            </li>
                            <li className="contact-list-item">
                                <RiLinkedinLine />{"  "}
                                <Link href={organization.linkedInUrl} target="_blank">
                                    <small style={{ color: "#666", verticalAlign: "middle" }}>{"@_thepolyglotacademy"}</small>
                                </Link>
                            </li>
                        </ul>
                    </Flex>
                </Flex>

                <UnderlineNav>
                    <Link href="#">
                        <UnderlineNav.Link as="div" selected={true}>
                            <RiGitRepositoryLine />
                            &nbsp;
                            Repositories
                            &nbsp;
                            <Badge pill variant="secondary">{repositoryCount}</Badge>
                        </UnderlineNav.Link>
                    </Link>
                </UnderlineNav>
            </header>
            <Flex flexDirection="column">
                {organization.contributors.length > 0 ?
                    <Box className="mb-2">
                        <p>Contributors</p>
                        <Flex flexDirection="row">
                            {
                                organization.contributors.map((val, idx) => {
                                    val["organizationName"] = organization.name;
                                    return (<NonProfitContributorsWidget {...val} key={idx} />);
                                })
                            }
                        </Flex>
                    </Box>
                    : null}
                {organization.repositories.length > 0 ?
                    <Box>
                        <p>Pinned Repositories</p>
                        <Flex flexDirection="column">
                            {
                                organization.repositories.map((val, idx) => {
                                    return (<Col md={12} className="p-0 mb-4" key={idx} >
                                        <NonProfitRepositoryWidget {...val} key={idx} />
                                    </Col>);
                                })
                            }
                        </Flex>
                    </Box>
                    : null}
            </Flex>
        </Flex>
    )
}

NonProfitProfilePage.propTypes = {

};

export default NonProfitProfilePage;

