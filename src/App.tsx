import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ReactElement } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { HomeComponent } from './components/Home';
import { SecondScreenComponent } from './components/SecondScreen';
import { store } from './redux';

export type RootStackParamList = {
  Home: undefined;
  Second: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): ReactElement {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeComponent} options={
            {
              headerShown: true,
              headerTitle: 'Titulo personalizado',
            }
          } />
          <Stack.Screen name="Second" component={SecondScreenComponent}
          initialParams={{ id: 0 }}
          options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
