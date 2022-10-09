import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';
import UserStateContext from '../context/userStateContext';

const menuItems = [
    {
        title: 'My Saved Cars',
        navi: 'Collection',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.rgb_02,
        },
    },
    {
        title: 'My Messages',
        navi: 'Add Vehicle',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
    },
    {
        title: 'Add New',
        navi: 'Add Vehicle',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
    },
];

function AccountScreen({route, navigation}) {

    const {setState} = useContext(UserStateContext);
    const {userName, email, id} = route.params;
    // console.log(id + 'here account screen');

    useEffect(() => {
        setState(id);
    }, []);

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={userName}
                    subTitle={email}
                    userId={id}
                    navi={'Add Vehicle'}
                    IconComponent={
                        <Icon
                            name={'format-list-bulleted'}
                            backgroundColor={colors.rgb_01}
                        />
                    }
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => (
                        <ListItem
                            title={item.title}
                            userId={id}
                            navi={item.navi}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                userId={id}
                navi={'Home'}
                IconComponent={<Icon name="logout" backgroundColor={colors.primary}/>}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
