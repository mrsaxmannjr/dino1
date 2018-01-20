import React, { Component } from 'react';
import './App.css';
import { Header } from "./Header.js"
import { Section } from "./Section.js"
import { Aside } from "./Aside.js"
import { Footer } from "./Footer";

export class App extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    fetch("./listings.json")
      .then(response => response.json())
      .then(response => this.setState({ data: response }));
  }

  getData(formData) {
    var newFormData = this.state.data;
    newFormData.unshift(formData)
    this.setState({data: newFormData})
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section listings={this.state.data} />
          <Aside getFormData={this.getData} />
        </main>
        <Footer />
      </div>
    );
  }
}

