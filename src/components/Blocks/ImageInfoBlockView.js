import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

class Input extends Component {
    render() {
        const {
            textInputStyle,
        } = this.props;
        return (
           <View style={[this.props.style, styles.container, textInputStyle]}>
                <Image style={styles.imageInfo} source={this.props.imageSrc}/>
               <View style={styles.contentText}>
                   <Text style={styles.titleText}>{this.props.textTitle}</Text>
                   <Text style={styles.subText}>{this.props.textContent}</Text>
               </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    imageInfo: {
        marginLeft: 25,
        width: 90,
        height: 64,
        resizeMode: 'stretch'
    },
    contentText: {
        width: 235
    },
    titleText: {
        color: "#464646",
        fontSize: 18,
        fontWeight: "900",
        lineHeight: 23
    },
    subText: {
        color: "#BDBFC8",
        marginTop: 8,
        fontSize: 15,
        lineHeight: 19,
        width: 210
    }
});

export default Input;
//
// <TextInput
//     style={[styles.textInput, textInputStyle]}
//     {...this.props}
// />
