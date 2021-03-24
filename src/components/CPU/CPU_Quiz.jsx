import React, { Component } from 'react';
import quizQuestions from '../../api/cpuQuizQuestions';
import Quiz from '../Quiz/Quiz';
import Result from '../Quiz/Result';

class CPU_Quiz extends Component {
    
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      correctAnswers: 0,
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const SHUFFLED_ANSWER_OPTIONS = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: SHUFFLED_ANSWER_OPTIONS[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, tempVal, randomIndex;

    //While there remain elements to shuffle
    while (0 !== currentIndex) {

      //Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      //swap it with the current element
      tempVal = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }

    return array;
  }
  
  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
    if(answer === 'Correct') {
      const CORRECT_ANSWERS = this.state.correctAnswers + 1;
      this.setState({ correctAnswers: CORRECT_ANSWERS }); 
    }
  }

  setNextQuestion() {
    const COUNTER = this.state.counter +1;
    const QUESTION_ID = this.state.questionId + 1;
    this.setState({
      counter: COUNTER,
      questionId: QUESTION_ID,
      question: quizQuestions[COUNTER].question,
      answerOptions: quizQuestions[COUNTER].answers,
      answer: ''
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  getResults() {
    return 'finished';
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undertermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz 
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result 
        correctAnswers={this.state.correctAnswers}
        questionTotal={quizQuestions.length}
      />
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default CPU_Quiz;