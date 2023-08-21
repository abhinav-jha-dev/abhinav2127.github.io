import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { getRandomColor } from '../../utilities/extensions';
import { FaLaptopCode } from "react-icons/fa";

function SkillCategoryCard(props) {
    return (
        <>
            <ListGroup.Item id="skill_card" className="pb-0">
                <div className="app-card-header">
                    <span className="card-icon">
                        <FaLaptopCode></FaLaptopCode>
                    </span>
                    <span className="card-title">{props.category}</span>
                </div>
            </ListGroup.Item>
            <span className="pad-xs">
                {
                    props.subSkills.map((x, i) => {
                        return (
                            <Badge key={i} style={{ backgroundColor: getRandomColor(x.level ? x.level : "Default"), color: 'white', marginRight: "5px", padding: "5px", marginBottom: '5px', fontSize: '1.1 rem' }}>{x.title}</Badge>
                        );
                    })
                }
            </span>
        </>
    );
}

export default SkillCategoryCard;