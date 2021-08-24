import { css, Global } from '@emotion/react'
import React from 'react'

import Header from './Header'
import SearchPanel from './SearchPanel'

const resetStyle = css`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <>
      <Global styles={resetStyle} />
      <Header />
      <SearchPanel />
    </>
  )
}

export default App
