import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font'
import Checkbox from 'expo-checkbox'
import { auth } from '../../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isChecked, setChecked] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault()
        if (isChecked === true) {
            await createUserWithEmailAndPassword(auth, email, password)
            navigation.navigate('Login')
        } else {
            navigation.navigate('ContinueWithPhone')
        }
    };

    const [loaded] = useFonts({
        Poppins: require('../../assets/font/Poppins-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <React.Fragment>
            <View>
                <View style={{ padding: 20, marginTop: 20 }}>
                    <Text style={{ fontSize: 32, fontWeight: '700', fontFamily: 'Poppins' }}>Sign Up</Text>
                    <Text style={{ color: '#B8B8D2', fontFamily: 'Poppins' }}>Enter your details below & free sign up</Text>
                </View>
                <View style={{ borderTopStartRadius: 12, borderTopLeftRadius: 12, backgroundColor: '#fff', paddingBottom: 25, paddingTop: 33, paddingHorizontal: 24 }}>
                    <Text style={{ color: '#858597', fontSize: 16, fontFamily: 'Poppins' }}>Your Email</Text>
                    <TextInput
                        style={{ borderRadius: 12, borderColor: '#B8B8D2', borderWidth: 1, fontFamily: 'Poppins', padding: 12 }}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
                <View style={{ borderTopStartRadius: 12, borderTopLeftRadius: 12, backgroundColor: '#fff', paddingBottom: 33, paddingHorizontal: 24, height: '100%' }}>
                    <Text style={{ color: '#858597', fontSize: 16, fontFamily: 'Poppins' }}>Password</Text>
                    <View style={{ marginBottom: 24, borderRadius: 12, borderColor: '#B8B8D2', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            style={{ flex: 1, fontFamily: 'Poppins', padding: 12 }}
                            onChangeText={setPassword}
                            value={password}
                        />
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
                            <Image source={require('../../assets/preview-close.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#3D5CFF', borderRadius: 12 }} onPress={handleRegister}>
                        <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontFamily: 'Poppins', paddingVertical: 12, fontWeight: '500' }}>Create account</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 17 }}>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={{ color: '#B8B8D2', marginLeft: 7 }}>By creating an account you have to agree with our them & condication.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                        <Text style={{}}>Already have an account</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ textDecorationLine: 'underline', color: '#3D5CFF', fontWeight: '700', marginLeft: 12 }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
};

export default Signup;