import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Header from './Header';

export default function Home({navigation}) {

    return (
        <View style={ styles.topRow }>
            <Header navigation={navigation} title='Grace HIT 400'/>
            <View style={styles.middleRow}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Weather')}
                >
                    <ImageBackground
                     style={styles.backgroundImage}
                     source={require('../assets/home/pic_2.jpg')}>
                         <Text style={styles.buttonText}>Weather</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Climate')}
                >
                    <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/home/pic_4.jpg')}>
                        <Text style={styles.buttonText}>Climate</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomRow}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('FarmingInfo')}
                >
                    <ImageBackground
                        style={styles.backgroundImage}
                        source={require('../assets/home/pic_1.jpg')}>
                        <Text style={styles.buttonText}>Farming Info</Text>
                    </ImageBackground>
                </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Crop')}
            > 
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/home/pic_3.jpg')}>
                        <Text style={styles.buttonText}>Crop Info</Text>
                </ImageBackground>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topRow: {
      flex: 1,
      backgroundColor: '#efefef'
    },
    middleRow: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center' 
    },
    bottomRow: {
        flex: 4,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
    buttonText: {
        fontSize: 25,
        color: '#efefef',
        backgroundColor: "#000000a0",
        borderRadius: 5,
    },
    backgroundImage: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});