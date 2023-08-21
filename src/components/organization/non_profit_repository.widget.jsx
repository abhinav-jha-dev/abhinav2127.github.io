import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Box, Link, Flex } from '@primer/components';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { GoPackage } from 'react-icons/go';
import * as parse from 'html-react-parser';
import { projectType } from '../../utilities/enums';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { GoVersions } from 'react-icons/go';
import { MdPublish } from 'react-icons/md';
import { timeSince, getRandomColor } from '../../utilities/extensions';

function NonProfitRepositoryWidget(props) {

    const getRepositoryLogo = function (repType) {
        switch (repType) {
            case projectType.Package:
                return <GoPackage />
            default:
                return <RiGitRepositoryLine />;

        }
    }

    return (
        <Box className="box-container p-2 p-md-3">
            <Flex flexDirection="column">
                <Flex flexDirection="row">
                    <span className="card-icon" >
                        {getRepositoryLogo(props.projectType)}
                    </span>
                    <Link href={props.packageDetails.url} target="_blank">
                        <span className="card-title">{props.title}</span>
                    </Link>

                </Flex>
                <Flex flexDirection="row">
                    <span className="mar-top-sm text-justify app-text-truncate no-mar">
                        {
                            // @ts-ignore
                            parse(`${props.shortDescription}`)}
                    </span>
                    <ListGroup horizontal className="ml-2" style={{ color: "#007bff" }}>
                        <ListGroup.Item className="border-right border-bottom-0 border-left-0 border-top-0 p-1">
                            <h5 className="p-0 m-0">{props.packageDetails.likes}</h5>
                            <small className="font-weight-lighter">LIKES</small>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-right border-bottom-0 border-top-0 p-1" style={{ minWidth: "80px" }}>
                            <h5 className="p-0 m-0">{props.packageDetails.pubPoints}</h5>
                            <small className="font-weight-lighter">PUB POINTS</small>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0 p-1">
                            <h5 className="p-0 m-0">{props.packageDetails.popularity}{props.packageDetails.popularityPrefix}</h5>
                            <small className="font-weight-lighter">POPULARITY</small>
                        </ListGroup.Item>
                    </ListGroup>
                </Flex>
                <Flex flexDirection="row">
                    <ul className="contact-list mb-0" style={{ display: "contents", color: "#5b5f62" }}>
                        <li className="contact-list-item mr-3">
                            {
                                props.languages.map((x, i) => {
                                    return (
                                        <span className="skill-container" key={i}>
                                            <span className="language-mark" style={{ backgroundColor: getRandomColor(x.level ? x.level : "Default") }}></span>
                                            <small>{x}</small>
                                        </span>
                                    );
                                })
                            }
                        </li>
                        <li className="contact-list-item mr-2">
                            <AiOutlineStar />
                            &nbsp;
                            <span style={{ verticalAlign: "middle" }}>{props.stars}</span>
                        </li>
                        <li className="contact-list-item mr-2">
                            <AiOutlineFork />
                            &nbsp;
                            <span style={{ verticalAlign: "middle" }}>{props.forks}</span>
                        </li>
                        <li className="contact-list-item mr-3">
                            <GoVersions />
                            &nbsp;
                            <span style={{ verticalAlign: "middle" }}>{props.version}</span>
                        </li>
                        <li className="contact-list-item mr-2">
                            <small style={{ verticalAlign: "middle" }}>
                                {"Updated "}
                                {timeSince(props.lastPublishDate)}
                                {" ago"}
                            </small>
                        </li>
                    </ul>
                </Flex>
            </Flex>
        </Box>
    )
}

NonProfitRepositoryWidget.propTypes = {
};

export default NonProfitRepositoryWidget;

