import React from 'react';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import { Slider } from 'react-native-elements';


export default class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
       value: 0,
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: '#90A4AE' }}>
        <ImageBackground source={require('./nature2.jpg')} style={{width: '100%', height: '100%'}}>
      <Text style={{ color: 'white', fontSize:32, textAlign: 'center', paddingTop:300 }}>Climate Change Timeline</Text>
  <Slider
    value = {this.state.value}
    onValueChange={value => this.setState({ value })}
    thumbTintColor = '#ECEFF1'
  />
  <Text style ={{textAlign: 'center', color:'white'}}>{years(this.state)}</Text>
  </ImageBackground>
</View>
    );
  }
}
// To get output of func use '{years(this.state)}'
function years(props) {
  const val = props.value * 100;
  const mood_string = '';
  if (val < 20) {
    return (<Text>1990s: Human-made emissions shown to contribute to climate change.</Text>);
  } else {
    if (val < 40) {
      return (<Text>2000s: Global warming progression considerably slowed down.</Text>);
    } else {
      if (val < 60) {
        return (<Text>2010s: Record-high temperatures recorded during this period.</Text>);
      } else {
        if (val < 80) {
          return (<Text>2020s: Greenhouse gases continue to build up? Extreme weather conditions worsen?</Text>);
        } else {
          if (val < 101) {
            return (
              <React.Fragment>
                <Text>2030s: Coastal flooding occurs? Insects and plants lose significant area of their ecosystems?</Text>{"\n"}
                <Text style={{fontSize:30,}}>Save your planet. You matter.</Text>
              </React.Fragment>
            );
          }
        }
      }
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90A4AE',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})
