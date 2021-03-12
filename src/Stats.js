import React, {useState,useEffect} from 'react'
import './Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow.js'
import {db} from './Firebase'


const tempStockData=[]
const TOKEN = "c15693748v6plao68vbg"
const BASE_URL = "https://finnhub.io/api/v1/quote"
function Stats() {

    const [stockData, setstockData] = useState([])
    const [myStocks, setmyStocks] = useState([])

    const getMyStocks=()=>{
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = []
            snapshot.docs.map((doc) => {
                console.log(doc.data())
              promises.push(getStocksData(doc.data().ticker)
              .then(res => {
                tempData.push({
                  id: doc.id,
                  data: doc.data(),
                  info: res.data
                })
              })
            )})
            Promise.all(promises).then(()=>{
                // console.log(tempData)
                setmyStocks(tempData);
        })
    })
}

    const getStocksData=(stock)=>{
        return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch((error)=>{
            console.error("Error",error.message)
        })
     }

    useEffect(() => {
        const stocksList = ["AAPL","GME","AMC","PENN","NOK","ABT","NAKD","SNDL","TSLA","FB","UBER","PRTY","AMZN"]

        getMyStocks();
        let promises = [];
        stocksList.map((stock)=>{
            promises.push(
                getStocksData(stock)
                .then((resp)=>{
                    tempStockData.push({
                        name:stock,
                        ...resp.data
                    })
                })
            )
        })
        Promise.all(promises)
        .then(()=>{
            setstockData(tempStockData)
            // console.log(tempStockData)
        })
        },[])
    
    
    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header">
                    <p>Stocks</p>
                </div>
                <div className="stats_conent">
                    <div className="stats_row">
                    {myStocks.map((stock)=>(
                            <StatsRow
                            key={stock.data.ticker}
                            name={stock.data.ticker}
                            openPrice={stock.info.o}
                            shares={stock.data.shares}
                            price={stock.info.c}
                        />
                    ))}
                    </div>
                </div>
            <div className="stats_header stats_list">
                <p>Lists</p>
            </div>
            <div className="stats_conent">
                <div className="stats_row">
                    {stockData.map((stock)=>(
                    <StatsRow
                 key={stock.name}
                 name={stock.name}
                 openPrice={stock.o}
                 price={stock.c}
                 />
                    ))}
              </div>
            </div>
        </div>
    </div>
    )
}

export default Stats
