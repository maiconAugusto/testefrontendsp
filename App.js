import React from 'react';
import {StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';
import GeneralStatusBarColor from './src/components/StatusBarApple/GeneralStatusBarColor';
import {Provider} from 'react-redux';
import store from './src/store/index';
import Routes from './src/routes/index';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
        {Platform.OS === 'ios' ? (
          <GeneralStatusBarColor barStyle="light-content" />
        ) : (
          <StatusBar backgroundColor="#FF8686" />
        )}
      </Provider>
    </>
  );
};

export default App;
