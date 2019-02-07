import React, {Component} from 'react';
import './photo-stats.css';

class PhotoStats extends Component {
    constructor(props) {
        super(props);

        //state
        this.state = {
            photoStats: this.props.photoStats
        }

        //bind functions
        this.shotViews = this.shotViews.bind(this);
        this.likeAmounts = this.likeAmounts.bind(this);
        this.CommentAmounts = this.CommentAmounts.bind(this);
    }

    // shots viewed
    shotViews = (amount) => {
        return(

            <div className="col">
                <span>{amount}</span><br />Shot Views 
            </div>
        );
    }

    // like amounts
    likeAmounts = (amount) => {
        return(

            <div className="col">
                <span>{amount}</span><br />Likes 
            </div>
        );
    }

    //comments
    CommentAmounts = (amount) => {
        return(

            <div className="col">
                <span>{amount}</span><br />Commnets 
            </div>
        );
    }

    // photo list
    PhotoListCreate = () => {
        const photoList = this.state.photoStats.map((photo) =>
            <div className="photostats-item" key={photo.name} >
                <div className="row">
                    <div className="col photostats-img">
                    </div>
                </div>
                <div className="row photostats-details">
                    {this.shotViews(photo.views)}
                    {this.likeAmounts(photo.likes)}
                    {this.CommentAmounts(photo.comments)}
                </div>
            </div>        
        );

        return (photoList);
    }

    render() {

        return(
        <div className="row photostats">
            {this.PhotoListCreate()}
        </div>
        );
    }
}

export default PhotoStats;
