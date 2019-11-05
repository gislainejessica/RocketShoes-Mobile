import React, { Component } from 'react'
import {Text, TouchableOpacity, Image, View, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles'
import api from '../../services/api'
//import { formatPrice } from '../../util/format'
import * as CartActions from '../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: ["1","2","3","4","5"]
  }
  async componentDidMount(){
    const response = await api.get('products')
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: product.price
    }))

    this.setState({products: data})

  }
  handleAddProduct = id => {
    const { addToCartRequest } = this.props
    addToCartRequest(id)
  }
  renderProduct = ({ item }) => {
    const { amount } = this.props
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}
            </ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    )
  }
  render(){
    const { products } = this.state
    const { amount } =  this.props
    return (
      <Container>
        <View>
          <FlatList
            horizontal
            data={products}
            extraData={this.props}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          />
        </View>
      </Container>
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
