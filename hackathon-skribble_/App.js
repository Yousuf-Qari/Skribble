import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Journal from './Journal';
import Complete from './Complete';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} options = {{headerShown: false}} />
        <Stack.Screen name="Journal" component={Journal} options={{ title: '' }} />
        <Stack.Screen name="Complete" component={Complete} options={{ title: '' }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;