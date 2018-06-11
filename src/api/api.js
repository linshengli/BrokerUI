import axios from "axios";
import qs from "qs";
let base = "http://192.168.43.96:8081";
//192.168.43.117
const errorProcess = (url, err) => {
  console.log("Error in " + url + err);
};

/**
 * Example:
 * get http://localhost:8080/orderBlotter/{product}
 *
 */
export const api_orderBlotter = (product, params) => {
  return axios
    .get(`${base}/orderBlotter/${product}`, params)
    .then(res => res.data)
    .catch(err => errorProcess("api_orderBlotter", err));
};

/**
 * Example:
 * get http://localhost:8080/completedOrder/{product}/{page}
 *
 */
export const api_completedOrders = (page, params) => {
  return axios
    .get(`${base}/completedOrder/${page}`)
    .then(res => res.data)
    .catch(err => errorProcess("api_completedOrders", err));
};

/**
 * Example:
 * get http://localhost:8080/pendingOrder/{product}/{page}
 */
export const api_pendingOrders = (product,page, params) => {
  return axios
    .get(`${base}/pendingOrder/${product}/${page}`)
    .then(res => res.data)
    .catch(err => errorProcess("api_pendingOrders", err));
};

export const COMPANYNAME = "CDE";
export const WEBSOCKETBASE = "ws://192.168.43.96:8081/websocket3/";