import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Quiz/Question';
import QuestionCount from '../Quiz/QuestionCount';
import AnswerOption from '../Quiz/AnswerOption';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return(
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    return (
        <div className="quiz section">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
            />
            <Question content={props.question} />
            <div className="containter row">
                <div className="col s12">
                    <ul className="answerOptions">
                        {props.answerOptions.map(renderAnswerOptions)}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

Quiz.propsTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
