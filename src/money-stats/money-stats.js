import React, {Component} from 'react';
import './money-stats.css';
import IncomeStats from '../income-stats/income-stats';
import PhotoStats from '../photo-stats/photo-stats';
//import moduleName from 'module';


// money stats component
class MoneyStats extends Component {
    render() {
        return(

            <div className="col-md-9">
                <IncomeStats incomeStats={this.props.moneyStats.income} />
                <PhotoStats photoStats={this.props.moneyStats.photos} />
            </div>
        );
    }
}

export default MoneyStats;
