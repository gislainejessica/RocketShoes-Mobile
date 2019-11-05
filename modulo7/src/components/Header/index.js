import React from 'react';
import { Image, View, Text, TouchableOpacity , StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from '../../assets/images/Logo.png'

import { Container , Contador, Carrinho } from './styles'

function Header({ cartSize , navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <Image source={logo} style={{width: 185, height:24}} resizeMode="cover"/>
      </TouchableOpacity>
      <Carrinho onPress={()=>{navigation.navigate('Cart')}}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Contador> {cartSize} </Contador>
      </Carrinho>

    </Container>
  );
}
export default connect(state => ({cartSize: state.cart.length,}),)(Header)

/**
      <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
        <Cart>
          <View>
            <Text> Meu Carrinho </Text>
            <Text> {cartSize} itens </Text>
          </View>
          <Icon name="add" size={36} color='#fff' />
        </Cart>
      </TouchableOpacity> */
