import React, { PureComponent } from "react";
import {TextInput, StyleSheet, View, Dimensions, Image} from 'react-native';
const { height, width } = Dimensions.get("window");

class ProfileIcon extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.profileIcon} source={require("../../assets/Home/Header/icon-profile2.png")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileIcon : {
        marginRight:35,
        width: 23,
        height: 23,
        marginTop: 15
    }
});

export default ProfileIcon;
