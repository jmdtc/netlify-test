import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Card = styled.div`
    width: 33%;
    border-radius: 16px;
    padding: 0.5rem;
`

const TextContainer = styled.div`
    height: 220px;
    border-radius: 16px;
    padding: 0.75rem;
    background-color: #E4E4E4;
`
const TitleCard = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
`
const Date = styled.h4`
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1.25rem;
`
const Description = styled.h4`
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.7;
    margin-bottom: 0.25rem;
`

const WorkCard = ({ work }) => {
    const { title, date, description } = work
    return (
        <Card>
            <TextContainer>
                <TitleCard> {title} </TitleCard>
                <Date> {date} </Date>
                <Description> {description} </Description>
            </TextContainer>
        </Card>
    )
}

export default WorkCard