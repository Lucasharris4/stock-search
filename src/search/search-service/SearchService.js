import axios from 'axios';
import { mockProfile } from '../../mocks';

const url = "https://financialmodelingprep.com/api/v3/profile/";

export const getStockByTicker = async (ticker) => {
    if (ticker) {
        return axios.get(url + ticker + '?apikey=' + process.env.REACT_APP_API_KEY);
    }
};

export const mockGetStockByTicker = async (ticker) => {
    const stock = await Promise.resolve({
        "data": [
            mockProfile
        ],
        "status": 200,
        "statusText": "",
        "headers": {
            "content-type": "application/json;charset=UTF-8"
        },
        "config": {
            "url": "https://financialmodelingprep.com/api/v3/profile/aapl?apikey=910110bbdc2d1c096e7a78e9c0c19dd2",
            "method": "get",
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1
        },
        "request": {}
    });
    return stock;
};
