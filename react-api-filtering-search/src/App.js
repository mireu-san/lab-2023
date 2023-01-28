import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // 1 error
  const [error, setError] = useState(null);
  // 2 default is off(false), load the data
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  // to trigger : fetching the data from the api server (backend)
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
      )
      .then((res) => {
        setIsLoaded(true);
        setItems(res.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  // start here

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam === "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
      return false;
    });
  }

  // error message - if failed to fetch the data from the api server
  if (error) {
    return <p>error. please contact the administrator.</p>;
    // The code block is checking whether the variable "isLoaded" is false, if so, it will return the text "loading...". This is likely being used to determine if some data or resources have finished loading before rendering or displaying them to the user.
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          {/* search */}
          <label htmlFor="search-form">
            {/* nothing related to backend data. */}
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              // let's see this part closely.
              // value, onChange are related to the input field's value and the event that occurs when the value changes.
              value={q}
              // value={q} sets the input field's current value to the value of the variable "q". So whatever the value of "q" is, that will be displayed in the input field.
              onChange={(e) => setQ(e.target.value)}
              // onChange={(e) => setQ(e.target.value)} specifies an event handler function that is called when the input field's value changes. The function is passed an event object "e" and it uses the setter function "setQ" to update the value of the variable "q" with the new value of the input field "e.target.value".
              // So, when the user types anything into the input field, the onChange event is fired and the setQ function is called, which updates the value of the variable 'q' and also updates the input field's value as well.
            />
            {/* input section ends */}
            <span className="sr-only">Search countries here</span>
            {/* this is just word. Don't think about anything weird. */}
          </label>

          {/* this is the drop down menu like feature */}
          {/* This code is a React component that renders a dropdown select element. The component's logic workflow is as follows:

When the component is rendered, it creates a select element with a class of "custom-select" and an ARIA label of "Filter Countries By Region".

The component also sets up an "onChange" event listener for the select element. This event listener is triggered when the user selects a different option from the dropdown.

When the event is triggered, the function passed to the "onChange" event listener is called, which takes an event object "e" as a parameter.

Inside the function, the setFilterParam function is called and passed the value of the select element that was selected by the user "e.target.value". This updates the value of the filterParam variable with the value selected by the user.

When the filterParam variable is updated, the component re-renders and the selected value is sent as a prop to other components that need the filterParam data.

So the overall logic is when user selects an option from the select dropdown, it updates the value of the filterParam variable, which can be used in other components or parts of the application as per requirement. */}
          <div className="select">
            {/* so, this is the drop down menu's trigger and its feature */}
            <select
              onChange={(e) => {
                // use the available state as catalyst - setFilterParam
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Region"
            >
              {/* the drop down menu */}
              {/* Keep in mind : These are the category option I can choose when I click drop down menu */}
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>

        {/* just card, to display the loaded data. Or filtered data which is printed on page. */}
        <ul className="card-grid">
          {/* this search is from function search */}
          {search(data).map((item) => (
            <li>
              <article className="card" key={item.alpha3Code}>
                <div className="card-image">
                  <img src={item.flag.large} alt={item.name} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      // This code block is a React component that is displaying a list of items in a grid format. The logic flow of the code block is as follows:

      // The component first renders a <ul> element with a class of "card-grid".

      // Next, the component maps over the result of the search(data) function, which is likely to filter the original data based on a search query.

      // For each item in the filtered data, the component renders a <li> element, which contains an <article> element with a class of "card".

      // Inside the <article> element, the component renders a <div> element with a class of "card-image", which contains an <img> element that displays the flag of the country. The <img> element uses the item.flag.large value as its source and item.name as the alt text.

      // Next, the component renders another <div> element with a class of "card-content", which contains several list items displaying various information about the country, such as the name, population, region, and capital.

      // The component also assigns a unique key to each <li> element using the item.alpha3Code value.

      // The component then closes all of the elements and ends the logic flow.

      // So overall, the component is using map function to map the filtered data into a card format, showing the flag, name, population, region, capital and other details of the countries.
    );
  }
}

export default App;
