import styled from 'styled-components'
import { cores } from '../../styles'
import iconLixeira from '../../assets//icons//lixeira-de-reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${cores.bege};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }
  span {
    display: block;
    font-weight: 400;
    font-size: 14px;
  }
`
export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 32px;

  p {
    color: ${cores.bege};
    font-weight: 700;
    font-size: 14px;
  }
`
export const Botao = styled.button`
  background-image: url(${iconLixeira});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 8px;
  right: 8px;
`
