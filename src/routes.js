import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import List from './pages/List';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    List
  })
);

export default Routes;