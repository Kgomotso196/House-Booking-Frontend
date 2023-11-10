/* eslint-env jest */
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import AddHouse from '../components/Addhouse/AddHouse';

describe('Test AddHouse Component', () => {
  test('it renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <AddHouse />
          </Router>
        </Provider>,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
