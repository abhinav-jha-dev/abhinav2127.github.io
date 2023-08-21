import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from '@primer/components';
import { FiGitCommit } from 'react-icons/fi';
import * as parse from 'html-react-parser';
import { appModule } from '../../../utilities/enums';
import OrganizationTimelineCardWidget from './organization_timeline_card.widget';
import EducationTimelineCard from './education_timeline_card.widget';

function TimelineWidget(props) {
    return (
        <Timeline clipSidebar={true} className="mar-top-md">
            {
                props.dataSource.map((item, idx) => {
                    switch (props.moduleType) {
                        case appModule.Organization:
                            return <OrganizationTimelineCardWidget data={item} key={idx} />
                        case appModule.Education:
                            return <EducationTimelineCard data={item} key={idx} />
                        default:
                            return null;
                    }
                })
            }
            <Timeline.Item condensed>
                <Timeline.Badge>
                    <FiGitCommit />
                </Timeline.Badge>
                <Timeline.Body>{
                    // @ts-ignore
                    parse(`${props.footerData}`)}</Timeline.Body>
            </Timeline.Item>
        </Timeline>
    );
}

TimelineWidget.propTypes = {
    dataSource: PropTypes.array.isRequired,
    footerData: PropTypes.string.isRequired,
    moduleType: PropTypes.number.isRequired
};

export default TimelineWidget;

