import React, { Component } from 'react'



class Sales extends Component {
  

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

    fetch(urlTopSellers)
      .then(result => result.json())
      .then(result => {
        console.log('fromSales',result)
        // this.setState({
        //   todayData: {
        //     topSellers : result
        //   } 
        // });
      });


  }

  render() {

    return (
      <div className="container">
       sales
      </div>
    )
  }
}

export default Sales
