import React, {useContext, useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import UserStateContext from '../context/userStateContext';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import VehicleServices from '../../services/VehicleServices';
import AppText from '../components/AppText';

export default function VehicleFormScreen({navigation}) {

    const {userState} = useContext(UserStateContext);
    const [registeredId, serRegisteredId] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [description, setDescription] = useState('');
    const [imgURI, serImageURI] = useState(null);
    const [price, setPrice] = useState('');

    const saveVehicle = async () => {
        try {
            let vehicle = {
                registeredId: registeredId,
                userId: userState,
                manufacturer: manufacturer,
                description: description,
                price: price,
            };
            console.log(vehicle);
            const res = await VehicleServices.save(vehicle);
            const resMessage = await res.json();
            if (res.status === 400) {
                Alert.alert('WARNING', resMessage);
            } else if (res.status === 404) {
                Alert.alert('NOT FOUND', resMessage);
            } else {
                Alert.alert('', resMessage);
            }
        } catch (err) {
            console.log(err);
        }
    };

    async function selectImage() {
        let options = {
            title: 'You can choose one image',
            maxWidth: 256,
            maxHeight: 256,
            noData: true,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
            },
        };

        await launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //console.log(response);
                let source = {uri: response.assets[0].uri};
                console.log(source.uri);
                serImageURI(source.uri);
            }
        });
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.imgPicker}>
                <View style={styles.imgContainer}>
                    {!imgURI && <AppText style={{fontSize: 13}}>Selected Image will be displayed here</AppText>}
                    {imgURI !== null &&
                    <Image
                        source={{ uri: imgURI }}
                        style={{ width: "%", height: "%",}}
                        resizeMode='contain'
                    />
                    }
                </View>
                <View style={styles.buttContainer}>
                    <AppButton title="select" width={100} height={30} fontSize={12} onPress={selectImage}/>
                </View>
            </View>
            <View style={styles.textContainer}>
                <AppTextInput
                    placeholder={'registered Id'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        serRegisteredId(text);
                    }}
                />
                <AppTextInput
                    placeholder={'Manufacturer'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        setManufacturer(text);
                    }}
                />
                <AppTextInput
                    placeholder={'Description'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        setDescription(text);
                    }}
                />
                <AppTextInput
                    placeholder={'Price'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        setPrice(text);
                    }}
                />
                <AppButton title="save" fontSize={18} height={50} onPress={saveVehicle}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(88, 95, 106,.1)',
        alignItems: 'center',
    },
    textContainer: {
        width: '90%',
        top: 10,
    },
    imgPicker: {
        height: 300,
        width: '100%',
        backgroundColor: 'rgba(117, 117, 117,.3)',
        alignItems: 'center',
        top: 0,
    },
    imgContainer: {
        height: 250,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttContainer: {
        height: 50,
        width: '90%',
    },
});
