import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


function App(){

  let nome = 'Renan Soares Ribas';
  let formacao = 'Técnico em Desenvolvimento de Sistemas;\nCursando Análise e Desenvolvimento de Sistemas.';
  let exp = 'Estagiário - dez/2021 - abr-2022; \nDesenvolvedor Júnior - abr/2022 -  Em Atividade';
  let projetos = '- Listed - Impulsionando seu projeto: \nSistema de Gerenciamento de Projetos com princípos de Scrum (TCC do Curso Técnico)';
  let linkedin = 'https://br.linkedin.com/in/renan-soares-ribas';
  let img = 'https://media.licdn.com/dms/image/C4D03AQGrgVmy_FJM0w/profile-displayphoto-shrink_200_200/0/1652723279770?e=1681948800&v=beta&t=Oy4nWqGSubojvI5DecuA6JH4xqnJESjjC5x6KZUTTKo';

  const style = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 20,
    },
    firstTitle: {
      fontSize: 19,
      fontWeight: 'bold'
    },
    datas: {
      fontSize: 15
    },
    titles: {
      fontSize: 19,
      fontWeight: 'bold',
      marginTop: 20
    },
    allDatas: {
      marginLeft: 25
    }
  })
  
  return(
    <View>
      <Image
        source={{ uri: img }}
        style={ style.image }
      />
      <View style={style.allDatas}>
      <Text style={style.firstTitle}>Dados Pessoais:</Text>
      <Text style={style.datas}>{nome}</Text>
      <Text style={style.titles}>Formação:</Text>
      <Text style={style.datas}>{formacao}</Text>
      <Text style={style.titles}>Experiência:</Text>
      <Text style={style.datas}>{exp}</Text>
      <Text style={style.titles}>Projetos:</Text>
      <Text style={style.datas}>{projetos}</Text>
      <Text style={style.titles}>Linkedin:</Text>
      <Text style={style.datas}>{linkedin}</Text>
      </View>
    </View>
  )

  
}


export default App;
