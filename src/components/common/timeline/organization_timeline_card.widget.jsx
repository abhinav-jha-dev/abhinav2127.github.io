import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Timeline, Link, Details } from '@primer/components';
import { appModule, modalType, markdownKeys } from '../../../utilities/enums';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';
import { covertToDate } from '../../../utilities/extensions';
import { GoSquirrel, GoMilestone } from 'react-icons/go';
import TimelineDescriptionWidget from './timeline_description.widget';

function OrganizationTimelineCardWidget(props) {
    const getDescriptionProps = (data) => {
        return {
            type: modalType.Markdown,
            title: data.keyAreas[0],
            moduleType: appModule.Organization,
            fileName: data.descriptionFile,
            logoFileName: data.logoFile,
            contentKey: markdownKeys.Experience
        };
    }

    return (
        <Timeline.Item>
            <Timeline.Badge bg={props.data.isWorking ? "green.5" : "#e1e4e8"}>
                {props.data.isWorking ? <GoSquirrel color={"white"} /> : <GoMilestone />}
            </Timeline.Badge>
            <Timeline.Body>
                <div>
                    <Link href="#" fontWeight="bold" color="gray.8" mr={1} muted>
                        {props.data.organization.name}
                    </Link>
                    {props.data.isWorking ? "working from" : "joined on"} {covertToDate(props.data.fromDate)}.
                        &nbsp;
                        Exp:&nbsp;
                    <Link href="#" color="gray.7" muted>
                        {props.data.experience}
                    </Link>
                </div>
                <small><i>Expend to see more info.</i></small>
                <Details className="mar-top-sm">
                    {({ open }) => (
                        <>
                            <Link as="summary" className="timeline-expend-icon">
                                {open ? <BsArrowsCollapse /> : <BsArrowsExpand />}
                            </Link>
                            <TimelineDescriptionWidget {...getDescriptionProps(props.data.organization)} />
                        </>
                    )}
                </Details>
            </Timeline.Body>
        </Timeline.Item>
    )
}

OrganizationTimelineCardWidget.propTypes = {
    data: PropTypes.object.isRequired
};

export default OrganizationTimelineCardWidget;

