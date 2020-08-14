import React from 'react';
import {Text, View} from 'react-native';

const Header = (props)=>{
    const{textStyle,viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}
const styles = {
    textStyle:{
        fontSize:30
    },
    viewStyle:{
        backgroundColor:'#ccdbe3',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        shadowOffset: { width:0, height:5 },
        shadowOpacity:0.5
    }
};
export default Header;
