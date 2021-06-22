import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

// date range picker component
function Search({show}) {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className={`search ${show && 'sukablyat'}`}>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <Button onClick={() => history.push('/')}>Search Airbnb</Button>
        </div>
    )
}

export default Search
