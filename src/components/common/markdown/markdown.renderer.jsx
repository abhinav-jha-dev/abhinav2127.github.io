import React, { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { fetchMarkdownData, getMarkdownContentByKey } from '../../../utilities/extensions';
import { injectMarkdown } from '../../../content/markdown.provider';

function MarkdownRenderer(props) {
    const ReactMarkdown = lazy(() => import('react-markdown'));
    const [mdText, setMdText] = useState('');
    let { moduleType, fileName, contentKey } = props;

    useEffect(() => {
        injectMarkdown(moduleType, fileName).then(res => {
            fetchMarkdownData(res.default).then(val => {
                if (contentKey)
                    setMdText(getMarkdownContentByKey(val, contentKey));
                else
                    setMdText(val);
            });
        });
    });

    return (
        <Suspense fallback={<div><i>Loading Document...</i></div>}>
            <ReactMarkdown source={mdText} escapeHtml={false}></ReactMarkdown>
        </Suspense>
    )
}

MarkdownRenderer.propTypes = {
    moduleType: PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
    contentKey: PropTypes.string
};

export default MarkdownRenderer;
