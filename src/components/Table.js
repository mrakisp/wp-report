import React, { Component } from "react";

class Table extends Component {
  render() {
    const todayData = this.props.todayData;
    let rows = []
   
    const TableBody = () => {

      console.log('a',this.props)
      if (this.props.todayData.topSellers.length>0){
        rows = todayData.topSellers.map((row, index) => {
          return (
            <div className="panel__item" key={index}>
              <div className="panel__value" >{row.name}</div>
              <div className="panel__value" >{row.product_id}</div>
              <div className="panel__value" >{row.quantity}</div>
            </div>
          );
        });
      }
      return (
        <div>
          
          <div className="panel">
            <div className="panel__heading">Top Sellers</div>
            {rows}
          </div>
        </div>
      );
    };

    return (
      <div className="wrap">
        <TableBody todayData={todayData} />
      </div>
    );
  }
}

export default Table;
