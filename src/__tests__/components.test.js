import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AddHouse from '../components/Addhouse/AddHouse';

// Mock reducer to mimic your Redux slice
const mockHousesReducer = (state = { houses: [] }, action) => {
  // Define how your reducer should handle actions
  switch (action.type) {
    case 'houses/addHouse':
      return {
        ...state,
        houses: [...state.houses, action.payload],
      };
    // Add cases for other actions as needed
    default:
      return state;
  }
};

test('Should match the snapshot of AddHouse component', () => {
  const store = configureStore({
    reducer: {
      houses: mockHousesReducer,
    },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <AddHouse />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
