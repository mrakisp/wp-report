import React, { Component } from "react";
import {rest_api_creds} from '../Config';
import {formatDate} from "../utils/Utils";
import Table from "./../components/Table";
import DatePicker from "./../components/Date";

class Home extends Component {
  //SET DEFAULT STATES
  state = {
    todayData: {
      topSellers : [],
      sales: []
    },
    fromDate : formatDate(new Date),
    toDate : formatDate(new Date)
  };

  //GET DATA FROM API'S
  getData = () =>{
    const fromDate = this.state.fromDate
    const toDate = this.state.toDate
 
    const urlTopSellers =
    rest_api_creds.website+"/wp-json/wc/v2/reports/top_sellers?date_min=" +
    fromDate +
      "&date_max=" +
      toDate +
      "&consumer_key="+rest_api_creds.consumer_key+"&consumer_secret="+rest_api_creds.consumer_secret;

    const urlSales =
      rest_api_creds.website+"/wp-json/wc/v2/reports/sales?date_min=" +
      fromDate +
      "&date_max=" +
      toDate +
      "&consumer_key="+rest_api_creds.consumer_key+"&consumer_secret="+rest_api_creds.consumer_secret;
    
    Promise.all([
      fetch(urlTopSellers),
      fetch(urlSales)
    ]).then(values => Promise.all(values.map(value => value.json())))
    .then(result => {
      let topSellers = result[0];
      let sales = result[1];
      this.setState({
        todayData: {
          topSellers : topSellers,
          sales : sales
        } 
      });
    });
  }
  
  //GET DATA FROM CHILD COMPONENT
  callbackFunction = (from,to) => {
    this.setState({
        fromDate : formatDate(from),
        toDate : formatDate(to)
    }, () => { //CALL FUNCTION AFTER STATE IS UPDATED
      this.getData() 
    });
    
  }

  componentDidMount() {
    this.getData() 
  }

  render() {
    
    const todayData = this.state.todayData;
    return (
      <div>
        <div className="view__heading">Today Report</div>
        <DatePicker parentCallback = {this.callbackFunction}/>
        <Table todayData={todayData} />
      </div>
    );
  }
}

export default Home;
