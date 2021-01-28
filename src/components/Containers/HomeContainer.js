import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import RoundShadowBlockView from '../Blocks/RoundShadowBlockView';
import ImageInfoBlockView from '../Blocks/ImageInfoBlockView';
import HomeAdresseInput from '../Controls/HomeAdresseInput';
import HomeSurfaceInput from '../Controls/HomeSurfaceInput';
import * as str from '../../utils/string';
const {height, width} = Dimensions.get('window');
class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {adresse: '', surface: '', nbLogements: ''};
  }

  initBlockInfo() {
    this.props.callParentFunction(0, 99999999);
    this.props.goToInfoBlock();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <RoundShadowBlockView style={{height: 480, top: -70}}>
          <View style={styles.centerIconView}>
            <Image
              style={styles.centerIcon}
              source={require('../../assets/Home/Search/Illustration2.png')}
            />
          </View>
          <View style={styles.homeMainTitle}>
            <Text style={styles.homeMainTitleText}>
              {str.HOME_SCREEN_ANNONCEMENT}
            </Text>
          </View>
          <View style={styles.homeSubTitle}>
            <Text style={styles.homeSubTitleText}>
              {str.HOME_SCREEN_ANNONCEMENT_SUB}
            </Text>
          </View>
          <View style={styles.searchAdress}>
            <Text style={styles.adresseTitle}>{str.HOME_ADRESSE_TITLE}</Text>
            <HomeAdresseInput
              placeholder={str.HOME_ADRESSE_PLACEHOLDER}
              onChangeText={value => this.setState({adresse: value})}
            />
            <Text style={styles.SurfaceTitle}>{str.HOME_SURFACE_TITLE}</Text>
            <HomeSurfaceInput
              placeholder={str.HOME_SURFACE_PLACEHOLDER}
              onChangeText={value => this.setState({surface: value})}
            />
            <Text style={styles.SurfaceTitle}>
              {str.HOME_NBLOGEMENTS_TITLE}
            </Text>
            <HomeSurfaceInput
              placeholder={str.HOME_NBLOGEMENTS_PLACEHOLDER}
              onChangeText={value => this.setState({nbLogements: value})}
            />
          </View>
        </RoundShadowBlockView>
        <TouchableOpacity
          style={styles.buttonSearch}
          title={str.HOME_SEARCH_BTN}
          onPress={() =>
            navigate('Result', {
              adresse: this.state.adresse,
              surface: this.state.surface,
              nbLogements: this.state.nbLogements,
            })
          }>
          <Text style={styles.searchText}>{str.HOME_SEARCH_BTN}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.arrowDown}
          onPress={() => {
            this.initBlockInfo();
          }}>
          <Image
            style={styles.arrowImg}
            source={require('../../assets/Home/Anchor/ios-arrow-down2.png')}
          />
        </TouchableOpacity>

        <RoundShadowBlockView style={styles.infoBlock}>
          <View style={styles.iconXityInfo}>
            <Image
              style={styles.xityInfoImg}
              source={require('../../assets/Home/Informations/Logo2.png')}
            />
          </View>

          <ImageInfoBlockView
            imageSrc={require('../../assets/Home/Informations/Block/Illustration-1.png')}
            textContent={str.INFO_CITYLAKE_CONTENT}
            textTitle={str.INFO_CITYLAKE_TITLE}
          />
          <ImageInfoBlockView
            imageSrc={require('../../assets/Home/Informations/Block/Illustration-2.png')}
            textContent={str.INFO_VALEUR_CONTENT}
            textTitle={str.INFO_VALEUR_TITLE}
          />
          <ImageInfoBlockView
            imageSrc={require('../../assets/Home/Informations/Block/Illustration-3.png')}
            textContent={str.INFO_CROYANCE_CONTENT}
            textTitle={str.INFO_CROYANCE_TITLE}
          />
          <ImageInfoBlockView
            imageSrc={require('../../assets/Home/Informations/Block/Illustration-4.png')}
            textContent={str.INFO_MOBILE_CONTENT}
            textTitle={str.INFO_MOBILE_TITLE}
          />
          <ImageInfoBlockView
            imageSrc={require('../../assets/Home/Informations/Block/Illustration-5.png')}
            textContent={str.INFO_REUNION_CONTENT}
            textTitle={str.INFO_REUNION_TITLE}
            style={{height: 90}}
          />
        </RoundShadowBlockView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIconView: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIcon: {
    width: 115,
    height: 70,
  },
  homeMainTitle: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeMainTitleText: {
    width: 294,
    fontSize: 21,
    color: '#464646',
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 27,
  },
  homeSubTitle: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeSubTitleText: {
    fontSize: 17,
    width: 260,
    textAlign: 'center',
    color: '#BDBFC8',
    fontWeight: '600',
    lineHeight: 22,
  },
  searchAdress: {
    marginTop: 16,
    width: 320,
  },
  adresseTitle: {
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 18,
    fontSize: 17,
    fontWeight: '600',
    color: '#464646',
  },
  SurfaceTitle: {
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 18,
    fontSize: 17,
    fontWeight: '600',
    marginTop: 16,
    color: '#464646',
  },
  buttonSearch: {
    marginTop: -50,
    backgroundColor: '#D2225c',
    paddingHorizontal: width / 4,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchText: {
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 23,
  },
  arrowDown: {
    marginTop: 24,
    backgroundColor: '#5E5186',
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingVertical: 19,
    zIndex: 1,
  },
  arrowImg: {
    width: 25,
    height: 13,
    resizeMode: 'stretch',
  },
  infoBlock: {
    top: -25,
    shadowOffset: {
      width: 4,
      height: -2,
    },
    width: '100%',
  },
  iconXityInfo: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xityInfoImg: {
    marginLeft: 35,
    width: 108,
    height: 92,
    resizeMode: 'stretch',
  },
});

export default HomeContainer;
