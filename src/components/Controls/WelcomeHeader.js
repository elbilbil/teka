import React, { PureComponent } from "react";
import {TextInput, StyleSheet, View, Dimensions, SafeAreaView, Text} from 'react-native';
import {Header} from 'react-native-elements';
import * as str from "../../utils/string"
const { height, width } = Dimensions.get("window");

class WelcomeHeader extends PureComponent {
    render() {
        return (
            <View>
                <Text style={styles.titleText}>
                    {str.WELCOME_TEXT}
                </Text>
                <Text style={styles.subText}>
                    {str.WELCOME_SUB_TEXT} :
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 36,
        height: 45,
        color: "white",
        fontWeight: "900",
        lineHeight: 45,
    },
    subText: {
        fontSize: 17,
        color: "white",
        height: 22,
        lineHeight: 22
    }
});

export default WelcomeHeader;
