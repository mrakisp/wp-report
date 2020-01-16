import React, { Component } from "react";
import {translations} from '../Translations';

class Table extends Component {
  render() {
    const todayData = this.props.todayData;
    let rowsTopSellers = []
    let rowsSales = []

    const TableBody = () => {

      console.log(this.props)
      if (this.props.todayData.topSellers.length>0){
        rowsTopSellers = todayData.topSellers.map((row, index) => {
          return (
            <div className="panel__item" key={index}>
              <div className="panel__value" >{row.name}</div>
              <div className="panel__value" >{row.product_id}</div>
              <div className="panel__value" >{row.quantity}</div>
            </div>
          );
        });
      }
      if(this.props.todayData.sales){
        rowsSales = todayData.sales.map((row, index) => {
          return (
            <div className="panel__item" key={index}>
              <div className="panel__value" >{row.average_sales}</div>
              <div className="panel__value" >{row.total_items}</div>
              <div className="panel__value" >{row.total_orders}</div>
            </div>
          );
        });
      }
      return (
        <div>
          <div className="panel">
            <div className="panel__heading">{translations.sales}</div>
            <div className="panel__item">
              <div className="panel__value panel__value--heading" >{translations.average_sales}</div>
              <div className="panel__value panel__value--heading" >{translations.total_items}</div>
              <div className="panel__value panel__value--heading" >{translations.total_orders}</div>
            </div>
            {rowsSales}
          </div>
          <div className="panel">
            <div className="panel__heading">{translations.top_sellers}</div>
            <div className="panel__item">
              <div className="panel__value panel__value--heading" >{translations.product}</div>
              <div className="panel__value panel__value--heading" >{translations.id}</div>
              <div className="panel__value panel__value--heading" >{translations.sells}</div>
            </div>
            {rowsTopSellers}
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
