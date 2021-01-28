import React, {PureComponent} from 'react';

const {height} = Dimensions.get('window');
import {Dimensions, TextInput, StyleSheet, View, SafeAreaView} from 'react-native';
import LoginContainer from '../components/Containers/LoginContainer';
import WelcomeHeader from '../components/Controls/WelcomeHeader';
import {Header} from 'react-native-elements';

function LoginScreen ({navigation}) {
    return (
        <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
            <Header
                placement="left"
                centerComponent={<WelcomeHeader/>}
                containerStyle={styles.headerContainer}
            />
            <View style={{backgroundColor:'white',flex:1}}>
                <LoginContainer navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECAD30',
    },
    headerContainer: {
        backgroundColor: '#ECAD30',
        height: 175,
        width: '100%',
    },
    backgroundView:{
        flex:1,
    }
});

export default LoginScreen;
