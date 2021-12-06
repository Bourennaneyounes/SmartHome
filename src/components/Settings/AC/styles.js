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
     TemparatureAndHumidityArea:{
         //backgroundColor : 'orange',
         flexDirection : 'row',
         alignItems : 'center',
         justifyContent : 'space-around',
         flex : 3.5,
         marginBottom : 50,
         height : '100%',
         width : '100%',
     },
     DirectionSpeedArea:{
         //backgroundColor : 'red',
         //flexDirection : 'row',
         alignItems : 'flex-start',
         //justifyContent : 'space-around',
         flex : 4,
         marginBottom : 50,
         height : '100%',
         width : '100%',
     },
     Direction : {
         marginBottom : 25
     }
}
);

export default Styles;
