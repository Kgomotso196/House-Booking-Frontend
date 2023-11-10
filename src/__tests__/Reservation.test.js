/* eslint-env jest */
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Reservations from '../components/Reservations';

describe('Test House Component', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Reservations />
          </Router>
        </Provider>,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
