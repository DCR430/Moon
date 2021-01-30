import React from 'react'
import './StatsRow.css'

function StatsRow() {
    return (
        <div className="row">
            <div className="row_intro">
                <h1>{props?.name}</h1>
                <p>{props.volume && (props.volume + " shares")}</p>
            </div>
            <div className="row_chart">
                {/* <img src={StockChart} height={16}/> */}
             </div>
             <div className="row_numbers">
                 <p className="row_price">{props.price}</p>
                 <p className="row_percentage">+{Number(percentage).toFixed(2)}%</p>

             </div>
            
        </div>
    )
}

export default StatsRow
