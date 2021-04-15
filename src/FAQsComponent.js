import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {db} from './firebase'

function FAQsComponent() {

    const [questions, setQuestions] = useState([]);

    const getQuestions = () => {
        db.collection('FAQs').onSnapshot((snapshot) => {
            let tempQuestions = [];
            tempQuestions = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    question: doc.data()
                }
            ));
            setQuestions(tempQuestions);
        })
    }

    useEffect(() => {
        getQuestions();
        console.log(questions);
    }, [])

    return (
        <Container>
            {
                questions.map((data) =>(
                    <Question>
                        <Title>{data.question.title}</Title>
                        <MainText>{data.question.text}</MainText>
                    </Question>
                ))
            }
        </Container>
    )
}

export default FAQsComponent

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
`

const Question = styled.div`
    width: 420px;
    text-align: center;
    margin: 10px 15px;
`

const Title = styled.h2``

const MainText = styled.span``