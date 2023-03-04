import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      resultado: 0
    }
    this.pegaPrimeiroNumero = this.pegaPrimeiroNumero.bind(this)
    this.pegaSegundoNumero = this.pegaSegundoNumero.bind(this)
  }

  
  pegaPrimeiroNumero(num1){
    this.setState({
      numero1: num1
    })
  }

  pegaSegundoNumero(num2){
    this.setState({
      numero2: num2
    })
  }

  multiplicar(){
    this.setState({
      resultado: this.state.numero1 * this.state.numero2 
    })
  }

  render(){
    return(
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>
        <TextInput style={styles.numeros} placeholder="Digite o primeiro número" onChangeText={this.pegaPrimeiroNumero}/>
        <TextInput style={styles.numeros} placeholder="Digite o segundo número" onChangeText={this.pegaSegundoNumero}/>
        <Pressable style={styles.botao} onPress={() => this.multiplicar()}>Calcular</Pressable>
        <Text style={styles.resultado}>Resultado: {this.state.resultado}</Text>
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
  numeros: {
    fontSize: 15,
    marginBottom: 15,
    borderWidth: 2,
    width: 200,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 200,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    marginTop: 10,
    borderWidth: 2,
    backgroundColor: 'lightskyblue'
  },
  resultado: {
    marginTop: 10,
    width: 200,
    height: 30,
    fontSize: 20,
    textAlign: 'center'
  }
})

export default App;