import React, { PureComponent } from "react";
const { height } = Dimensions.get("window");
import { Dimensions } from "react-native";
import ForgetContainer from "../components/Containers/ForgetContainer"
import { TextInput, StyleSheet } from "react-native";

class ForgetScreen extends PureComponent {
    render() {
        return (
            <ForgetContainer navigation={this.props.navigation}/>
        );
    }
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        alignSelf: "center",
        backgroundColor: "#0000"
    }
});

export default ForgetScreen
