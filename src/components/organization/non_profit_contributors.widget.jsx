import React from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import { Link, Avatar, Flex } from '@primer/components';

function NonProfitContributorsWidget(props) {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title><small>Member of <b><i>{props.organizationName}</i></b></small></Popover.Title>
            <Popover.Content>
                <Flex flexDirection="row">
                    <Avatar src={props.logoUrl} size={50} className="circle mr-2" />
                    <ul className="contact-list mb-0">
                        <li className="contact-list-item">
                            {props.name}{" "}
                            <Link href={props.githubProfileUrl}>
                                <i>{props.githubTag}</i>
                            </Link>
                        </li>
                        <li className="contact-list-item">
                            <b>{props.role}</b>
                        </li>
                    </ul>
                </Flex>
            </Popover.Content>
        </Popover>
    );

    return (
        <Link href={props.githubProfileUrl} target="_blank">
            <OverlayTrigger placement="bottom" overlay={popover}>
                <img src={props.logoUrl} width={100} className="circle" />
            </OverlayTrigger>
        </Link >
    )
}

NonProfitContributorsWidget.propTypes = {
    organizationName: PropTypes.string.isRequired
};

export default NonProfitContributorsWidget;

