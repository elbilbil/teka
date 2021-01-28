import React, { PureComponent } from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

class PasswordInput extends PureComponent {
    render() {
        const {
            textInputStyle,
        } = this.props;
        return (
            <TextInput
                style={[styles.textInput, textInputStyle]}
                secureTextEntry
                {...this.props}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: "89%",
        alignSelf: "center",
        borderBottomColor: "#BDBFC8",
        borderBottomWidth: 1,
        color: "#313131",
        height: 40,
        fontSize: 17,
        lineHeight: 22
    }
});

export default PasswordInput;
