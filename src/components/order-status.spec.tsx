import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="pending" />)

    const statusText = getByText('Pendente')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="canceled" />)

    const statusText = getByText('Cancelado')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivering', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivering" />,
    )

    const statusText = getByText('Em entrega')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is processing', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="processing" />,
    )

    const statusText = getByText('Em preparo')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivered', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivered" />,
    )

    const statusText = getByText('Entregue')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
