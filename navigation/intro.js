import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { useFonts } from 'expo-font'

const styles = {
    wrapper: {},
    slide: {
        flex: 1,
    },
}

const Intro = ({ navigation }) => {

    const [loaded] = useFonts({
        Poppins: require('../assets/font/Poppins-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={false}
            loop={false}
            paginationStyle={{
                bottom: 250
            }}
            dot={
                <View
                    style={{
                        width: 9,
                        height: 5,
                        borderRadius: 7,
                        backgroundColor: '#EAEAFF',
                        marginLeft: 7,
                        marginRight: 7
                    }}
                />}
            activeDot={
                <View
                    style={{
                        width: 28,
                        height: 5,
                        borderRadius: 7,
                        backgroundColor: '#3D5CFF',
                        marginLeft: 7,
                        marginRight: 7
                    }}
                />
            }
        >
            <View style={styles.slide}>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 'auto' }}>
                        <Text style={{ color: '#858597', fontFamily: 'Poppins' }}>Skip</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Image style={{ backgroundColor: '#CDECFE', borderRadius: 60 }} source={require('../assets/slide1.png')} />
                        <Text style={{ fontSize: 22, fontWeight: '700', textAlign: 'center', marginTop: 38, fontFamily: 'Poppins' }}>Numerous free {'\n'} trial courses</Text>
                        <Text style={{ fontSize: 16, color: '#858597', textAlign: 'center', marginTop: 6, fontFamily: 'Poppins' }}>Free courses for you to {'\n'} find your way to learning</Text>
                    </View>
                </View>
            </View>
            <View style={styles.slide}>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 'auto' }}>
                        <Text style={{ color: '#858597', fontFamily: 'Poppins' }}>Skip</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Image style={{ backgroundColor: '#D9F4F1', borderRadius: 60 }} source={require('../assets/slide2.png')} />
                        <Text style={{ fontSize: 22, fontWeight: '700', textAlign: 'center', marginTop: 38, fontFamily: 'Poppins' }}>Quick and easy {'\n'} learning</Text>
                        <Text style={{ fontSize: 16, color: '#858597', textAlign: 'center', marginTop: 6, fontFamily: 'Poppins' }}>Easy and fast learning at {'\n'} any time to help you {'\n'} improve various skills</Text>
                    </View>
                </View>
            </View>
            <View style={styles.slide}>
                <View style={{ marginTop: 20, padding: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 'auto' }}>
                        <Text style={{ color: '#858597', fontFamily: 'Poppins' }}>Skip</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Image style={{ backgroundColor: '#D9F4F1', borderRadius: 60 }} source={require('../assets/slide3.png')} />
                        <Text style={{ fontSize: 22, fontWeight: '700', textAlign: 'center', marginTop: 38, fontFamily: 'Poppins' }}>Create your own {'\n'} study plan</Text>
                        <Text style={{ fontSize: 16, color: '#858597', textAlign: 'center', marginTop: 6, fontFamily: 'Poppins' }}>Study according to the {'\n'} study plan, make study {'\n'} more motivated</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 16, marginTop: 100 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ backgroundColor: '#3D5CFF', borderRadius: 16, flex: 1, padding: 10 }}>
                            <Text style={{ color: '#858597', fontFamily: 'Poppins', textAlign: 'center', color: '#F4F3FD', fontSize: 16 }}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#858597', borderRadius:16, flex: 1, padding: 10 }}>
                            <Text style={{ color: '#858597', fontFamily: 'Poppins', textAlign: 'center', color: '#F4F3FD', fontSize: 16 }}>Log in</Text>
                        </TouchableOpacity>
                    </View>                    
                </View>
            </View>
        </Swiper>
    );
};

export default Intro;