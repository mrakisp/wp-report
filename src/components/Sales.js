import React, { Component } from "react";
import { translations } from '../Translations';
import { currencySymbol } from '../Config';
import LineChart from "./charts/LineChart";

class Sales extends Component {
  render() {
    const data = this.props.sales;
    let rowsSales = []

    const TableBody = () => {
      rowsSales = data.map((row, index) => {
        return (
          <div className="panel__item" key={index}>
            <div className="panel__value" >{Math.round(row.total_sales)}{currencySymbol}</div>
            <div className="panel__value" >{row.total_items}</div>
            <div className="panel__value" >{row.total_orders}</div>
          </div>
        );
      });

      return (
        <div className="panel__table">
            <div className="panel__heading">{translations.sales}</div>
            <div className="panel__item">
              <div className="panel__value panel__value--heading" >{translations.total_income}</div>
              <div className="panel__value panel__value--heading" >{translations.total_items}</div>
              <div className="panel__value panel__value--heading" >{translations.total_orders}</div>
            </div>
            {rowsSales}
          </div>
        
      );
    };

    return (
      <div className="section">
        <div className="panel panel--borders">
        <TableBody data={data} />
        <LineChart data={data}/>
        </div>
      </div>
    );
  }
}

export default Sales;
