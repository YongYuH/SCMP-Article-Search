import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import { flatten, uniq } from 'rambda'
import React, { useState } from 'react'
import useSWR from 'swr'
import { Fetcher } from 'swr/dist/types'
import { useDebounce } from 'use-debounce'

import Header from './Header'
import SearchPanel, { SearchPanelProps } from './SearchPanel'
import SearchResult from './SearchResult'
import TopicsResult from './TopicsResult'

const apiUrl = `http://localhost:3001`

const resetStyle = css`
  body {
    margin: 0;
  }
`

const MaxWidth = styled.div`
  max-width: 500px;
  margin: auto;
`

const Main = styled.div`
  margin: 0 16px;
`

interface Data {
  id: number
  text: string
  topics: string[]
  timeStamp: string
}

const fetcher: Fetcher<Data[]> = async (...args) => {
  const response = await fetch(args)
  const responseJson = response.json()
  return responseJson
}

const App = () => {
  const [query, setQuery] = useState<string>()
  const [debouncedQuery] = useDebounce(query, 1000)
  const { data: dataList } = useSWR(
    `${apiUrl}/search?q=${debouncedQuery}`,
    fetcher
  )

  const allTopicsCollections = dataList?.map((data) => data.topics) ?? []
  const topics = uniq(flatten<string>(allTopicsCollections))

  const handleQueryChange: SearchPanelProps['handleQueryChange'] = (e) => {
    const updatedQuery = e.target.value === '' ? undefined : e.target.value
    setQuery(updatedQuery)
  }

  return (
    <>
      <Global styles={resetStyle} />
      <Header />
      <Main>
        <MaxWidth>
          <SearchPanel handleQueryChange={handleQueryChange} />
          <TopicsResult topics={topics} />
          <SearchResult dataList={dataList} />
        </MaxWidth>
      </Main>
    </>
  )
}

export type { Data }

export default App
