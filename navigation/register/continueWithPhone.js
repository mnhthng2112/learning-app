import React from 'react';
import { useFonts } from 'expo-font'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const ContinueWithPhone = () => {

    const [loaded] = useFonts({
        Poppins: require('../../assets/font/Poppins-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <React.Fragment>
            <View>
                <Image source={require('../../assets/arrow-left.png')}/>
                <Text></Text>
            </View>
        </React.Fragment>
    );
};

export default ContinueWithPhone;