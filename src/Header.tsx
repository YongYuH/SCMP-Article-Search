import styled from '@emotion/styled'
import React from 'react'

import ScmpLogoIcon from './scmp_logo.svg'

const logoImageHeight = 40
const logoImageWidth = 40

const LogoWrapper = styled.div`
  height: ${logoImageHeight}px;
  width: ${logoImageWidth}px;
`

const Header = () => (
  <div>
    <LogoWrapper>
      <ScmpLogoIcon
        height={`${logoImageHeight}px`}
        width={`${logoImageWidth}px`}
      />
    </LogoWrapper>
  </div>
)

export default Header
