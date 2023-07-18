import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font'
import { auth, provider } from '../firebase.js'
import firebase from 'firebase/app';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate('Home')

        } catch (error) {
            navigation.navigate('ContinueWithPhone')
        }
    };

    function googleSignin() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }


    const [loaded] = useFonts({
        Poppins: require('../assets/font/Poppins-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <View style={{ padding: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 32, fontWeight: '700', fontFamily: 'Poppins' }}>Log In</Text>
                <Text style={{ color: 'transparent', fontFamily: 'Poppins' }}>Enter your details below & free sign up</Text>
            </View>
            <View style={{ borderTopStartRadius: 12, borderTopLeftRadius: 12, backgroundColor: '#fff', paddingTop: 33, paddingBottom: 25, paddingHorizontal: 24 }}>
                <Text style={{ color: '#858597', fontSize: 16, fontFamily: 'Poppins' }}>Your Email</Text>
                <TextInput
                    style={{ borderRadius: 12, borderColor: '#B8B8D2', borderWidth: 1, fontFamily: 'Poppins', padding: 12 }}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style={{ borderTopStartRadius: 12, borderTopLeftRadius: 12, backgroundColor: '#fff', paddingBottom: 33, paddingHorizontal: 24, height: '100%' }}>
                <Text style={{ color: '#858597', fontSize: 16, fontFamily: 'Poppins' }}>Password</Text>
                <View style={{ marginBottom: 12, borderRadius: 12, borderColor: '#B8B8D2', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        style={{ flex: 1, fontFamily: 'Poppins', padding: 12 }}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
                        <Image source={require('../assets/preview-close.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ContinueWithPhone')}>
                    <Text style={{ color: '#B8B8D2', marginBottom: 16, marginLeft: 'auto' }}>Forget password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#3D5CFF', borderRadius: 12 }} onPress={handleLogin} >
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontFamily: 'Poppins', paddingVertical: 12, fontWeight: '500' }}>Log In</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Text style={{}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ textDecorationLine: 'underline', color: '#3D5CFF', fontWeight: '700', marginLeft: 12 }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 23 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#858597' }} />
                    <View>
                        <Text style={{ textAlign: 'center', color: '#B8B8D2', paddingHorizontal: 22 }}>Or login with</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#858597' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={googleSignin}>
                        <Image source={require('../assets/google-icon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={''} style={{ marginLeft: 32 }}>
                        <Image source={require('../assets/facebook-icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;