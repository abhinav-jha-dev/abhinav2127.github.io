import React from 'react';
import { Row, Col, Card, Container, ListGroup } from 'react-bootstrap';
import { RepositoryApi } from '../../data/app-data';
import { useState } from 'react';
import ModalWidget from '../common/widgets/modal.widget';
import { modalType, appModule } from '../../utilities/enums';
import RepositoryWidget from './repository.widget';
import { isEmpty } from '../../utilities/extensions';

function RepositoryPage() {
    let repositories = RepositoryApi.getOpensourceRepositories();
    const [modalShow, setModalShow] = React.useState(false);
    const [modalProps, setModalProps] = useState({});

    function showRepositoryDetails(rep) {
        setModalProps({
            "title": rep.title,
            "type": modalType.Markdown,
            "markdownFileName": rep.descriptionFile,
            "moduleType": appModule.Repositories
        });
        setModalShow(true);
    }

    return (
        <>
            {!isEmpty(modalProps) ? <ModalWidget {...modalProps} show={modalShow}
                onHide={() => setModalShow(false)}></ModalWidget> : null}

            <Container className="mar-top-md mar-bottom-md pr-0 pl-0">
                <ListGroup variant="flush" className="rep-card">
                    {repositories.map((x, i) => {
                        return (
                            <RepositoryWidget props={x} key={i} onHeaderClicked={showRepositoryDetails} />
                        );
                    })}
                </ListGroup>
            </Container>
        </>
    );
}

export default RepositoryPage;