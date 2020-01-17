import React, { Component } from "react";
import {translations} from '../Translations';
import {currencySymbol, paymentMethods} from '../Config';

class Table extends Component {
  render() {
    const data = this.props.data;
    let rowsTopSellers = []
    let rowsSales = []

    const TableBody = () => {

      if (this.props.data.topSellers.length>0){
        rowsTopSellers = data.topSellers.map((row, index) => {
          return (
            <div className="panel__item" key={index}>
              <div className="panel__value" >{row.name}</div>
              <div className="panel__value" >{row.product_id}</div>
              <div className="panel__value" >{row.quantity}</div>
            </div>
          );
        });
      }
      if(this.props.data.sales && this.props.data.orders){
       
        let pos_cash = 0;
        let cod = 0;
        let cop = 0;
        let alpha = 0;
        let totals_online = 0;

        data.orders.map((row, index) => {

          if(row.payment_method === 'cod'){ // ANTIKATABOLH
            totals_online += Number(row.total);
            cod += Number(row.total);
          }else if(row.payment_method === 'cop'){ //"ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ"
            totals_online += Number(row.total);
            cop += Number(row.total);
          }else if(row.payment_method === 'pos_cash'){ //metrita
            pos_cash += Number(row.total);
          }else if(row.payment_method === 'alpha'){ //alpha
            totals_online += Number(row.total);
            alpha +=  Number(row.total);
          }else if(row.payment_method === 'pos_card'){ //pos card
           
          }else if(row.payment_method === 'alg_custom_gateway_1'){ //pos Facebook
           
          } 
          else if(row.payment_method === 'alg_custom_gateway_2'){ //pos insta
           
          } 
          else if(row.payment_method === 'alg_custom_gateway_3'){ //pos thl
           
          } 
          else if(row.payment_method === 'alg_custom_gateway_4'){ //pos allagh
           
          }   

        });
        
        rowsSales = data.sales.map((row, index) => {
          return (
            <div className="panel__item" key={index}>
              <div className="panel__value" >{Math.round(row.net_sales)}{currencySymbol}</div>
              <div className="panel__value" >{row.total_items}</div>
              <div className="panel__value" >{row.total_orders}</div>
              <div className="panel__value" >{Math.round(pos_cash)}{currencySymbol}</div>
              <div className="panel__value" >{Math.round(cod)}{currencySymbol}</div>
              <div className="panel__value" >{Math.round(cop)}{currencySymbol}</div>
              <div className="panel__value" >{Math.round(alpha)}{currencySymbol}</div>
              <div className="panel__value" >{Math.round(totals_online)}{currencySymbol}</div>
              <div className="panel__value" >{Math.round(row.net_sales - totals_online)}{currencySymbol}</div>
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
              <div className="panel__value panel__value--heading" >ΜΕΤΡΗΤΑ</div>
              <div className="panel__value panel__value--heading" >ΜΕ ΑΝΤΙΚΑΤΑΒΟΛΗ</div>
              <div className="panel__value panel__value--heading" >ΜΕΤΡΗΤΑ ΠΑΡΑΔΟΣΗ</div>
              <div className="panel__value panel__value--heading" >BANK</div>
              <div className="panel__value panel__value--heading" >ONLINE</div>
              <div className="panel__value panel__value--heading" >ΚΑΤΑΣΤΗΜΑ</div>
            </div>
            {rowsSales}
          </div>
          <div className="panel panel--borders">
            <div className="panel__heading">{translations.top_sellers}</div>
            <div className="panel__item">
              <div className="panel__value panel__value--heading" >{translations.product}</div>
              <div className="panel__value panel__value--heading" >{translations.id}</div>
              <div className="panel__value panel__value--heading" >{translations.total_items}</div>
            </div>
            {rowsTopSellers}
          </div>
         
        </div>
      );
    };

    return (
      <div className="wrap">
        <TableBody data={data} />
      </div>
    );
  }
}

export default Table;
