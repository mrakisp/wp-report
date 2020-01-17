import React, { Component } from "react";
import {topSellersEndPoint, salesEndPoint , ordersEndPoint} from '../Config';
import {formatDate} from "../utils/Utils";
import Table from "./../components/Table";
import DatePicker from "./../components/Date";

class Home extends Component {
  //SET DEFAULT STATES
  state = {
    data: {
      topSellers : [],
      sales: [],
      orders: []
    },
    fromDate : formatDate(new Date),
    toDate : formatDate(new Date),
    fromDateTime : formatDate(new Date), 
    loading: true
  };

  //GET DATA FROM API'S
  getData = () =>{
    //DATE
    const fromDate = this.state.fromDate;
    const toDate = this.state.toDate;
    const endpointParams = "&date_min=" + fromDate + "&date_max=" + toDate ;
    //DATE TIME
    const fromDateTime = this.state.fromDateTime;
    const toDateTime = this.state.toDateTime;
    const endpointDateTimeParams = toDateTime ? "&after=" + fromDateTime + "T00:00:01&before=" + toDateTime + "T23:59:00&per_page=100" : "&after=" + fromDateTime + "T00:00:01&per_page=100";

    const urlTopSellers = topSellersEndPoint + endpointParams;
    const urlSales = salesEndPoint + endpointParams;
    const urlOrders = ordersEndPoint + endpointDateTimeParams;

    Promise.all([
      fetch(urlTopSellers),
      fetch(urlSales),
      fetch(urlOrders)
    ]).then(values => Promise.all(values.map(value => value.json())))
    .then(result => {
      let topSellers = result[0];
      let sales = result[1];
      let orders = result[2];
      this.setState({
        data: {
          topSellers : topSellers,
          sales : sales,
          orders : orders
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
        fromDateTime : formatDate(from), 
        toDateTime : formatDate(to), 
        loading : true
    }, () => { //CALL FUNCTION AFTER STATE IS UPDATED
      this.getData() 
    });
    
  }

  componentDidMount() {
    this.getData() 
  }

  render() {
    
    const data = this.state.data;
    return (
      <div>
        { this.state.loading ? <div className="loading"></div> : null }
        <div className="view__heading">Store Report</div>
        <DatePicker parentCallback = {this.callbackFunction}/>
        <Table data={data} />
      </div>
    );
  }
}

export default Home;
