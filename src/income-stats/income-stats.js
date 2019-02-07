import React, {Component} from 'react';
import './income-stats.css';

// constructor
class IncomeStats extends Component {
    constructor(props) {
        super(props)

        // bind functions
        this.FollowerCounter = this.FollowerCounter.bind(this);
        this.IncomeCounter = this.IncomeCounter.bind(this);
        this.IncomeYearlyGoal = this.IncomeYearlyGoal.bind(this);
    }

    // Followers
    FollowerCounter = (amount) => {
        return(

            <div className="card col-sm">
                <div className="card-title">
                    <p className="incomeStatText">{amount}</p>
                </div>
                <div className="card-text">
                    <p className="incomeStatText">New Followers This Month</p>
                </div>
            </div>

        );
    }

    // Income
    IncomeCounter = (amount) => {
        return(

            <div className="card col-sm">
                <div className="card-title">
                    <p className="incomeStatText">{amount}</p>
                </div>
                <div className="card-text">
                    <p className="incomeStatText">Avg Monthly Income</p>
                </div>
            </div>
        );
    }

    // Income Goal
    IncomeYearlyGoal = (amount) => {
        return(

            <div className="card col-sm">
                <div className="card-title">
                    <p className="incomeStatText">{amount}</p>
                </div>
                <div className="card-text">
                    <p className="incomeStatText">Yearly Income Goal</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="row incomeStats">
                {this.FollowerCounter(this.props.incomeStats.followers)}
                {this.IncomeCounter(this.props.incomeStats.monthly)}
                {this.IncomeYearlyGoal(this.props.incomeStats.yearlyGoal)}
            </div>
        );
    }      
}

export default IncomeStats;