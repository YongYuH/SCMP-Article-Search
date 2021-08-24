import styled from '@emotion/styled'
import React from 'react'
import { BsList } from 'react-icons/bs'

import ScmpLogoIcon from './scmp_logo.svg'

const logoImageHeight = 30
const logoImageWidth = 30

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  grid-template-columns: max-content;
  padding: 8px;
  box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
`
const LogoWrapper = styled.div`
  height: ${logoImageHeight}px;
  width: ${logoImageWidth}px;
`
const Title = styled.div``
const ListIconWrapper = styled.div`
  justify-self: flex-end;
`

const Header = () => (
  <Wrapper>
    <LogoWrapper>
      <ScmpLogoIcon
        height={`${logoImageHeight}px`}
        width={`${logoImageWidth}px`}
      />
    </LogoWrapper>
    <Title>South China Morning Post</Title>
    <ListIconWrapper>
      <BsList />
    </ListIconWrapper>
  </Wrapper>
)

export default Header
