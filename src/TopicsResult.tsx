import styled from '@emotion/styled'
import React from 'react'

const GridWrapper = styled.div`
  margin: 16px 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const ResultWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
`
const Title = styled.div``
const TopicListWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  justify-self: flex-end;
`
const Topic = styled.div`
  color: #233866;
`
const Placeholder = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-size: 24px;
`

interface TopicsResultProps {
  topics: string[]
}

const TopicsResult = (props: TopicsResultProps) => {
  const { topics } = props

  return (
    <GridWrapper>
      {topics.length > 0 ? (
        <ResultWrapper>
          <Title>Search Results</Title>
          <TopicListWrapper>
            <span>Topics: </span>
            {topics.map((topic, index) => {
              const postfix = index === topics.length - 1 ? '' : ','
              return (
                <Topic key={`${index}-${topic}`}>{`${topic}${postfix}`}</Topic>
              )
            })}
          </TopicListWrapper>
        </ResultWrapper>
      ) : (
        <Placeholder>Topics</Placeholder>
      )}
    </GridWrapper>
  )
}

export default TopicsResult
