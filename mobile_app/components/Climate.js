import React, { useState } from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { LineChart, StackedBarChart, BarChart } from "react-native-chart-kit";
import Header from './Header';

const image = require('../assets/climate.jpg');

export default function Climate({navigation}) {

    const screenWidth = Dimensions.get("window").width;

    let min_temp = [16,15,14,12,10,7,6,8,10,13,15,16];
    let max_temp = [25,24,24,24,22,20,20,23,27,28,28,26];

    const temp_chart_config = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#bdc3c7",
        backgroundGradientTo: "#2c3e50",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => '#fff',

        style: {
            borderRadius: 0
        },
        propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: "#fff"
        }
    }

    const [temp, setTemp] = useState([min_temp, max_temp]);

    const [precip, setPrecip] = useState([160.627, 132.764, 89.562, 26.293, 7.216, 3.648, 2.242, 1.968, 5.277, 21.86, 76.3, 142.179])

    let preciptation = {
        labels: ['Jan', "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: precip
            }
        ]
    };

      const precip_chart_config = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: '#757519',
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const data = {
        labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        legend: ["Sunny", "Partly Cloudy", "Overcast"],
        data: [
          [2.3, 20, 8.7],
          [2.6, 18.8, 6.8],
          [3.9, 22.9, 4.1],
          [8.5, 19.9, 1.6],
          [11.9, 17.9, 1.3],
          [13, 15.6, 1.4],
          [20.6, 9.7, 0.7],
          [23.9, 5.9, 0.3],
          [19, 10.7, 1.3],
          [11.7, 14.8, 3.5],
          [4.2, 17.6, 9.2]
        ],
        barColors: ["#f3e905", "#d8d594", "#666666"]
      };

      const csp = {
        backgroundGradientFrom: "#667db6",
        backgroundGradientFromOpacity: '#757519',
        backgroundGradientTo: "#667db6",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={image} style={styles.backgroundImage}>
            <Header navigation={navigation} title='Climate'/>
            
            <View style={styles.temperatureView}>
                <Text style={styles.title}>Average Temperatures</Text>
                <LineChart
                    data={{
                        labels: ['Jan', "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                data: temp[0]
                            },
                            {
                                data: temp[1] 
                            }
                        ]
                    }}
                    width={screenWidth} 
                    height={320}
                    yAxisSuffix="°C"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={temp_chart_config}
                    bezier
                    style={styles.temp}
                    verticalLabelRotation={90}
                />
                <View style={styles.descView}>
                    <Text style={styles.descText}>Altitude and relief greatly affect both temperature and rainfall in Zimbabwe. The higher areas in the east and the highveld receive more rainfall and are cooler than the lower areas. Temperatures on the highveld vary from 12–13° C (54–55° F ) in winter to 24° C (75° F ) in summer. On the lowveld the temperatures are usually 6° C (11° F ) higher, and summer temperatures in the Zambezi and Limpopo valleys average between 32° and 38° C (90–100° F ).</Text>
                </View>
                
            </View>

            <View style={styles.tempView}>
            <Text style={styles.title}>Precipitation Amount (mm)</Text>
                <BarChart
                    style={styles.temp}
                    data={preciptation}
                    width={screenWidth}
                    height={320}
                    chartConfig={precip_chart_config}
                    verticalLabelRotation={90}
                />
                <View style={styles.descView}>
                    <Text style={styles.descText}>Rainfall decreases from east to west. The eastern mountains receive more than 100 cm (40 in) annually, while Harare has 81 cm (32 in) and Bulawayo 61 cm (24 in). The south and southwest receive little rainfall. Seasonal shortages of water are common. </Text>
                </View>
            </View>

            <View style={styles.tempView}>
                <Text style={styles.title}>Cloudy, sunny and precipitation days</Text>
                <StackedBarChart
                    style={styles.temp}
                    data={data}
                    width={screenWidth}
                    height={320}
                    chartConfig={csp}
                    showLegend={false}
                    // verticalLabelRotation={90}
                    // withVerticalLabels={false}
                    verticalLabelRotation={180}
                />
                <View style={styles.descView}>
                    <Text style={styles.descText}>Rainfall decreases from east to west. The eastern mountains receive more than 100 cm (40 in) annually, while Harare has 81 cm (32 in) and Bulawayo 61 cm (24 in). The south and southwest receive little rainfall. Seasonal shortages of water are common. </Text>
                </View>
            </View>

            {/* <View style={ styles.bottomBar }>
                <Text style={{fontSize: 10, marginTop: 5, alignItems: 'center', color: '#fff'}}>grace_hit_400</Text>
            </View> */}
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 15,
        color: '#fff'
    },
    temperatureView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 0
    },
    tempView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15
    },
    temp: {
        marginVertical: 8,
        borderRadius: 16,
        margin: 5
    },
    bottomBar: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BCD0C7'
    },
    descText: {
        lineHeight: 24,
        fontSize: 15,
        margin: 8,
        textAlign: 'justify'
    },
    descView: {
        backgroundColor: '#BCD0C7',
        borderRadius: 10,
        margin: 10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
});