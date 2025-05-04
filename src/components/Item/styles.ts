import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branco};
  position: relative;
  margin-bottom: 48px;
  text-decoration: none;
  color: ${cores.vermelho};

  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const SectionCard = styled.div`
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-color: ${cores.vermelho};
  padding: 8px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const SectionTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nota = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;

  span {
    margin-right: 8px;
  }

  img {
    display: block;
    height: 20px;
  }
`

export const Descricao = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
