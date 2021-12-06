



import React, { useState,useEffect } from 'react'
import { Text, View , Image, ScrollView } from 'react-native';
import Styles from './styles'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Slider from '@react-native-community/slider';
import VerticalSlider from 'rn-vertical-slider';
import BigSlider from 'react-native-big-slider'
import { useRecoilState, useRecoilValue } from 'recoil';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { direction, scale, speed, temperature } from '../../../atoms/Ac-Atoms';

const Ac = () => {

    const [directionValue,setDirectionValue] = useRecoilState(direction);
    const [speedValue,setSpeedValue] = useRecoilState(speed);
    const [temperatureValue,setTemperatureValue] = useRecoilState(temperature);
//     const [Scale,setScale] = useRecoilState(scale)
//     // const SX = 2;
//     // let SY=2;
//     useEffect(()=>{
//     //     SX = 2.2;
//     //     SY = 2.2;
//     //   console.log("hhhhh")
//         setScale({scaleX : 2.2,scaleY:2.2})
// },[])

const temperatureOnChange = (value) => {
    //directionValue = value
  setTemperatureValue(value)
}
    const DirectionOnChange = (value) => {
        //directionValue = value
      setDirectionValue(value)
    }
    const SpeedOnChange = (value) => {
        setSpeedValue(value)
    }
    //console.warn(directionValue) 
    return(
        <View style={Styles.containerArea}>
            <View style={Styles.container}>
            <View style={Styles.TemparatureAndHumidityArea}>
                <View style={{flexDirection :'column'}}>
                <IconMaterialCommunityIcons name="fan" size={50} color={"#ccc"} style={{marginTop : 10,}}/>
                <Text style={{marginLeft : 7, fontWeight :'300' , fontSize : 25 , color:"#ccc"}}>A/C</Text>
                <View style={{flexDirection :'row' ,alignItems : 'flex-end'}}>
                <Text style={{ fontWeight : '400' ,fontSize : 120  }}>27</Text>
                 <IconMaterialCommunityIcons name="temperature-celsius" size={40} color={"#000000"} />
                </View>
                <Text style={{ color:"#ccc", fontSize : 20}}>temperature</Text>
                </View>
                
                <View>
                
                <BigSlider
                    horizontal
                    maximumValue={35}
                    minimumValue={17}
                   // step={1}
                  // useNativeDriver={ true}
                    style={{ width: 100,height : 200 }}
                    label={temperatureValue.toFixed(0)}
                //     renderLabel={() => <Text style={{textAlign:'auto', padding: 20}}>
                //      {temperatureValue.toFixed(0)}
                //    </Text>}
                    value={temperatureValue}
                    onValueChange={temperatureOnChange}
                    trackStyle={{ backgroundColor: '#fc8c03' }}

                     />
                {/* <VerticalSlider
                            value={20}
                           // disabled={false}
                            min={0}
                            max={100}
                            onChange={temperatureOnChange}
                            onComplete={(value) => {
                                console.log("COMPLETE", value);
                            }}
                            width={50}
                            height={100}
                            step={1}
                            borderRadius={5}
                            minimumTrackTintColor={"#fc8c03"}
                            maximumTrackTintColor={"gray"}
                            showBallIndicator
                           // ballIndicatorColor={"gray"}
                            //ballIndicatorTextColor={"white"}
                            /> */}
                
                    
                </View>
            </View>
            <View style={Styles.DirectionSpeedArea}>
                <View style={Styles.Direction}>
                    <View style={{flexDirection : 'row', justifyContent : 'space-between' , width : 340}}>
                        <Text style={{ fontWeight : '500' , fontSize : 20}}>Direction</Text>
                        <Text style={{ fontWeight : '500' , fontSize : 20}}>{directionValue}</Text>
                    </View>
                    
                    <Slider
                    style={{  width: 340, height: 50  } }
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#fc8c03"
                    maximumTrackTintColor="#bbb"
                    thumbTintColor="white"
                    step={1}
                    // onSlidingComplete={(value)=> {initDirectionValue=value}}
                    value={directionValue}
                    onValueChange={ DirectionOnChange}
                />
                </View>
                <View style={Styles.Direction}>
                    
                <View style={{flexDirection : 'row', justifyContent : 'space-between' ,  width : 340}}>
                        <Text style={{fontWeight : '500' , fontSize : 20}}>Speed</Text>
                        <Text style={{ fontWeight : '500' , fontSize : 20 }}>{speedValue}</Text>
                    </View>
                    <Slider
                    style={{ width: 340, height: 50  }}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#fc8c03"
                    maximumTrackTintColor="#bbb"
                    thumbTintColor="white"
                    // thumbStyle={{
                    //     shadowOpacity: 20,
                    //     shadowOffset: {
                    //       width: 20,
                    //       height: 20,
                    //     },
                    // }}
                    step={1}
                    // onSlidingComplete={(value)=> {initDirectionValue=value}}
                    value={speedValue}
                    onValueChange={SpeedOnChange}
                    
                />
                </View>
            </View>
            
            </View>
       
        </View>
        
    )
}

export default Ac;