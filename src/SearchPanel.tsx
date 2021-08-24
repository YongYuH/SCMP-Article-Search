import styled from '@emotion/styled'
import React, { ChangeEventHandler } from 'react'
import { BsSearch } from 'react-icons/bs'

const GridWrapper = styled.div`
  margin: 16px 0;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const CustomizedInput = styled.input`
  border: 0;
  font-size: 24px;
  padding: 0;

  &:focus-visible {
    outline-style: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`
const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface SearchPanelProps {
  handleQueryChange: ChangeEventHandler<HTMLInputElement>
}

const SearchPanel = (props: SearchPanelProps) => {
  const { handleQueryChange } = props

  return (
    <GridWrapper>
      <CustomizedInput onChange={handleQueryChange} placeholder="Search SCMP" />
      <SearchIconWrapper>
        <BsSearch color="#4595ff" />
      </SearchIconWrapper>
    </GridWrapper>
  )
}

export type { SearchPanelProps }

export default SearchPanel
