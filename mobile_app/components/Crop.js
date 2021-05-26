import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { ScrollView, RefreshControl, StyleSheet, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Header from './Header';
import {Card} from 'react-native-shadow-cards';

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
}

export default function Crop({navigation}){

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
            
        wait(2000).then(() => setRefreshing(false));
      }, []);

    const [cropInfo, setCropInfo] = useState({
        tableData: [
          ['Fertilizer', '-', '-', '-'],
          ['Labour', '-', '-', '-'],
          ['Pestcides', '-', '-', '-'],
          ['Irrigation', '-', '-', '-'],
          ['Dry Land - seed type', '-', '-', '-'],
          ['Irrigation -seed type', '-', '-', '-'],
          ['Price/hectare', '-', '-', '-']
        ]
      });

    useEffect(() => {
        // get_crop_info ()
        setCropInfo(cropInfo);
        console.log('Inside USE EFFECT');
    }, [cropInfo])

    const update_table_data = (data, column_id) => {
        console.log('update_table-data');
        console.log(data);
        if (data.length == 1) {
            let newCropInfo = data[0];

            var a_ = cropInfo;
            
            a_.tableData[0][column_id] = newCropInfo.crop_name;
            a_.tableData[1][column_id] = newCropInfo.labour;
            a_.tableData[2][column_id] = newCropInfo.pestcides;
            a_.tableData[3][column_id] = newCropInfo.irrigation;
            a_.tableData[4][column_id] = newCropInfo.seed_type_dry_land;
            a_.tableData[5][column_id] = newCropInfo.seed_type_irrigation;
            a_.tableData[6][column_id] = newCropInfo.price_per_hectare;

            // setCropInfo(cropInfo);
            setCropInfo(a_) ;
        }
        else {
            console.log('[-] Error')
            console.log(data);
        }
        
    };

    const get_crop_info = (itemValue, column_id) => {
        console.log('inside here');
        console.log(itemValue);
        fetch(`http://10.0.2.2:8000/api/crops/?crop_name=${itemValue}&district_name=Bindura`)
        .then(res => res.json())
        .then(data => {
            update_table_data(data, column_id);
        })
        .catch(err => console.log(err));
    };

    const [crop_one, setCropOne] = useState('Maize');
    const [crop_two, setCropTwo] = useState('Soya Beans');
    const [crop_three, setCropThree] = useState('Wheat');

    let pick = ['', <Picker selectedValue={crop_one} style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) => {
            setCropOne(itemValue);
            get_crop_info(itemValue, 1)
        }}>
            <Picker.Item label="Maize" value="Maize" />
            <Picker.Item label="Soya Beans" value="Soya Beans" />
            <Picker.Item label="Wheat" value="Wheat" />
        </Picker>,

        <Picker selectedValue={crop_two} style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) => {
            setCropTwo(itemValue);
            get_crop_info(itemValue, 2)
        }}>
            <Picker.Item label="Maize" value="Maize" />
            <Picker.Item label="Soya Beans" value="Soya Beans" />
            <Picker.Item label="Wheat" value="Wheat" />
        </Picker>,

        <Picker selectedValue={crop_three} style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) => {
            setCropThree(itemValue);
            get_crop_info(itemValue, 3)
            }}>
            <Picker.Item label="Maize" value="Maize" />
            <Picker.Item label="Soya Beans" value="Soya Beans" />
            <Picker.Item label="Wheat" value="Wheat" />
        </Picker> 
    ]

    return (
        <ScrollView style={styles.container}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          >
            <Header navigation={navigation} title='Crop'/>

            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={pick} style={styles.head} textStyle={styles.text}/>
                <Rows data={cropInfo.tableData} textStyle={styles.text}/>
                {/* <Rows data={test.tableData} textStyle={styles.text}/> */}
            </Table>

            {/* <Card style={{padding: 10, margin: 10}}>
                <Text style={{fontSize: 24}}>Pest Management</Text>
                <Text>Random Text</Text>
            </Card> */}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6
    },
    topBar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50'
    }
});