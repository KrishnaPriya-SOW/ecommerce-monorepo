import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle } from './Card';
describe('Card', () => {
    it('renders correctly', () => {
        render(<Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
      </Card>);
        expect(screen.getByText('Test Card')).toBeInTheDocument();
    });
    it('applies default classes', () => {
        render(<Card data-testid="card"/>);
        expect(screen.getByTestId('card')).toHaveClass('rounded-lg');
        expect(screen.getByTestId('card')).toHaveClass('border');
    });
});
