
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(38, 38, 38, 1)',
    },

    pt1:{
        height:330,
    },

    headerModal:{
        flexDirection:"row",
        marginBottom:30

    },
    
    closemodal:{
        width:50,
        height:50,
        marginTop:80,
        marginLeft:40,

    },

    helpModal:{
        width:50,
        height:50,
        marginTop:80,
        marginLeft:180,
    },

    bellModal:{
        width:50,
        height:50,
        marginTop:80,
        marginLeft:5,

    },

    perfilUser:{
        backgroundColor:"#000",
        width:50,
        height:50,
        borderRadius:100,
        marginLeft:30,
        marginBottom:20

    },

    userInfoText:{
        marginLeft:100,
        marginTop: -80
    },

    userText:{
        color:"#ccc",
        fontSize:13,
        marginTop:5
    },

    nuCoin:{
        flexDirection:"row",
        height:60,
        width:320,
        backgroundColor:"rgb(49, 49, 49)",
        paddingTop:20,
        paddingLeft:30,
        borderRadius:15
    },

    pt2:{
    backgroundColor:"#000",
    height:"200%"
    },

    pt2Button:{
        flexDirection:"row",
        height:70,
        borderBottomWidth:2,
        borderBottomColor:"rgba(38, 38, 38, 1)",
        paddingTop:25,
        paddingLeft:30
    },

    pt2Exit:{
        flexDirection:"row",
        height:50,
        width:300,
        backgroundColor:"rgba(38, 38, 38, 1)",
        borderRadius:100,
        marginLeft:50,
        marginTop:20,
        paddingLeft:50,
        paddingTop:10
    }
});
