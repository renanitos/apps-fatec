import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0
    };
  }
  
  somar(numeroEnviado){
    this.setState({
      numero: numeroEnviado+1
    })
  }

  subtrair(numeroEnviado) {
    if (numeroEnviado>0) {
      this.setState({
        numero: numeroEnviado-1
      })
    }
  }

  render(){
    return(
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        <Text style={styles.numero}>{this.state.numero}</Text>
        <Pressable style={[styles.botaoSoma, styles.botoes]} onPress={() => this.somar(this.state.numero)}>+</Pressable>
        <Pressable style={[styles.botoes, styles.botaoSubtrair]} onPress={() => this.subtrair(this.state.numero)}>-</Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 25,
    marginTop: 15,
    marginBottom: 10
  },
  conteudo: {
    alignItems: 'center'
  },
  numero: {
    fontSize: 70,
    marginBottom: 15,
    borderWidth: 2,
    width: 100,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  botaoSoma: {
    color: 'black',
    backgroundColor: 'green'
  },
  botaoSubtrair: {
    color: 'black',
    backgroundColor: 'red'
    
  },
  botoes: {
    width: 200,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    marginTop: 10,
    borderWidth: 2
  }
});



export default App;