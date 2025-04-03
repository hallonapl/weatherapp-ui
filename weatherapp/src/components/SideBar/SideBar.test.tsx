import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';

describe('SideBar Component', () => {
    it('renders the list of cities', () => {
        const mockSetLocation = jest.fn();

        render(<SideBar setLocation={mockSetLocation} />);

        // Check if the heading is rendered
        expect(screen.getByText('Cities')).not.toBeNull();

        // Check if all city buttons are rendered
        const cities = ['Rome', 'London', 'Paris', 'Berlin', 'Madrid'];
        cities.forEach((city) => {
            expect(screen.getByText(city)).not.toBeNull();
        });
    });

    it('calls setLocation with the correct city when a button is clicked', () => {
        const mockSetLocation = jest.fn();

        render(<SideBar setLocation={mockSetLocation} />);

        // Simulate clicking the "Rome" button
        const romeButton = screen.getByText('Rome');
        fireEvent.click(romeButton);

        // Check if setLocation was called with "Rome"
        expect(mockSetLocation).toHaveBeenCalledWith('Rome');

        // Simulate clicking the "Paris" button
        const parisButton = screen.getByText('Paris');
        fireEvent.click(parisButton);

        // Check if setLocation was called with "Paris"
        expect(mockSetLocation).toHaveBeenCalledWith('Paris');
    });
});