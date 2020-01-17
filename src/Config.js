//ENABLE REST API TO YOUR WOOCOMMERCE STORE AND PROVIDE THE INFOS
const rest_api_creds = {
  website : "",  // WEBSITE URL
  consumer_key: "",  // CONSUMER KEY
  consumer_secret: "",  // CONSUMER SECRET
}

export const currencySymbol = "€";

// export const paymentMethods = [
//   {value:'pos_cash', label: 'metrita'},
//   {value:'cod', label: 'Μετρητά κατά την Παράδοση me antikatavoli'},
//   {value:'cop', label: 'Μετρητά κατά την Παράδοση'},
//   {value:'alpha', label: 'BANK'},
// ];

const token = "consumer_key="+rest_api_creds.consumer_key+"&consumer_secret="+rest_api_creds.consumer_secret;
export const topSellersEndPoint = rest_api_creds.website+"/wp-json/wc/v3/reports/top_sellers?"+ token;
export const salesEndPoint = rest_api_creds.website+"/wp-json/wc/v3/reports/sales?"+ token;
export const ordersEndPoint = rest_api_creds.website+"/wp-json/wc/v3/orders?"+ token;
