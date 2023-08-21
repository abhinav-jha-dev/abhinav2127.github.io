import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Box } from '@primer/components';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { Link as PLink } from '@primer/components';
import { Link } from 'react-router-dom';
import { appModule, getKeyByEnumValue, repType } from '../../utilities/enums';
import * as parse from 'html-react-parser';
import { SkillApi } from '../../data/app-data';
import { getRandomColor } from '../../utilities/extensions';

function OverviewRepositoryWidget(props) {
    var skills = SkillApi.getSkillByIds(props.skillIds);
    var skillCategory = SkillApi.getCategoryById(1);
    return (
        <Box className="box-container p-2 p-md-3">
            <div className="app-card-header text-truncate d-flex">
                <span className="card-icon">
                    <RiGitRepositoryLine></RiGitRepositoryLine>
                </span>
                {props.type === appModule.Repositories ?
                    <PLink href={props.sourceUrl} target="_blank">
                        <span className="card-title">{props.title}</span>
                    </PLink> :
                    <Link to={'/repositories'}>
                        <span className="card-title">{props.title}</span>
                    </Link>
                }
            </div>
            <p className="mar-top-sm text-justify app-text-truncate no-mar pinned-item-desc">
                {
                    // @ts-ignore
                    parse(`${props.shortDescription}`)}
            </p>
            <p className="app-card-footer float-left no-mar">
                <span className="rep-skills-container">
                    {
                        skills.filter(x => skillCategory.subSkills.includes(x)).map((x, i) => {
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
                    <Badge variant={"dark"}>{getKeyByEnumValue(repType, props.type)}</Badge>
                </span>
            </p>
        </Box>
    );
}

export default OverviewRepositoryWidget;