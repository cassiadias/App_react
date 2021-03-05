import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === 'web' ? '100vh' : '100%'
    },
    topo:{
        width: '100',
        height:'100',
        alignItems: 'center',
    },

    title:{
        width: 20,
         height: 20, 
        color: "#4B1C4D",
    },


    baseLivros:{
        width: 250,
        height: 400,
        borderRadius: 100,
        borderColor: '#fff',
    },

    img:{
        width: 120,
        height: 160,
        marginLeft: 35,
        marginRight: 30,
    },

    Button:{
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 20,
        marginBottom: 0,
        marginTop: 10,
        width: "75%",


    },
    texto: { 
        fontSize: 14,
        color:"#8B008B" ,
        fontStyle: 'bolder',
        marginTop: 5, 
        marginLeft: 40,
        marginRight: 20,
 }

})

export default styles;