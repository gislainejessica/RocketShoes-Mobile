import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  max-height: 74px;
  background: #141419;
`;
export const Carrinho = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
`;
export const Contador = styled.Text`
  color: #fff;
`;
