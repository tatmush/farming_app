import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({navigation, title}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={styles.hamburgerView}>
                <Ionicons name="md-menu" size={32} color="green" onPress={() => {navigation.openDrawer()}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BCD0C7',
        flexDirection: 'row',
    },
    headerView: {
        flex: 9,
        alignItems: 'center',
        marginBottom: 10
    },
    headerText: {
        fontSize: 25,
        marginTop: 30,
    },
    hamburgerView: {
        flex: 1,
        marginTop: 25,
        justifyContent: 'center',
    },
});