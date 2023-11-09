/* eslint-env jest */
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import AddReservation from '../components/AddReservation';

describe('Test House Component', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <AddReservation />
          </Router>
        </Provider>,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
