import React, { useEffect } from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { getKeyByEnumValue, experienceLevels } from '../../utilities/enums';

function OverviewSkillsWidget(props) {
    return (
        <ListGroup variant="flush">
            {
                props.subSkills.map((v, idx) => {
                    return (<ListGroup.Item className="p-2 p-md-2" key={idx}>
                        <small><b>{v.name}</b></small>
                        {/* <Badge variant="dark" className="float-right">{
                            getKeyByEnumValue(experienceLevels, v.rating, true)
                        }</Badge> */}
                    </ListGroup.Item>);
                })
            }
        </ListGroup>
    );
}

export default OverviewSkillsWidget;