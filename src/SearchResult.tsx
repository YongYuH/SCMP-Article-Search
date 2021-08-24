import styled from '@emotion/styled'
import { format } from 'date-fns'
import React from 'react'

import { Data } from './App'

const Card = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-rows: max-content;
  grid-row-gap: 16px;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  }
`
const TextSection = styled.div`
  grid-row: 1;
  font-weight: bold;
`
const Title = styled.span`
  color: #6f6f6f;
`
const Content = styled.span``
const DateWrapper = styled.div`
  grid-row: 2;
  color: #c9c9c9;
  font-size: 12px;
  font-weight: bold;
`
const Image = styled.img`
  grid-row: 1 / 3;
`

interface SearchResultProps {
  dataList?: Data[]
}

const SearchResult = (props: SearchResultProps) => {
  const { dataList } = props

  return (
    <div>
      {dataList?.map((data) => {
        return (
          <Card key={data.id}>
            <TextSection>
              <Title>{data.topics[0]} | </Title>
              <Content>{data.text}</Content>
            </TextSection>
            <DateWrapper>
              {format(new Date(data.timeStamp), 'dd LLL yyyy - h:mmaa')}
            </DateWrapper>
            <Image src={`/assets/img/${data.id}.jpg`} />
          </Card>
        )
      })}
    </div>
  )
}

export default SearchResult
