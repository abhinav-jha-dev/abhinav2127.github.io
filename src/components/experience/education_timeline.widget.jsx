import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ExperienceApi } from '../../data/app-data';
import TimelineWidget from '../common/timeline/timeline.widget';
import { appModule } from '../../utilities/enums';
import { Row, Col } from 'react-bootstrap';
import { isEmpty } from '../../utilities/extensions';
import { FilterList } from '@primer/components';

function EducationTimeline(props) {
    let educationInfo = ExperienceApi.getEducationTimeline();
    const [timelineProps, setTimelineProps] = useState({});

    const footerTemplate = () => "Last educational degree is <b>" + educationInfo[0].degreeName + "</b> with <b>" + educationInfo[0].fieldOfStudy + "</b>.";
    const updateTimelineProps = function (dataSource) {
        setTimelineProps({
            dataSource: dataSource,
            footerData: footerTemplate(),
            moduleType: appModule.Education
        });
    };

    useEffect(() => {
        updateTimelineProps(educationInfo);
    }, [])
    return (
        <Row>
            <Col md={12}>
                {!isEmpty(timelineProps) ?
                    <TimelineWidget {...timelineProps}></TimelineWidget> : null}
            </Col>
        </Row>
    )
}

EducationTimeline.propTypes = {

};

export default EducationTimeline;

