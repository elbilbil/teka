import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View, AppRegistry, TouchableOpacity, Dimensions} from 'react-native';
import EmailInput from '../Controls/EmailInput';
import PasswordInput from '../Controls/PasswordInput';
import * as str from '../../utils/string'
import {loginUserAction} from '../../actions/authentificationActions';

const { height, width } = Dimensions.get("window");

class LoginContainer extends PureComponent {
    state = { username: '', password: '' };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.emailTitle}>{str.EMAIL_TITLE}</Text>
                <EmailInput
                    placeholder={str.EMAIL_PLACEHOLDER}
                    onChangeText={(value) => this.setState({ username: value })} />
                <Text style={styles.passwordTitle}>{str.PASSWORD_TITLE}</Text>
                <PasswordInput
                    placeholder={str.PASSWORD_PLACEHOLDER}
                    onChangeText={(value) => this.setState({ password: value })} />
                <TouchableOpacity
                    style={styles.buttonLogin}
                    title={str.CONNEXION_BTN}
                    onPress={() => navigate("Home")}>
                    <Text style={styles.btnText}>{str.CONNEXION_BTN}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title={str.FORGET_PASSWORD}
                    onPress={() => navigate("Forget")}>
                    <Text style={styles.forgetPassword}>{str.FORGET_PASSWORD}</Text>
                </TouchableOpacity>
                    {/*onPress={() => this.props.dispatch(loginUserAction({ username: this.state.username, password: this.state.password }))} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 38,
        alignItems: 'center',
        backgroundColor:'white'
    },
    emailTitle: {
        textAlign: "left",
        alignSelf: 'stretch',
        marginLeft: 20,
        fontSize: 17,
        color: "#464646",
        fontWeight: "600",
        lineHeight: 22
    },
    passwordTitle: {
        textAlign: "left",
        alignSelf: 'stretch',
        marginLeft: 20,
        fontSize: 17,
        marginTop: 23,
        color: "#464646",
        fontWeight: "600",
        lineHeight: 22
    },
    buttonLogin: {
        marginTop: 38,
        backgroundColor: '#D2225C',
        paddingHorizontal: width/3,
        paddingVertical: 20,
        borderRadius: 5,
    },
    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 23
    },
    forgetPassword : {
        fontSize:17,
        marginTop: 24,
        color: "#464646",
        lineHeight: 23
    }
});

export default LoginContainer;
