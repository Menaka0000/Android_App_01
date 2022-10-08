import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import UserServices from '../../services/UserServices';

export default function SignUpScreen() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const userLogin = async () => {
        try {
            let user = {
                userName: userName,
                password: password,
                email: email
            };
            const res = await UserServices.postUser(user);
            const resMessage = await res.json();
            if(res.status===400)Alert.alert('WARNING',resMessage);
            else if(res.status===404)Alert.alert("NOT FOUND",resMessage);
            else {
                Alert.alert('',resMessage);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <AppTextInput
                    placeholder={'User Name'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        setUserName(text);
                    }}
                />
                <AppTextInput
                    placeholder={'Email address'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        setEmail(text);
                    }}
                />
                <AppTextInput
                    placeholder={'Password'}
                    autoCapitalize={'none'}
                    onChangeText={text => {
                        setPassword(text);
                    }}
                />
                <AppButton title="Sign Up" onPress={userLogin}/>
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
        top: 100,
    },
});
