import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { useFonts } from 'expo-font'

const Course = () => {
    const [search, setSearch] = useState('')

    const [loaded] = useFonts({
        Poppins: require('../assets/font/Poppins-Regular.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', fontFamily: 'Poppins' }}>Course</Text>
                <Image source={require('../assets/avatar.png')} />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ marginBottom: 12, borderRadius: 12, borderColor: 'transparent', backgroundColor: '#F4F3FD', borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
                        <Image source={require('../assets/search.png')} />
                    </TouchableOpacity>
                    <TextInput
                        style={{ flex: 1, fontFamily: 'Poppins', padding: 12, fontSize: 14 }}
                        onChangeText={setSearch}
                        value={search}
                        placeholder='Find Course'
                        placeholderTextColor={'#B8B8D2'}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
                        <Image source={require('../assets/filter.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, gap: 16 }}>
                <View style={{ flex: 1, borderRadius: 12, backgroundColor: '#CEECFE', height: 78, position: 'relative' }}>
                    <Image source={require('../assets/language.png')} style={{ position: 'absolute', bottom: 0 }} />
                    <Text style={{ fontWeight: '500', alignSelf: 'flex-end', color: '#3D5CFF', fontFamily: 'Poppins', backgroundColor: '#F3FBFF', paddingHorizontal: 7, paddingVertical: 2, borderTopLeftRadius: 18, borderBottomLeftRadius: 18, position: 'absolute', bottom: 10 }}>Language</Text>
                </View>
                <View style={{ flex: 1, borderRadius: 12, backgroundColor: '#EFE0FF', height: 78 }}>
                    <Image source={require('../assets/painting.png')} style={{ position: 'absolute', bottom: 0 }} />
                    <Text style={{ fontWeight: '500', alignSelf: 'flex-end', color: '#9065BE', fontFamily: 'Poppins', backgroundColor: '#F8F2FF', paddingHorizontal: 7, paddingVertical: 3, borderTopLeftRadius: 18, borderBottomLeftRadius: 18, position: 'absolute', bottom: 10 }}>Painting</Text>
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ color: '#1F1F39', fontSize: 18, fontWeight: '500', fontFamily: 'Poppins' }}>Choice your course</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={''} style={{ marginLeft: 32 }}>
                    <Text style={{alignSelf: 'flex-start', fontSize: 14, paddingHorizontal: 30, paddingVertical: 6, borderRadius: 20, backgroundColor: '#3D5CFF', color: 'white' }} >All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={''} style={{ marginLeft: 32 }}>
                    <Text style={{alignSelf: 'flex-start', fontSize: 14, paddingHorizontal: 30, paddingVertical: 6, borderRadius: 20 }} >Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={''} style={{ marginLeft: 32 }}>
                    <Text style={{alignSelf: 'flex-start', fontSize: 14, paddingHorizontal: 30, paddingVertical: 6, borderRadius: 20 }} >New</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Course;