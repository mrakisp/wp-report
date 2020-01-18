import React, { Component } from "react";
import { translations } from '../Translations';
import PieChart from "./charts/PieChart";

class TopSellers extends Component {
  
  render() {
    const data = this.props.topSellers;
    let rowsTopSellers = []

    const TableBody = () => {

      rowsTopSellers = data.map((row, index) => {
        return (
          <div className="panel__item" key={index}>
            <div className="panel__value" >{row.name}</div>
            <div className="panel__value" >{row.product_id}</div>
            <div className="panel__value" >{row.quantity}</div>
          </div>
        );
      });

      return (
        <div className="panel__table">
            <div className="panel__heading">{translations.top_sellers}</div>
            <div className="panel__item">
              <div className="panel__value panel__value--heading" >{translations.product}</div>
              <div className="panel__value panel__value--heading" >{translations.id}</div>
              <div className="panel__value panel__value--heading" >{translations.total_items}</div>
            </div>
            {rowsTopSellers}
          </div>
       
      );
    };

    return (
      <div className="section">
        <div className="panel panel--borders">
        <TableBody data={data} />
        <PieChart data={data}/>
        </div>
      </div>
    );
  }
}

export default TopSellers;
