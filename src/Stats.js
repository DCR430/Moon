import React, {useState,useEffect} from 'react'
import './Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow.js'


const TOKEN = "c0as7qf48v6sc0grrrp0"
const BASE_URL = "https://finnhub.io/api/v1/quote"
function Stats() {

    const [stockData, setstockData] = useState([])
    const [myStocks, setmyStocks] = useState([])

    const getStocksData=(stock)=>{
        return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch((error)=>{
            console.error("Error",error.message)
        })
     }

    useEffect(() => {
        let tempStockData=[]
        const stocksList = ["AAPL","GME","AMC","PENN","NOK","ABT","NAKD","SNDL","TSLA","FB","AMZN","BABA","NFLX","TWTR","UBER",]

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
              {/* current stocks */}
                    </div>
                </div>
            <div className="stats_header">
                <p>Lists</p>
            </div>
            <div className="stats_conent">
                <div className="stats_row">
                    {stockData.map((stock)=>
                    <StatsRow
                 key={stock.name}
                 name={stock.name}
                 openPrice={stock.o}
                 price={stock.c}
                 />
             )}
              </div>
            </div>
        </div>
    </div>
    )
}

export default Stats
