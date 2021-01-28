import React from "react";
import { View, StyleSheet } from "react-native";

const RoundShadowBlockView = ({ children = undefined, style }) => {
    return (
        <View style={[styles.shadowView, style]}>
            <View style={[styles.overflowHiddenView]}>{children}</View>
        </View>
    );
};

export default RoundShadowBlockView;

const styles = StyleSheet.create({
    shadowView: {
        flex: 1,
        elevation: 4,
        shadowRadius: 5,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 2,
            height: 10
        },
        shadowOpacity: 0.1,
        backgroundColor: "white",
        borderRadius: 4
    },
    overflowHiddenView: {
        flex: 1,
        overflow: "hidden",
        borderRadius: 4
    }
});
