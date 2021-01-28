import React, {PureComponent} from 'react';
import HomeContainer from '../components/Containers/HomeContainer';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {Header} from 'react-native-elements';
import CenterIcon from '../components/Controls/CenterIcon';
import HistoricalIcon from '../components/Controls/HistoricalIcon';
import ProfileIcon from '../components/Controls/ProfileIcon';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.ScrollView = React.createRef();
    this.state = {
      x: 0,
      y: 0,
    };
    this.goToInfoBlock = this.goToInfoBlock.bind(this);
    this.callParentFunction = this.callParentFunction.bind(this);
  }

  callParentFunction(x, y) {
    this.setState({x, y});
  }

  goToInfoBlock() {
    setTimeout(() => {
      this.ScrollView.current.scrollTo({
        x: this.state.x,
        y: this.state.y,
        animated: true,
      });
    }, 0);
  }

  render() {
    return (
      <ScrollView
        ref={this.ScrollView}
        style={styles.scrollView}
        contentInset={{bottom: -600}}>
        <SafeAreaView style={styles.container} forceInset={{bottom: 'never'}}>
          <Header
            centerComponent={<CenterIcon />}
            leftComponent={<HistoricalIcon />}
            rightComponent={<ProfileIcon />}
            containerStyle={styles.headerContainer}
          />
          <View style={{backgroundColor: '#EEF0F1'}}>
            <HomeContainer
              goToInfoBlock={this.goToInfoBlock}
              callParentFunction={this.callParentFunction}
              navigation={this.props.navigation}
            />
          </View>
        </SafeAreaView>
        <View style={styles.bottomView} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#E6B454',
  },
  container: {
    flex: 1,
    backgroundColor: '#E6B454',
  },
  headerContainer: {
    backgroundColor: '#E6B454',
    height: 190,
  },
  bottomView: {
    backgroundColor: '#EEF0F1',
    height: 600,
  },
});

export default HomeScreen;
