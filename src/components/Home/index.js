import React from 'react'
import { Text, View , Image, ScrollView ,TouchableOpacity} from 'react-native';
import Styles from './styles'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconBolt from '../../assets/icons/bolt.png'
import IconClimatisation from '../../assets/icons/climatisation.png'
const Home = ({navigation}) => {
    return(
        <View style={Styles.containerArea}>
        <View style={Styles.container}>
            <View style={Styles.nameArea}>
                <Text style={{color : '#aaa'}}>Hello</Text>
                <Text style={{fontWeight : 'bold'}}>Younes Bourennane</Text>
            </View>
            <View style={Styles.TemparatureAndHumidityArea}>
                <View style={{flexDirection :'row' , alignItems : 'flex-end'}}>
                <Text style={{fontWeight : '400' , fontSize : 100 ,  height : 110}}>34</Text>
                 <IconMaterialCommunityIcons name="temperature-celsius" size={30} color={"#000000"} />
                    
                </View>
                <View>
                <Text>Humidity</Text>
                <View style={{flexDirection :'row' }}>
                <IconEntypo name="drop" size={40} color={"#fc8c03"} />
                <IconEntypo name="drop" size={40} color={"#fc8c03"} />
                <IconEntypo name="drop" size={40} color={"#fc8c03"} />
                </View>
                <View style={{flexDirection :'row' ,justifyContent :'space-around'}}>
                <IconEntypo name="drop" size={40} color={"#fc8c03"} />
                <IconEntypo name="drop" size={40} color={"#fc8c03"} />
                </View>
                
                    
                </View>
            </View>
            <ScrollView style={Styles.scrollView}>

            
            <View style={Styles.LightAndAcArea}>
                <View style={Styles.itemContainer}>
                <IconMaterialCommunityIcons name="lightbulb-on-outline" size={30} color={"#fc8c03"}/>

                    <Text>Light</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Ac')} style={Styles.itemContainer}>
                <Image source={IconClimatisation} resizeMode="contain"  style={{width : 30,height : 30,}}/>
                    <Text>AC</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.TemparatureAndFanArea}>
                <View style={Styles.itemContainer}>
                <IconFontAwesome5 name="temperature-high" size={30} color={"#fc8c03"}/>
                    <Text>temperature</Text>
                </View>
                <View style={Styles.itemContainer}>
                <IconMaterialCommunityIcons name="fan" size={30} color={"#fc8c03"}/>
                    <Text>FAN</Text>
                </View>
            </View>
            <View style={Styles.WifiAndElectricityArea}>
                <View style={Styles.itemContainer}>
                <IconMaterialCommunityIcons name="wifi" size={30} color={"#fc8c03"}/>
                    <Text>WIFI</Text>
                </View>
                <View style={Styles.itemContainer}>
                <Image source={IconBolt} resizeMode="contain"  style={{width : 30,height : 30,}}/>
                    <Text>Electricity</Text>
                </View>
            </View>
            </ScrollView>

        </View>
        </View>
        
    )
}

export default Home;