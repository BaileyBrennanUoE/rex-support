//following tutorial @ https://mitchgavan.com/react-quiz/

import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
    return (
        <div className="question section">
            <blockquote className="flow-text">
                {props.content}
            </blockquote>
        </div>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;
