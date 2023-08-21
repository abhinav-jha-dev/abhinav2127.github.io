import React from 'react';
import { Row, Col } from 'react-bootstrap';
import * as ExperienceApi from '../../data/experience';
import { appModule } from '../../utilities/enums';
import { FilterList } from '@primer/components';
import { useState } from 'react';
import TimelineWidget from '../common/timeline/timeline.widget';
import { useEffect } from 'react';
import { isEmpty } from '../../utilities/extensions';

function OrganizationTimelineWidget(props) {
    const totalExperience = ExperienceApi.getTotalExperience(appModule.Organization);
    const timelineInfo = props.timeline ? props.timeline : ExperienceApi.getOrganizationTimeline();
    const showYearFilter = props.showYearFilter != undefined ? props.showYearFilter : true;
    const propsYear = props.year ? props.year : null;
    const [timelineProps, setTimelineProps] = useState({});

    const footerTemplate = () => "Total Professional Experience: <b>" + totalExperience.totalExperience + "</b>";
    const updateTimelineProps = function (dataSource) {
        setTimelineProps({
            dataSource: dataSource,
            footerData: footerTemplate(),
            moduleType: appModule.Organization
        });
    };
    useEffect(() => {
        updateTimelineProps(timelineInfo);
    }, [])

    const [filterYear, setFilterYear] = useState(propsYear);

    const getExperienceYear = function () {
        let years = [];
        for (let i = totalExperience.toYear; i >= totalExperience.fromYear; i--) {
            years.push(i);
        }
        return years;
    }

    const setFilteredYear = function (year) {
        setFilterYear(year);
        updateTimelineProps(ExperienceApi.filterExperienceByYear(appModule.Organization, year))
    }

    const clearFilter = function () {
        setFilterYear(null);
        updateTimelineProps(ExperienceApi.getOrganizationTimeline())
    }


    return (
        <Row>
            <Col md={showYearFilter ? 10 : 12} sm={showYearFilter ?{span:10, order:1}:{span:12, order:1}} xs={{span:12, order:2}}>
                {!isEmpty(timelineProps) ?
                    <TimelineWidget {...timelineProps}></TimelineWidget> : null}
            </Col>
            {showYearFilter ?
                <Col md={2} sm={{span:2, order:2}} xs={{span:12, order:1}}>
                    <FilterList className="mt-2 exp-filter-list" >
                        {
                            (getExperienceYear()).map((val, idx) => {
                                return (
                                    <FilterList.Item key={idx} selected={filterYear == val} onClick={() => setFilteredYear(val)}>
                                        <span style={filterYear == val ? { color: 'white' } : {}}>{val}</span></FilterList.Item>
                                );
                            })
                        }
                        <FilterList.Item onClick={() => clearFilter()}>Clear</FilterList.Item>
                    </FilterList>
                </Col> : null}
        </Row>
    );
}

export default OrganizationTimelineWidget;