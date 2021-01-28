import React, { PureComponent } from "react";
import {StyleSheet, View, Dimensions, Image} from 'react-native';
const { height, width } = Dimensions.get("window");

class CenterIcon extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.centerIcon} source={require("../../assets/Home/Header/Logo2.png")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerIcon: {
        marginTop: 10,
        marginLeft:25,
        width: 85,
        height: 55,
        resizeMode: 'stretch'
    }
});

export default CenterIcon;
