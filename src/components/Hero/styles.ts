import styled from 'styled-components'

import fundoHero from '../../assets/images/fundo.png'

export const Container = styled.div`
  background-image: url(${fundoHero});
  display: flex;
  align-items: center;
  flex-direction: column;
  backround-repeat: repeat;
  position: relative;
  height: 384px;
`
export const Logo = styled.div`
  position: absolute;
  top: 40px;
`

export const Titulo = styled.h1`
  position: absolute;
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  top: 236px;
`
