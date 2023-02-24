
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
          <button className="btn btn-primary">결정</button>
        </div>
      </form>
    );
  }
  
}
export default App;


// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import {ko} from 'date-fns/esm/locale';
// import "react-datepicker/dist/react-datepicker.css";

// const App = () => {
//   // 공식 예시 기본값
//   const [startDate, setStartDate] = useState(new Date());

//   // 변경하기
//   const handleChange = date => {
//     setStartDate(date);
//   };

//   // 변경 점 submit 해서 적용하기
//   const onFormSubmit = e => {
//     e.preventDefault();
//     console.log(startDate);
//   };

//   // 지나간 날은 선택 못하게 필터
//   const filterPassedTime = time => {
//     const currentDate = new Date();
//     const selectedDate = new Date(time);
//     return currentDate.getTime() < selectedDate.getTime();
//   };

//   return (
//     <div onSubmit={onFormSubmit}>
//         <DatePicker
//           selected={startDate}
//           onChange={handleChange}
//           locale={ko}
//           showTimeSelect
//           filterTime={filterPassedTime}
//           minDate={new Date()}
//           // maxDate={addDays(new Date(), 5)}
//           timeFormat="HH:mm"
//           timeIntervals={5}
//           timeCaption="시간"
//           dateFormat="yyyy, MMMM d, aa h:mm"
//         />
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'
// import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

// import "./css/react-datepicker.css";
// import ko from 'date-fns/locale/ko';
// registerLocale('ko', ko);

// function App() {
//   // 달력 날짜 변경 시 기준점이 되는 날짜
//   const [startDate, setStartDate] = useState(new Date());
  
//   // https://reactdatepicker.com/ 참고
//   const ExampleCustomInput = ({ value, onClick }) => (
//     <button class="example-custom-input" onClick={onClick}>
//       {value}
//     </button>
//   );
  
//   // 월/일
//   const getFormattedDate = (date) => {
//     const month = date.toLocaleDateString('ko-KR', {
//       month: 'long',
//     });
    
//     const day = date.toLocaleDateString('ko-KR', {
//       day: 'numeric',
//     });
    
//     return `${month.substr(0, month.length - 1)}/${day.substr(0, day.length - 1)}`;
//   }
  
//   // 요일 반환
//   const getDayName = (date) => {
//     return date.toLocaleDateString('ko-KR', {
//       weekday: 'long',
//     }).substr(0, 1);
//   }
  
//   // 날짜 비교시 년 월 일까지만 비교하게끔
//   const createDate = (date) => {
//     return new Date(new Date(date.getFullYear()
//       , date.getMonth()
//       , date.getDate()
//       , 0
//       , 0
//       , 0));
//   }
  
//   return (
//     <>
//       <DatePicker
//         locale="ko" // 달력 한글화
//         selected={startDate} // 날짜 state
//         onChange={setStartDate} // 날짜 설정 콜백 함수
//         customInput={<ExampleCustomInput />}
//         minDate={new Date()} // 과거 날짜 disable
//         popperModifiers={{ // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
//           preventOverflow: {
//             enabled: true,
//           },
//         }}
//         popperPlacement="auto" // 화면 중앙에 팝업이 뜨도록
//         // 토요일, 일요일 색깔 바꾸기 위함
//         dayClassName={date =>
//             getDayName(createDate(date)) === '토' ? "saturday"
//           :
//             getDayName(createDate(date)) === '일' ? "sunday" : undefined
//         }
//       />
//     </>
//   );
// }

// export default App;



// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import { ko } from 'date-fns/esm/locale';

// import "react-datepicker/dist/react-datepicker.css";

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: new Date()
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }
//   handleChange(date) {
//     this.setState({
//       startDate: date
//     })
//   }
//   onFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.startDate)
//   }

//   filterPassedTime = (time) => {
//     const currentDate = new Date();
//     const selectedDate = new Date(time);

//     return currentDate.getTime() < selectedDate.getTime();
//   };

//   render() {
//     return (
//       <form onSubmit={ this.onFormSubmit }>
//         <div className="form-group">
//           <DatePicker
//               selected={ this.state.startDate }
//               onChange={ this.handleChange }
//               locale={ko}
//               showTimeSelect
//               filterTime={this.filterPassedTime}
//               minDate={new Date()}
//               // maxDate={addDays(new Date(), 5)}
//               timeFormat="HH:mm"
//               timeIntervals={20}
//               timeCaption="시간"
//               dateFormat="yyyy, MMMM d, aa h:mm"
//           />
//           {/* <button className="btn btn-primary">시간 보이기</button> */}
//         </div>
//       </form>
//     );
//   }
  
// }
// export default App;