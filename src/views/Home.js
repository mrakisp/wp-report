import React, { Component } from "react";
import Table from "./../components/Table";

class Home extends Component {
  state = {
    todayData: {
      topSellers : [],
      sales: []
    }
  };

  componentDidMount() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    const urlTopSellers =
      "https://lovefashionpoint.gr/wp-json/wc/v2/reports/top_sellers?date_min=" +
      today +
      "&date_max=" +
      today +
      "&consumer_key=ck_74731bc686c7a4c3a5a26110d7d813b8268d5b83&consumer_secret=cs_562201b3c09564fce2ad01c8b52c96d6e54b5851";

    // fetch(urlTopSellers)
    //   .then(result => result.json())
    //   .then(result => {
    //     this.setState({
    //       todayData: {
    //         topSellers : result
    //       } 
    //     });
    //   });

    const urlSales =
      "https://lovefashionpoint.gr/wp-json/wc/v2/reports/sales?date_min=" +
      today +
      "&date_max=" +
      today +
      "&consumer_key=ck_74731bc686c7a4c3a5a26110d7d813b8268d5b83&consumer_secret=cs_562201b3c09564fce2ad01c8b52c96d6e54b5851";

    // fetch(urlSales)
    //   .then(result => result.json())
    //   .then(result => {
    //     // this.setState( todayData.sales = result);
    //     this.setState({
    //       todayData: {
    //         topSellers : todayData.topSellers,
    //         sales : result
    //       } 
    //     });
    //   });


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

  render() {
    const todayData = this.state.todayData;

    return (
      <div>
        <div className="view__heading">Today Report</div>
        <Table todayData={todayData} />
      </div>
    );
  }
}

export default Home;
