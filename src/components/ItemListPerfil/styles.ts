import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelho};
  padding: 32px;

  header {
    position: absolute;
    top: 16px;
    right: 16px;
    img {
      width: 16px;
      height: 16px;
    }
  }

  div {
    display: flex;
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
      margin-right: 24px;
    }

    div {
      display: block;
      color: ${cores.branco};
      h2 {
        font-size: 18px;
        weight: 900;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin-top: 16px;
      }
      a {
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        margin-top: 16px;
        text-decoration: none;
        background-color: ${cores.bege};
        padding: 4px 6px;
        color: ${cores.vermelho};
        display: inline-block;
      }
    }
  }
`
