import React from 'react';
import { Button } from 'react-bootstrap';
import { AvatarStack, Link } from '@primer/components';
import { MetaDataApi, ExperienceApi } from '../../data/app-data';
import { Link as AppLink } from 'react-router-dom';
import { GrOrganization } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';

function SocialContactWidget({ sideNav }) {
    let socialContacts = MetaDataApi.getContactDetails();
    let educationDetail = ExperienceApi.getEducationTimeline()[0];
    let personDetail = MetaDataApi.getPersonData();
    return (
        <>
            <ul className="contact-list">
                <li className={`contact-list-item ${sideNav ? "" : "d-none d-md-block"}`}>
                    <GrOrganization className={sideNav ? "svg-path-stroke-white" : null} />{"  "}
                    <small className="contact-element-style">{educationDetail.boardName}</small>
                </li>
                <li className="contact-list-item">
                    <GoLocation />{"  "}
                    <small className="contact-element-style">{personDetail.lastJobLocation}</small>
                </li>
                <li className="contact-list-item">
                    <AiOutlineMail />{"  "}
                    <small className="contact-element-style">{socialContacts.email}</small>
                </li>
                <li className={`contact-list-item ${sideNav ? "" : "d-none d-md-block"}`}>
                    <FiGithub />{"  "}
                    <Link href={socialContacts.github} target="_blank">
                        <small className="contact-element-style">{socialContacts.githubTag}</small>
                    </Link>
                </li>
                <li className={`contact-list-item ${sideNav ? "" : "d-none d-md-block"}`}>
                    <RiLinkedinLine />{"  "}
                    <Link href={socialContacts.linkedIn} target="_blank">
                        <small className="contact-element-style">{socialContacts.linkedInTag}</small>
                    </Link>
                </li>
                <li className={`contact-list-item ${sideNav ? "" : "d-none d-md-block"}`}>
                    <FaTwitter />{"  "}
                    <Link href={socialContacts.twitter} target="_blank">
                        <small className="contact-element-style">{socialContacts.twitterTag}</small>
                    </Link>
                </li>
            </ul>
            <div className="mar-top-sm">
                <AppLink to="/hire-me">
                    <Button variant="light" className="full-width">Hire Me!</Button>
                </AppLink>
            </div>
        </>
    );
}

export default SocialContactWidget;