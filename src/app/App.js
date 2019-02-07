import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoneyStats from '../money-stats/money-stats';
import TrafficStats from '../traffic-stats/traffic-stats';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stats: {
        serverName: "thisServer",
        money: {
          income: {
            followers: 203,
            monthly: 202,
            yearlyGoal: 300,
          },
          photos: [
            {
              name: "photo1",
              views: 23,
              likes: 30,
              comments: 43
            },
            {
              name: "photo2",
              views: 42,
              likes: 56,
              comments: 43
            },
            {
              name: "photo3",
              views: 32,
              likes: 35,
              comments: 60
            },
          ]
        },
          traffic: {
            location: "Johannesburg",
            temp: 30,
            newVisitors: 300,
            bounceRate: 102.2,
            searches: 12.2,
            bandwith: 354.34
          }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3> Test React App</h3>
        </header>
        <div className="container-fluid">
          <div className="row">
            <MoneyStats moneyStats={this.state.stats.money} />
            <TrafficStats trafficStats={this.state.stats.traffic} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
