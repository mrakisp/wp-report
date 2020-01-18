import React, { Component } from "react";
import {topSellersEndPoint, salesEndPoint } from '../Config';
import {formatDate} from "../utils/Utils";
import DatePicker from "./../components/Date";
import TopSellers from "../components/TopSellers";
import Sales from "../components/Sales";


class Home extends Component {
  //SET DEFAULT STATES
  state = {
    data: {
      topSellers : [],
      sales: [],
    },
    fromDate : formatDate(new Date()),
    toDate : formatDate(new Date()),
    loading: true
  };

  //GET DATA FROM API'S
  getData = () =>{
    //DATE
    const fromDate = this.state.fromDate;
    const toDate = this.state.toDate;
    const endpointParams = "&date_min=" + fromDate + "&date_max=" + toDate ;
    
    const urlTopSellers = topSellersEndPoint + endpointParams;
    const urlSales = salesEndPoint + endpointParams;
    
    Promise.all([
      fetch(urlTopSellers),
      fetch(urlSales)
    ]).then(values => Promise.all(values.map(value => value.json())))
    .then(result => {
      let topSellers = result[0];
      let sales = result[1];
      this.setState({
        data: {
          topSellers : topSellers,
          sales : sales,
        },
        loading: false 
      });
    });
  }
  
  //GET DATA FROM CHILD COMPONENT
  callbackFunction = (from,to) => {
    this.setState({
        fromDate : formatDate(from),
        toDate : formatDate(to),
        loading : true
    }, () => { //CALL FUNCTION AFTER STATE IS UPDATED
      this.getData() 
    });
    
  }

  componentDidMount() {
    this.getData() 
  }

  render() {
    const sales = this.state.data.sales;
    const topSellers = this.state.data.topSellers;
    return (
      <div>
        { this.state.loading ? <div className="loading"></div> : null }
        <div className="view__heading">Store Report</div>
        <DatePicker parentCallback = {this.callbackFunction}/>
        <div className="wrapper">
          <Sales sales={sales}/>
          <TopSellers topSellers={topSellers}/>
        </div>
      </div>
    );
  }
}

export default Home;
