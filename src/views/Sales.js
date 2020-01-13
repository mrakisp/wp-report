import React, { Component } from 'react'



class App extends Component {
  
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     sales: [],
  //     bestSellers: []
  //   };
  //   // this.handler = this.handler.bind(this)
  // }

  // handler() {
  //   this.setState({
  //     someVar: 'some value'
  //   })
  // }
  
  // state = {
  //   data: [],
  //   date: '2020-01-10'
  // }

  // let today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();

  // today = mm + '/' + dd + '/' + yyyy;
  // document.write(today);

  componentDidMount() {
    const { date } = '2020-01-10'
    // const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    //const url = 'https://lovefashionpoint.gr/wp-json/wc/v2/reports/top_sellers?date_min='+ this.state.date +'&date_max='+ this.state.date +'&consumer_key=ck_74731bc686c7a4c3a5a26110d7d813b8268d5b83&consumer_secret=cs_562201b3c09564fce2ad01c8b52c96d6e54b5851';
    const url = 'https://lovefashionpoint.gr/wp-json/wc/v2/reports/top_sellers?date_min='+ this.akis +'&date_max='+ this.akis +'&consumer_key=ck_74731bc686c7a4c3a5a26110d7d813b8268d5b83&consumer_secret=cs_562201b3c09564fce2ad01c8b52c96d6e54b5851';

    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result)
        this.setState({
          data: result,
        })
      })
  }


  // callbackFunction = (childData) => {

  //     this.setState({date: childData})
  //     const url = 'https://lovefashionpoint.gr/wp-json/wc/v2/reports/top_sellers?date_min='+ childData +'&date_max='+ childData +'&consumer_key=ck_74731bc686c7a4c3a5a26110d7d813b8268d5b83&consumer_secret=cs_562201b3c09564fce2ad01c8b52c96d6e54b5851';
  //     console.log(childData)
  //     fetch(url)
  //     .then(result => result.json())
  //     .then(result => {
  //       console.log(result)
  //       this.setState({
  //         data: result,
  //       })
  //     })
  // }

  render() {

  let today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  const { akis } = today;

    // const { data } = this.state;

    // const finalData = {
    //   apiData : data
    // }

    return (
      <div className="container">
        {/* <Home parentCallback = {this.callbackFunction} finalData={finalData} /> */}
      </div>
    )
  }
}

export default App
