import React, { PureComponent } from "react";
import { StyleSheet, View, Dimensions, Image} from 'react-native';
const { height, width } = Dimensions.get("window");

class HistoricalIcon extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.historicalIcon} source={require("../../assets/Home/Header/icon-historial2.png")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    historicalIcon : {
        marginLeft:35,
        width: 23,
        height: 23,
        marginTop: 15,
    }
});

export default HistoricalIcon;
