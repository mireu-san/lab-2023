import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };



  // filterPassedDate = (time) => {
  //   const currentDate = new Date();
  //   const selectedDate = new Date(time);

  //   return currentDate.getDay() < selectedDate.getDay();
  // };
 
 
  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              locale={ko}
              showTimeSelect
              filterTime={this.filterPassedTime}
              minDate={new Date()}
              // maxDate={addDays(new Date(), 5)}
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="시간"
              dateFormat="yyyy, MMMM d, aa h:mm"
          />
          {/* <button className="btn btn-primary">시간 보이기</button> */}
        </div>
      </form>
    );
  }
  
}
export default App;