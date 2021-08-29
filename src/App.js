import React, { Component } from 'react';
import ShowText from './ShowText';
import Translator from './Translator';
import GetText from './GetText';

class App extends Component {
  state = {
    textToTranslate: "",
    translatedText: "", 
    lang: "",
  }

  translateText = (text, getLang) => {
    this.setState({textToTranslate: text, lang: getLang})
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.translatedText === this.state.translatedText) {
        Translator((data) => {
            console.log("data", data);
            this.setState({translatedText: data});
          }, this.state.textToTranslate, this.state.lang);
        }  
    }

  render() {
    return (
      <div>
        <GetText getUserText={this.translateText} lang="en"/>
        <GetText getUserText={this.translateText} lang="it"/>
        <GetText getUserText={this.translateText} lang="fi"/>
        <ShowText text={this.state.translatedText} />
      </div>
    );
  }
}

export default App;
