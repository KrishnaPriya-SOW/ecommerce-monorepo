import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('applies default classes', () => {
    render(<Button>Test Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('text-primary-foreground')
  })

  it('applies variant classes', () => {
    render(<Button variant="destructive">Test Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-destructive')
  })
})