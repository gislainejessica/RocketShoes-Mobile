import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import Header from './components/Header'

import Home from './pages/Home'
//import Cart from './pages/Cart'

const routes= createAppContainer(
      createStackNavigator({
      Home,
    }, {
      //initialRouteName: 'Home',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
    }
    )
    )

export default routes

//   Cart, import Cart from './pages/Cart'

