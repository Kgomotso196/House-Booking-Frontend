import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import RegisterUser from '../components/RegisterUser/RegisterUser'; // Assuming the component is in this file
import authenticationServiceAPI from '../services/authenticationService';

const mockStore = configureStore([]);

jest.mock('../components/RegisterUser/RegisterUser.css', () => {});

// Mock the registerUser function
jest.mock('../services/authenticationService', () => {
    return {
      __esModule: true, // this property makes it work
      default: {
        registerUser: jest.fn(),
        signInUser: jest.fn(),
        checkLogInStatus: jest.fn(),
      },
    };
  });

describe('RegisterUser component', () => {
    beforeEach(() => {
        jest.resetModules();
    });

  it('renders the registration form and handles form submission', () => {
    const initialState = {
        authentication: {
          registrationData: null,
        },
      };
      const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MemoryRouter>
            <RegisterUser />
        </MemoryRouter>
      </Provider>
    );

    // Find form elements
    const nameInput = screen.getByLabelText('Enter Name');
    const emailInput = screen.getByLabelText('User Email');
    const passwordInput = screen.getByLabelText('Password');
    const confirmInput = screen.getByLabelText('Confirm');
    const submitButton = screen.getByText('Submit');

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmInput, { target: { value: 'password123' } });

    // Check if user input is reflected in the input fields
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(passwordInput.value).toBe('password123');
    expect(confirmInput.value).toBe('password123');

    // Mock the successful registration response
     const registrationResponse = { success: true, message: 'Registration successful' };
    authenticationServiceAPI.registerUser.mockResolvedValue(registrationResponse);

    // Submit the form
    fireEvent.click(submitButton);

    // You can assert the response message or other outcomes
    // Example: expect(screen.getByText('Thank You for registering. Proceed to log in')).toBeInTheDocument();
  });
});
