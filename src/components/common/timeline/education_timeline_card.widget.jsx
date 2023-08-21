import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, Link, Details } from '@primer/components';
import { GoSquirrel, GoMilestone } from 'react-icons/go';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';
import TimelineDescriptionWidget from './timeline_description.widget';
import { modalType, appModule, markdownKeys } from '../../../utilities/enums';

function EducationTimelineCard(props) {
    const getEducationTemplate = (data) => {
        let listTemplate = "";
        data.achievements.forEach(element => {
            listTemplate += `<li style="overflow-wrap: anywhere;">${element}</li>`;
        });
        return `<div><small>Field of study</small><p><b>${data.fieldOfStudy}</b></p>${data.grade!=null?`CGPA Grade: <b>${data.grade}</b>`:""}<p>${data.shortDescription}</p><ul>${listTemplate}</ul>`
    }
    const getDescriptionProps = (data) => {
        return {
            type: modalType.Simple,
            title: data.constitutionName,
            moduleType: appModule.Education,
            logoFileName: data.logoFile,
            htmlBody: getEducationTemplate(data)
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
                        {props.data.boardName}
                    </Link>
                    {!props.data.isWorking ? "completed " : "started "}
                    <Link href="#" fontWeight="bold" color="gray.8" mr={1} muted>
                        {props.data.degreeName}.
                        </Link>
                        &nbsp;
                        Period:&nbsp;
                    <Link href="#" color="gray.7" muted>
                        {props.data.startYear} to {props.data.endYear}
                    </Link>
                </div>
                <small><i>Expend to see more info.</i></small>
                <Details className="mar-top-sm">
                    {({ open }) => (
                        <>
                            <Link as="summary" className="timeline-expend-icon">
                                {open ? <BsArrowsCollapse /> : <BsArrowsExpand />}
                            </Link>
                            <TimelineDescriptionWidget {...getDescriptionProps(props.data)} />
                        </>
                    )}
                </Details>
            </Timeline.Body>
        </Timeline.Item>
    )
}

EducationTimelineCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default EducationTimelineCard;

