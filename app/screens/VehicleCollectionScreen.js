import {Alert, FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';
import VehicleServices from '../../services/VehicleServices';
import UserStateContext from '../context/userStateContext';
import {useContext, useEffect} from 'react';
import Card from '../components/Card';

function VehicleCollectionScreen({navigation}) {

    const {userState} = useContext(UserStateContext);
    const [allVehicles, setAllVehicles] = useState([]);


    useEffect(() => {
        const getAllVehiclesForUser = async () => {
            try {
                const res = await VehicleServices.getAll(userState);
                const resMessage = await res.json();
                if (res.status === 404) {
                    Alert.alert('NOT FOUND', resMessage);
                } else {
                    //with the 200 code, the api will return a json object that includes all the vehicles that belongs to user
                    setAllVehicles(resMessage);
                    console.log(resMessage);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getAllVehiclesForUser();
    }, []);


    return (
        <Screen style={styles.screen}>

            <View style={styles.vehicleContainer}>
                <FlatList style={styles.list}
                    data={allVehicles}
                    keyExtractor={(vehicle) => vehicle._id}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => (
                        <Card
                            title={item.manufacturer}
                            subTitle={item.registeredId}
                            image={require('../assets/honda-civic-front.png')}
                        />
                    )}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    list: {
        width: '90%'
    },
    vehicleContainer:{
        alignItems:'center'
    },
    container: {
        marginVertical: 20,
        backgroundColor: 'black',
    },
});

export default VehicleCollectionScreen;
