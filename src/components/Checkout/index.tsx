import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  ButtonGroup,
  EntregaContainer,
  FormGroup,
  Input,
  InputCVV,
  InputNumCard,
  Label,
  Overlay,
  Sidebar,
  ErrorText
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import Confirmacao from '../Confirmacao'

const entregaSchema = Yup.object({
  quemRecebera: Yup.string()
    .min(3, 'Deve ter no mínimo 3 caracteres')
    .max(50, 'Deve ter no máximo 50 caracteres')
    .required('Informe quem irá receber'),
  endereco: Yup.string()
    .min(5, 'Deve ter no mínimo 5 caracteres')
    .max(100, 'Deve ter no máximo 100 caracteres')
    .required('Informe o endereço'),
  cidade: Yup.string()
    .min(3, 'Deve ter no mínimo 3 caracteres')
    .max(50, 'Deve ter no máximo 50 caracteres')
    .required('Informe a cidade'),
  cep: Yup.string()
    .matches(/^\d{5}-?\d{3}$/, 'CEP inválido')
    .required('Informe o CEP'),
  numero: Yup.string()
    .min(1, 'Informe pelo menos 1 caractere')
    .max(10, 'Deve ter no máximo 10 caracteres')
    .required('Informe o número'),
  complemento: Yup.string().max(50, 'Deve ter no máximo 50 caracteres')
})

const pagamentoSchema = Yup.object({
  nomeCartao: Yup.string()
    .min(3, 'Deve ter no mínimo 3 caracteres')
    .max(50, 'Deve ter no máximo 50 caracteres')
    .required('Informe o nome no cartão'),
  numeroCartao: Yup.string()
    .matches(/^\d{16}$/, 'Número do cartão inválido')
    .required('Informe o número do cartão'),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, 'CVV inválido')
    .required('Informe o CVV'),
  mesVencimento: Yup.number()
    .min(1, 'Mês inválido')
    .max(12, 'Mês inválido')
    .required('Informe o mês de vencimento'),
  anoVencimento: Yup.number()
    .min(new Date().getFullYear(), 'Ano inválido')
    .required('Informe o ano de vencimento')
})

const Checkout = () => {
  const dispatch = useDispatch()
  const isCheckoutOpen = useSelector(
    (state: RootReducer) => state.cart.isCheckoutOpen
  )
  const items = useSelector((state: RootReducer) => state.cart.items)
  const valorTotal = items.reduce((total, item) => total + item.preco, 0)

  const [etapa, setEtapa] = useState<'entrega' | 'pagamento' | 'finalizacao'>(
    'entrega'
  )
  const [orderId, setOrderId] = useState<string | null>(null)

  const gerarOrderId = () =>
    Math.floor(100000 + Math.random() * 900000).toString()

  const formatarPreco = (valor: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)

  const form = useFormik({
    initialValues: {
      quemRecebera: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: 1,
      anoVencimento: new Date().getFullYear()
    },
    validationSchema: etapa === 'entrega' ? entregaSchema : pagamentoSchema,
    onSubmit: (values) => {
      if (etapa === 'entrega') {
        setEtapa('pagamento')
      } else if (etapa === 'pagamento') {
        const novoOrderId = gerarOrderId()
        setOrderId(novoOrderId)
        setEtapa('finalizacao')
        console.log('Pedido finalizado:', {
          ...values,
          items,
          valorTotal,
          novoOrderId
        })
      }
    }
  })

  if (!isCheckoutOpen) return null

  return (
    <EntregaContainer>
      <Overlay />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          {etapa === 'finalizacao' && orderId ? (
            <Confirmacao orderData={{ orderId }} />
          ) : etapa === 'entrega' ? (
            <>
              <h2>Entrega</h2>
              <FormGroup>
                <Label htmlFor="quemRecebera">Quem irá receber</Label>
                <Input
                  id="quemRecebera"
                  name="quemRecebera"
                  type="text"
                  value={form.values.quemRecebera}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.touched.quemRecebera && form.errors.quemRecebera && (
                  <ErrorText>{form.errors.quemRecebera}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="endereco">Endereço</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  type="text"
                  value={form.values.endereco}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.touched.endereco && form.errors.endereco && (
                  <ErrorText>{form.errors.endereco}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="cidade">Cidade</Label>
                <Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={form.values.cidade}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.touched.cidade && form.errors.cidade && (
                  <ErrorText>{form.errors.cidade}</ErrorText>
                )}
              </FormGroup>
              <div>
                <FormGroup>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    name="cep"
                    type="text"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.touched.cep && form.errors.cep && (
                    <ErrorText>{form.errors.cep}</ErrorText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    id="numero"
                    name="numero"
                    type="text"
                    value={form.values.numero}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.touched.numero && form.errors.numero && (
                    <ErrorText>{form.errors.numero}</ErrorText>
                  )}
                </FormGroup>
              </div>
              <FormGroup>
                <Label htmlFor="complemento">Complemento (opcional)</Label>
                <Input
                  id="complemento"
                  name="complemento"
                  type="text"
                  value={form.values.complemento}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </FormGroup>
              <ButtonGroup>
                <Button type="submit">Continuar com o pagamento</Button>
                <Button type="button" onClick={() => dispatch(open())}>
                  Voltar para o carrinho
                </Button>
              </ButtonGroup>
            </>
          ) : (
            <>
              <h2>Pagamento - Valor a pagar {formatarPreco(valorTotal)}</h2>
              <FormGroup>
                <Label htmlFor="nomeCartao">Nome no cartão</Label>
                <Input
                  id="nomeCartao"
                  name="nomeCartao"
                  type="text"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.touched.nomeCartao && form.errors.nomeCartao && (
                  <ErrorText>{form.errors.nomeCartao}</ErrorText>
                )}
              </FormGroup>
              <div>
                <FormGroup>
                  <Label htmlFor="numeroCartao">Número do cartão</Label>
                  <InputNumCard
                    id="numeroCartao"
                    name="numeroCartao"
                    type="text"
                    inputMode="numeric"
                    value={form.values.numeroCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.touched.numeroCartao && form.errors.numeroCartao && (
                    <ErrorText>{form.errors.numeroCartao}</ErrorText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cvv">CVV</Label>
                  <InputCVV
                    id="cvv"
                    name="cvv"
                    type="text"
                    inputMode="numeric"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.touched.cvv && form.errors.cvv && (
                    <ErrorText>{form.errors.cvv}</ErrorText>
                  )}
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label htmlFor="mesVencimento">Mês de vencimento</Label>
                  <Input
                    id="mesVencimento"
                    name="mesVencimento"
                    type="number"
                    value={form.values.mesVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.touched.mesVencimento && form.errors.mesVencimento && (
                    <ErrorText>{form.errors.mesVencimento}</ErrorText>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="anoVencimento">Ano de vencimento</Label>
                  <Input
                    id="anoVencimento"
                    name="anoVencimento"
                    type="number"
                    value={form.values.anoVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {form.touched.anoVencimento && form.errors.anoVencimento && (
                    <ErrorText>{form.errors.anoVencimento}</ErrorText>
                  )}
                </FormGroup>
              </div>
              <ButtonGroup>
                <Button type="submit">Finalizar pagamento</Button>
                <Button type="button" onClick={() => setEtapa('entrega')}>
                  Voltar para a edição de endereço
                </Button>
              </ButtonGroup>
            </>
          )}
        </form>
      </Sidebar>
    </EntregaContainer>
  )
}

export default Checkout
