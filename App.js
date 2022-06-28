import React from "react";
import { StyleSheet, Image, View, Text, Alert, TouchableOpacity } from "react-native";
import foto from './assets/foto.jpeg';
import  Ionicons from '@expo/vector-icons/Ionicons';
import Card from './components/Card/index';


const App = () => {
  function handleRedeSocial(rede_social){

    switch(rede_social){
      case 'linkedin': Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/s%C3%A9rgio-abreu-1a6b1884/');
      break

      case 'github': Alert.alert('Meu Github', 'https://github.com/S3R6104BR3U');
      break

      case 'facebook': Alert.alert('Meu Facebook', 'https://www.facebook.com/sergio.abreu.503');
      break

    }
  }




  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source = {foto} style={style.foto}/>
            <Text style={style.nome}>SÉRGIO A. SOUSA</Text>
            <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
              <Ionicons name= 'logo-github' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedeSocial('facebook')}>
              <Ionicons name= 'logo-facebook' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
              <Ionicons name= 'logo-linkedin' size={30}/>
            </TouchableOpacity>
          </View>
          <Card titulo='Formação Acadêmica'>
            <Text style={style.card_content_text}>Tecnologo em Gestão de TI - UNIASSELVI</Text>
          </Card>
          <Card titulo='Bootcamps'>
            <Text style={style.card_content_text}>Decola Tech 3° Edição - Avanade - 61 horas</Text>
          </Card>
        </View>
      </View>
    </>
  );
}

export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  funcao: {
    color: '#939393',
    marginBottom: 10
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  }

});




