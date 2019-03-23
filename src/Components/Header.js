
import React from 'react';
import { Text, View } from 'react-native';

const Header = (prop) => {
    const { textStyle, viewStyle } = styles;

    return (
    
        <View style={viewStyle}>
            <Text style={textStyle}>{prop.text}</Text>
        </View>
        
     
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#0000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

export default Header;
