import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'react-bootstrap';
import MarkdownRenderer from '../markdown/markdown.renderer';
import { modalType, appModule } from '../../../utilities/enums';
import * as htmlParser from 'html-react-parser';

function TimelineDescriptionWidget(props) {
    let image = require('../../../assets/images/' + props.logoFileName).default;
    return (
        <Media>
            {props.logoFileName ?
                <img
                    width={64}
                    height={64}
                    className="mr-3 d-none d-sm-block"
                    src={image}
                    alt={props.title}
                /> : null}
            <Media.Body>
                <h6>{props.title}</h6>
                {props.type == modalType.Markdown ?
                    <><MarkdownRenderer
                        // @ts-ignore
                        {...props}></MarkdownRenderer></> : htmlParser(`${props.htmlBody}`)}
            </Media.Body>
        </Media>
    )
}

TimelineDescriptionWidget.propTypes = {
    type: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    moduleType: PropTypes.number.isRequired,
    fileName: PropTypes.string,
    logoFileName: PropTypes.string,
    htmlBody: PropTypes.string
};

export default TimelineDescriptionWidget;

