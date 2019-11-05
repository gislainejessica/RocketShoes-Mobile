import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from './pages/Home'

const routes= createAppContainer(
      createStackNavigator({
      Home,
    }, {
      initialRouteName: 'Home',
    })
    )

export default routes

//   Cart, import Cart from './pages/Cart'

