import React from "react";
import { View, Linking, Text, ScrollView, ImageBackground } from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";
import { registerCustomIconType } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
registerCustomIconType("font-awesome-5", FontAwesome5);

import styles from "./style";

const books = [
    {
        nome: "MyBooks"
    },
    
]

function Books({navigation}){

    function sair(){
        return navigation.navigate("Login");
    }

  return (
    <ScrollView>
      <ImageBackground style={styles.topo}>
        
        <Tile 
          imageSrc={require("../../../../assets/books1.jpg")}
          style={styles.title}
          title="Minha Lista de Livros"
          featured
          caption="Para ler - 2021"
        />

<View style={styles.baseLivros}>
        <Card>
          <Card.Title>DOM CASMURRO</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.img} source={require("../../../../assets/dom.jpg")}>
          </Card.Image>
          <Text style={styles.texto}>
              Machado de Assis
            </Text>
        </Card>
        <Button
        onPress={() => Linking.openURL('http://www.dominiopublico.gov.br/download/texto/ua000194.pdf')}
          icon={<Icon name="book" color="#FFB6C1" />}
          style={styles.Button}
          title="Ler"
        />
</View> 

<View style={styles.baseLivros}>      
       <Card>
          <Card.Title>LIVRO DO DESASSOSSEGO</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.img} source={require("../../../../assets/desassossego.jpg")}>
            </Card.Image>
            <Text style={styles.texto}>
              Fernando Pessoa
            </Text>
        </Card>
        <Button
        onPress={() => Linking.openURL('http://www.dominiopublico.gov.br/download/texto/pe000008.pdf')}
          icon={<Icon name="book" color="#FFB6C1" />}
          style={styles.Button}
          title="Ler"
        />
</View>

<View style={styles.baseLivros}>  
        <Card>
          <Card.Title>OS SERTÕES</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.img} source={require("../../../../assets/sertao.jpg")}>
          </Card.Image>
          <Text style={styles.texto}>
              Euclides da Cunha
            </Text>
        </Card>
        <Button
        onPress={() => Linking.openURL('http://www.dominiopublico.gov.br/download/texto/bv000091.pdf')}
          icon={<Icon name="book" color="#FFB6C1" />}
          style={styles.Button}
          title="Ler"
        />
</View>

<View style={styles.baseLivros}>  
        <Card>
          <Card.Title>PRIDE AND PREJUDICE</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.img} source={require("../../../../assets/pride.jpg")}>
          </Card.Image>
          <Text style={styles.texto}>
              Jane Austen
            </Text>
        </Card>
        <Button
        onPress={() => Linking.openURL('http://www.dominiopublico.gov.br/download/texto/pp000035.pdf')}
          icon={<Icon name="book" color="#FFB6C1" />}
          style={styles.Button}
          title="Ler"
        />
</View>

<View style={styles.baseLivros}>  
        <Card>
          <Card.Title>DOM QUIXOTE</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.img} source={require("../../../../assets/quixote.jpg")}>
          </Card.Image>
          <Text style={styles.texto}>
              Miguel de Cervantes
            </Text>
        </Card>
        <Button
          onPress={() => Linking.openURL('http://www.dominiopublico.gov.br/download/texto/eb00008a.pdf')}
          icon={<Icon name="book" color="#FFB6C1" />}
          style={styles.Button}
          title="Ler"  
        /> 
</View>

<Text style={{ textAlign: 'center', margin: 10}}>
                © copyright | Cassia 2021
            </Text>
    
      </ImageBackground>
    </ScrollView>
    
  );
}

export default Books;