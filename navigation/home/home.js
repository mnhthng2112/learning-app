import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font'
// import { LinearGradient } from 'expo-linear-gradient'
import Swiper from 'react-native-swiper'

const Home = () => {

    const [loaded] = useFonts({
        Poppins: require('../../assets/font/Poppins-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    const styles = StyleSheet.create({
        wrapper: {
            marginVertical: 16,
            marginHorizontal: 20,
        },
        slide: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
    })

    return (
        <React.Fragment>
            <View>
                <View style={{ paddingTop: 40, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#3D5CFF' }}>
                    <View>
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: '700', fontFamily: 'Poppins' }}>Hi, name</Text>
                        <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Poppins' }}>Let’s start learning</Text>
                    </View>
                    <Image source={require('../../assets/avatar.png')} />
                </View>
                <View>
                    <View style={{ backgroundColor: '#3D5CFF', height: 72 }}></View>
                    <View style={{ height: 52 }}></View>
                    <View style={{ padding: 20, position: 'absolute', width: '100%', height: '100%' }}>
                        <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#858597', fontSize: 14, fontFamily: 'Poppins' }}>Learned today</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#3D5CFF', fontFamily: 'Poppins' }}>My courses</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ color: '#858597', fontSize: 12, justifyContent: 'center', fontFamily: 'Poppins' }}><Text style={{ fontSize: 20, color: '#1F1F39', fontWeight: '700', fontFamily: 'Poppins' }}>46min</Text>/ 60min</Text>
                            <View style={{ backgroundColor: '#F4F3FD', height: 6, width: '100%', borderRadius: 6, marginTop: 10 }}>
                                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FFFFFF', '#FF5106']} style={{ width: '70%', height: '100%' }} /> */}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Swiper
                showsButtons={false}
                showsPagination={false}
                style={styles.wrapper}
            >
                <View style={styles.slide}>
                    <View style={{ backgroundColor: '#CEECFE', padding: 16, borderRadius: 12, height: 154, justifyContent: 'space-between' }}>
                        <Text style={{ color: '#1F1F39', fontSize: 16, fontWeight: '700', position: 'relative', zIndex: 1, fontFamily: 'Poppins' }}>What do you want to learn now</Text>
                        <TouchableOpacity style={{ backgroundColor: '#FF6905', padding: 8, borderRadius: 8, alignSelf: 'flex-start' }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: '700', color: 'white' }}>Get started</Text>
                        </TouchableOpacity>
                        <Image source={require('../../assets/homeSlide1.png')} style={{ position: 'absolute', right: 0, marginVertical: 16 }} />
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={{ backgroundColor: '#CEECFE', padding: 16, borderRadius: 12, height: 154, justifyContent: 'space-between' }}>
                        <Text style={{ color: '#1F1F39', fontSize: 16, fontWeight: '700', position: 'relative', zIndex: 1, fontFamily: 'Poppins' }}>What do you want to learn now</Text>
                        <TouchableOpacity style={{ backgroundColor: '#FF6905', padding: 8, borderRadius: 8, alignSelf: 'flex-start' }}>
                            <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: '700', color: 'white' }}>Get started</Text>
                        </TouchableOpacity>
                        <Image source={require('../../assets/homeSlide2.png')} style={{ position: 'absolute', right: 0, marginVertical: 16 }} />
                    </View>
                </View>
            </Swiper>
        </React.Fragment>
    );
};

export default Home;