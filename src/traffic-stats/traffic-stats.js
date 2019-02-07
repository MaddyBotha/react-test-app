import React, {Component} from 'react';
import './traffic-stats.css';



    class TrafficStats extends Component {
        constructor(props) {
            super(props);
            this.state = {
                trafficStats: this.props.trafficStats
            }
            console.log(props, this.state);

        //bind functions
        this.LocationInfo = this.LocationInfo.bind(this);
        this.VisitorInfo = this.VisitorInfo.bind(this);
        this.BounceRate = this.BounceRate.bind(this);
        this.SearchRate = this.SearchRate.bind(this);
        this.BandwithRate = this.BandwithRate.bind(this);
    }

    //location info
    LocationInfo = () => {
        return(
          
            <div>
                <ul className="location list-group">
                    <li className="list-group-item">
                        <div className="headingText">
                            {this.state.trafficStats.temp}°
                        </div>
                        <div className="subtitleText">
                            {this.state.trafficStats.location}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

    //visitor info
    VisitorInfo = () => {
        return(

            <div>
                <ul className="list-group">
                    <li className="list-group-item visitor">
                        <div className="subtitleText">
                            New Visitors
                        </div>
                        <div className="headingText">
                            {(this.state.trafficStats.newVisitors/1000).toFixed(1)}k
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }

    //bounce rate info
    BounceRate = () => {
        return(

            <div>
                <ul className="list-group">
                    <li className="list-group-item bouncerate">
                        <div className="subtitleText">
                            Bounce Rate
                        </div>
                        <div className="headingText">
                            {(this.state.trafficStats.bounceRate * 100).toFixed(0)}%
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }

    //search rate info
    SearchRate = () => {
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item searches">
                        <div className="subtitleText">
                            Searches
                        </div>
                        <div className="headingText">
                            {(this.state.trafficStats.searches * 100).toFixed(0)}%
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }

    //bandwith rate info
    BandwithRate = () => {
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item bandwith">
                        <div className="subtitleText">
                            Traffic
                        </div>
                        <div className="headingText">
                            {this.state.trafficStats.bandwith} kb
                        </div>
                    </li>
                    <li className="list-group-item space">
                    </li>
                </ul>
            </div>
        );
    }


    render() {
        return(
            <div className="col-md-3">
                <div className="trafficStats">
                    {this.LocationInfo()}
                    {this.VisitorInfo()}
                    {this.BounceRate()}
                    {this.SearchRate()}
                    {this.BandwithRate()}
                </div>
            </div>
        );
    }
}

export default TrafficStats;
