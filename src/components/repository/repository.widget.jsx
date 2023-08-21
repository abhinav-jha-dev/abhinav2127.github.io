import React from 'react';
import { Card, Row, Col, Container, Badge, ListGroup } from 'react-bootstrap';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { SkillApi } from '../../data/app-data';
import { repositoryStatus, getKeyByEnumValue, appModule, repType } from '../../utilities/enums';
import { Link as PLink } from '@primer/components';
import { getRandomColor, getStyleByRepositoryStatus } from '../../utilities/extensions';
import * as parse from 'html-react-parser';
import PropTypes from 'prop-types';

function RepositoryWidget({ props, onHeaderClicked }) {
    var skills = SkillApi.getSkillByIds(props.skillIds);

    return (
        <ListGroup.Item id="rep_card">
            <div className="app-card-header">
                <span className="card-icon">
                    <RiGitRepositoryLine></RiGitRepositoryLine>
                </span>
                {props.type === appModule.Repositories ?
                    <PLink href={props.sourceUrl} target="_blank">
                        <span className="card-title">{props.title}</span>
                    </PLink> :
                    <a href="#" onClick={() => onHeaderClicked(props)}>
                        <span className="card-title">{props.title}</span>
                    </a>
                }
            </div>
            <p className="mar-top-sm text-justify app-text-truncate">
                {
                    // @ts-ignore
                    parse(`${props.shortDescription}`)}
            </p>
            <p className="app-card-footer float-left">
                <span className="rep-skills-container">
                    {
                        skills.map((x, i) => {
                            return (
                                <span className="skill-container" key={i}>
                                    <span className="language-mark" style={{ backgroundColor: getRandomColor(x.level ? x.level : "Default") }}></span>
                                    <small>{x.title}</small>
                                </span>
                            );
                        })
                    }
                </span>
                <span className="float-right">
                    <Badge variant={getStyleByRepositoryStatus(props.status)}>{getKeyByEnumValue(repositoryStatus, props.status)}</Badge>
                    &nbsp;
                    <Badge variant={"dark"}>{getKeyByEnumValue(repType, props.type)}</Badge>
                </span>
            </p>
        </ListGroup.Item>
    );
}

RepositoryWidget.propTypes = {

};
export default RepositoryWidget;