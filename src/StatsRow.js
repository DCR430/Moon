import React from 'react'
import './StatsRow.css'
import stock from './stock.svg'

function StatsRow(props) {
    const percentage =((props.price - props.openPrice/props.openPrice) * 100)
    const buyStock=()=>{
            console.log( "buy",props.name)

    }
    return (
        <div className="row" onClick={buyStock}>
            <div className="row_intro">
                <h1>{props?.name}</h1>
                <p>{props.shares && (props.shares + " shares")}</p>
            </div>
            <div className="row_chart">
                <img src={stock} height={16}/>
             </div>
             <div className="row_numbers">
                 <p className="row_price">{props.price}</p>
                 <p className="row_percentage">{Number(percentage).toFixed(2)}%</p>

             </div>
            
        </div>
    )
}

export default StatsRow
