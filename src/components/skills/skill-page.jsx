import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { SkillApi } from '../../data/app-data';
import SkillCategoryCard from './skill-category-card';
import { Flex, Box } from '@primer/components';
import { skillLevelColorCode } from '../../utilities/enums';

function SkillPage() {
    const map = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
    const skillCategories = SkillApi.getSkillsByCategories().sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return map[a.categoryId] - map[b.categoryId];
    });

    return (
        <Container className="ml-0 mr-0 mar-top-md skill-page p-0">
            <ListGroup variant="flush" horizontal>
                <ListGroup.Item><span className="skill-container">
                    <span className="language-mark" style={{ backgroundColor: skillLevelColorCode.Advance }}></span>
                    <small>6+ Years Experience</small>
                </span>
                </ListGroup.Item>
                <ListGroup.Item><span className="skill-container">
                    <span className="language-mark" style={{ backgroundColor: skillLevelColorCode.Intermediate }}></span>
                    <small>4-5 Years Experience</small>
                </span>
                </ListGroup.Item>
                <ListGroup.Item><span className="skill-container">
                    <span className="language-mark" style={{ backgroundColor: skillLevelColorCode.Basic }}></span>
                    <small>2-3 Years Experience</small>
                </span>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush" className="skill-card">
                {skillCategories.map((x, i) => {
                    return (
                        <SkillCategoryCard {...x} key={i} />
                    );
                })}
            </ListGroup>
        </Container>
    );
}

export default SkillPage;
