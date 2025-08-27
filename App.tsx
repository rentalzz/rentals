import {StatusBar, useColorScheme} from 'react-native';

import Navigation from '@navigation/index';
import {store} from '@store/store';
import {Provider} from 'react-redux';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </Provider>
  );
}

export default App;
