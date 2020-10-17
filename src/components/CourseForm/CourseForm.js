import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useHistory } from 'react-router-dom';

import Alert from '@material-ui/lab/Alert';
import { Grid, Button, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';

import QUESTIONS from '../../data/questions/questions.data';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import api from '../../services/api';

import './CourseForm.scss';

function CourseForm(props) {
  const { moduleId } = props;
  const [questions, setQuestions] = useState(QUESTIONS);
  const [questionsModule, setQuestionsModule] = useState(
    () => {
      if (moduleId === 8) {
        let exam = [];
        let question = [];
        questions.modules.map( (question) => {
          question.questions.map( option => exam.push(option));
        });
        exam = exam.sort(() => Math.random() - 0.5);
        exam.questions = exam.slice(0, 10);

        // hack to change the id because to find
        // the answer we have to pass the question id
        exam.questions.map( (option, index) => {
          question.push({
            answer: option.answer,
            id: index + 1,
            name: option.name,
            options: option.options,
            question: option.question
          });
        });
        exam.questions = question;
        
        return exam;
      }

      return questions.modules.find(module => module.id === moduleId);
    }
  );
  const [question1, setQuestion1] = useState('1');
  const [question2, setQuestion2] = useState('1');
  const [question3, setQuestion3] = useState('1');
  const [question4, setQuestion4] = useState('1');
  const [question5, setQuestion5] = useState('1');
  const [question6, setQuestion6] = useState('1');
  const [question7, setQuestion7] = useState('1');
  const [question8, setQuestion8] = useState('1');
  const [question9, setQuestion9] = useState('1');
  const [question10, setQuestion10] = useState('1');
  const [score, setScore] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [tried, setTried] = useState(false);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    setDisabled(true);
    setTried(true);

    let score = 0;
    score += question1 === findAnswer(1) ? 1 : 0;
    score += question2 === findAnswer(2) ? 1 : 0;
    score += question3 === findAnswer(3) ? 1 : 0;
    score += question4 === findAnswer(4) ? 1 : 0;

    if ( moduleId === 8) {
      score += question5 === findAnswer(5) ? 1 : 0;
      score += question6 === findAnswer(6) ? 1 : 0;
      score += question7 === findAnswer(7) ? 1 : 0;
      score += question8 === findAnswer(8) ? 1 : 0;
      score += question9 === findAnswer(9) ? 1 : 0;
      score += question10 === findAnswer(10) ? 1 : 0;

      score = Math.ceil( score * 100 / 10);
    } else {
      score = Math.ceil( score * 100 / 4);
    }
    setScore(score);

    if ( score > 70 || score === 70 ) {
      upgradeLevel();
      setIsApproved(true);
    } else {
      setIsApproved(false);
      resetQuestions();
    }
  }

  const upgradeLevel = async () => {
    const { currentUser } = props;

    let level = currentUser.level + 1;
    if ( level > 8 ) {
      level = 0;
    }

    await api.put(`/user-courses`, { 
      user_id: currentUser.id,
      course_id: '5f83853c539a937ed63fbf2c',
      level
    }).then(async response => {
      
      if ( level === 0 ) { 
        const data = {
          name: currentUser.name,
          email: currentUser.email
        };

        await api.post('/send-certificate', data)
            .then( res => {
              history.push('/dashboard');
        });
      } else {
        window.location.reload(); 
      }
    });
  }

  const resetQuestions = () => {
    setQuestion1('1');
    setQuestion2('1');
    setQuestion3('1');
    setQuestion4('1');
    setQuestion5('1');
    setQuestion6('1');
    setQuestion7('1');
    setQuestion8('1');
    setQuestion9('1');
    setQuestion10('1');
    setDisabled(false);
  }

  const findAnswer = (option) => {
     const answer = questionsModule.questions.find(question => question.id === option);
     return answer.answer;
  }

  const handleChange = (value, id) => {
    setTried(false);

    switch (id) {
      case 1:
        setQuestion1(value);
        break;
      case 2:
        setQuestion2(value);
        break;
      case 3:
        setQuestion3(value);
        break;
      case 4:
        setQuestion4(value);
        break;
      case 5:
        setQuestion5(value);
        break;
      case 6:
        setQuestion6(value);
        break;
      case 7:
        setQuestion7(value);
        break;
      case 8:
        setQuestion8(value);
        break;
      case 9:
        setQuestion9(value);
        break;
      case 10:
        setQuestion10(value);
        break;
      default:
        break;
    }
  };

  const handleValue = id => {
    switch (id) {
      case 1:
        return question1;
        break;
      case 2:
        return question2;
        break;
      case 3:
        return question3;
        break;
      case 4:
        return question4;
        break;
      case 5:
        return question5;
        break;
      case 6:
        return question6;
        break;
      case 7:
        return question7;
        break;
      case 8:
        return question8;
        break;
      case 9:
        return question9;
        break;
      case 10:
        return question10;
        break;
      default:
        break;
    }
  };

  return (
    <div className="form-course-content"> 
      <form
        onSubmit={handleSubmit}
        className="form-container"
        noValidate 
        autoComplete="off"
      >
        <Grid container spacing={4}>
          
          <Grid item xs={12} sm={12}>
            <Grid item xs={12}>
              <h1>{moduleId === 8 ? 'Prova' : `Revisão Módulo ${moduleId}`}</h1>
            </Grid>
            {
              questionsModule ? 
                questionsModule?.questions.map( question => (
                  <Grid
                    className="form-question"
                    key={question.id} 
                    item xs={12}
                  >
                    <FormLabel
                      component="legend">
                      { question?.question }
                    </FormLabel>
                    <RadioGroup
                      name={question?.name}
                      value={handleValue(question.id)}
                      onChange={e => {
                        const value  = e.target.value;
                        handleChange(value, question.id);
                      }}
                    >
                      {
                        question?.options.map( (option, index) => (
                          <FormControlLabel
                            key={ index } 
                            className="form-question-input"
                            value={ option.value }
                            control={<Radio />} 
                            label={ option.text }
                            disabled={disabled}
                          />
                        ))
                      }
                    </RadioGroup>
                  </Grid>
                )) 
              : ''
            }
          </Grid>
          {
            !isApproved && tried ? (
              <Grid item xs={12}>
                <Alert severity="error">Desculpe, tente novamente! Pontuação: { score }%</Alert>
              </Grid>
            ) : ''
          }
          {
            isApproved && tried ? (
              <Grid item xs={12}>
                <Alert severity="success">Parabéns, continue seus estudos! Pontuação: { score }%</Alert>
              </Grid>
            ) : ''
          }
          <Grid item xs={12}>
            <Button 
              className="btn-save float-r"
              type="submit"
              disabled={disabled}
            >
              Validar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, null)(CourseForm);