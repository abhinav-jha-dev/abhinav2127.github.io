import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import MarkdownRenderer from '../markdown/markdown.renderer';
import { modalType } from '../../../utilities/enums';

function ModalWidget(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            dialogClassName="modal-50w"
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.type == modalType.Markdown ? <div><MarkdownRenderer
                    fileName={props.markdownFileName}
                    moduleType={props.moduleType}></MarkdownRenderer></div> :
                    <p>
                        {props.htmlBody}
                    </p>}
            </Modal.Body>
        </Modal>
    )
}

ModalWidget.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.any.isRequired,
    type: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    moduleType: PropTypes.number.isRequired,
    markdownFileName: PropTypes.string,
    htmlBody: PropTypes.string
};

export default ModalWidget;

