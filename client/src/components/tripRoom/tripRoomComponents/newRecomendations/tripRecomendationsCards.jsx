import React from 'react';
import DisplayCurrentRec from './displayCurrentRec.jsx';
import Bookmarker from './bookmarker.jsx';

/////////////////////////
// Trip Recomendations Cards
/////////////////////////
  // hotelRecomendationId: 12345,
  // HotelName: 'Sagamore Pendry Baltimore',
  // Price: 450.91,
  // StarRating: 5,
  // Description: 'where all the ballers and shot callers come to relax and recharge',
  // Image: 'https://s3-media3.fl.yelpcdn.com/bphoto/8qcpzDf8VSeYxPtHG4Lu5g/o.jpg'

class TripRecomendationsCards extends React.Component {
  constructor (props) {
    super(props);
    this.bookmarkThisRec = this.bookmarkThisRec.bind(this);
    this.advanceToNextRec = this.advanceToNextRec.bind(this);
    this.state = {
      currentRecIndex: 0
    };
  }

  advanceToNextRec() {
    var numberOfRecs = this.props.hotelRecomendations.length;
    var nextIndex;
    if (this.state.currentRecIndex < numberOfRecs - 1) {
      nextIndex = this.state.currentRecIndex + 1;
    } else {
      nextIndex = 0;
    }
    this.setState({
      currentRecIndex: nextIndex
    });
  }

  bookmarkThisRec(bookmarkerNote) {
    var bookmarkedHotelObject = this.props.hotelRecomendations[this.state.currentRecIndex]
    var newBookmark = {
      bookmarkedHotelId: bookmarkedHotelObject.hotelId,
      bookmarkerNote: bookmarkerNote
    };
    this.props.addBookmark(newBookmark);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m8 l6">
          <div className="card hoverable">
            <DisplayCurrentRec
              currentRec={this.props.hotelRecomendations[this.state.currentRecIndex]}
              className="card-action"
            />
            <div className="card-action">
              <a onClick={this.advanceToNextRec}>Next</a>
            </div>
          </div>
        </div>
        <Bookmarker bookmarkThisRec={this.bookmarkThisRec}/>
      </div>
    );
  }

}

module.exports = TripRecomendationsCards;