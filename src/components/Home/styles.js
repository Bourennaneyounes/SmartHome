import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    containerArea : {
       //  backgroundColor : '#aaa',
         height : '100%',
         width : '100%',
         padding : 15,
         justifyContent : 'space-around',
         alignItems : 'center',
        // marginRight : 20
         // flex : 1 ,
         //flexDirection : 'column',
        //  alignItems : 'center',
          //justifyContent : 'space-between'
          
      },
    container : {
       backgroundColor : '#eee',
       borderRadius : 20,
       height : '100%',
       width : '100%',
       padding : 15,
       justifyContent : 'space-around',
       alignItems : 'center',
      // marginRight : 20
       // flex : 1 ,
       //flexDirection : 'column',
      //  alignItems : 'center',
        //justifyContent : 'space-between'
        
    },
    scrollView : {
        flex : 4,
        height : '100%',
        width : '100%',
    }
    ,
    nameArea : {
        padding : 8,
       //backgroundColor : 'yellow',
       // alignItems : 'center',
       justifyContent : 'center',
        flex : 0.1,
        height : '100%',
        width : '100%',
    },
    TemparatureAndHumidityArea:{
       // backgroundColor : 'orange',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around',
        flex : 0.2,
        marginBottom : 50,
        height : '100%',
        width : '100%',
    },
    LightAndAcArea : {
       // backgroundColor : 'green',
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row',
        flex : 1,
        height : '100%',
        width : '100%',
    },
    TemparatureAndFanArea:{
      //  backgroundColor : 'blue',
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row',
        flex : 1,
        height : '100%',
        width : '100%',
    },
    WifiAndElectricityArea:{
      //  backgroundColor : 'purple',
        alignItems : 'center',
        justifyContent : 'space-around',
        flexDirection : 'row',
        flex : 1,
        height : '100%',
        width : '100%',
    },
    itemContainer : {
        backgroundColor : '#ddd',
        margin : 20,
        height : 150,
        width : 150,
        borderRadius : 80,
        alignItems : 'center',
        justifyContent : 'center'
    }
}
);

export default Styles;
