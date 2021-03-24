import React from 'react';
import PropTypes from 'prop-types';

function Result(prop) {
    return (
        <div className="result section">
                <blockquote className="flow-text">
                    You got {prop.correctAnswers} out of {prop.questionTotal} correct <br/>
                    {prop.correctAnswers===prop.questionTotal  ? (
                        <p>Well done you got full marks!</p>
                    ) : (
                        <p>Perhaps watch the video again or maybe look at the revision sheet!</p>
                    )}
                </blockquote>
        </div>
    );
}

Result.propTypes = {
    questionTotal: PropTypes.number.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    isFinished: PropTypes.number.isRequired
};

export default Result;
