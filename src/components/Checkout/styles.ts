// styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const EntregaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;
  display: flex;
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${cores.bege};
    margin-bottom: 16px;
  }

  div {
    display: flex;
    column-gap: 10px; /* Altere para 30px se preferir no caso do pagamento */
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${cores.bege};
`

export const Input = styled.input`
  padding: 8px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  background-color: ${cores.bege};
  color: #4b4b4b;
  width: 100%;
`

export const InputCVV = styled.input`
  padding: 8px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  background-color: ${cores.bege};
  color: #4b4b4b;
  width: 87px;
`

export const InputNumCard = styled.input`
  padding: 8px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  background-color: ${cores.bege};
  color: #4b4b4b;
  width: 228px;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

export const Button = styled.button`
  padding: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  color: ${cores.vermelho};
  text-align: center;
  background-color: ${cores.bege};
`

export const ErrorText = styled.div`
  color: white;
  font-size: 0.8rem;
  margin-top: 4px;
`
