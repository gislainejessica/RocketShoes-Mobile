import React, { Component } from 'react'
import {Text, TouchableOpacity, Image, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { ProductList } from './styles'
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: []
  }

  async componentDidMount(){
    const response = await api.get('products')
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    this.setState({products: data})

  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props
    addToCartRequest(id)
  }

  render(){
    const { products } = this.state
    const { amount } =  this.props
    return (
      <View>
        {products.map(product => (
        <View>
          <Image source={product.image}/>
          <Text> {product.title} </Text>
          <Text> {product.priceFormatted} </Text>

          <TouchableOpacity onPress={()=>this.handleAddProduct(product.id)}>
            <View>
              <Icon name="local-grocery-store" size={16} color="#fff" /> {amount[product.id] || 0}
            </View>
            <Text> ADICIONAR AO CARRINHO </Text>
          </TouchableOpacity>

        </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
     amount[product.id] = product.amount
    return amount
  },{})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
