import React from 'react';
import PropTypes from 'prop-types';
import * as radar from 'svg-radar-chart';
import * as stringify from 'virtual-dom-stringify';
import * as parse from 'html-react-parser';

function ExpRadarWidget(props) {
    const chart = radar({
        // columns
        programming: 'Programming',
        engineering: 'Engineering',
        tools: 'Tools',
        database: 'Database',
        frameworks: 'Frameworks'
    }, [
        // data
        { class: 'experience', programming: .9, engineering: 0.8, tools: .7, database: .4, frameworks: .6 },
    ]);

    const svg = `
    <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -12 120 110">
    	${stringify(chart, 'div')}
    </svg>`;

    return (
        <div style={{maxWidth:"400px"}}>
            {
                // @ts-ignore
                parse(svg)}
        </div>
    )
}

ExpRadarWidget.propTypes = {

};

export default ExpRadarWidget;

