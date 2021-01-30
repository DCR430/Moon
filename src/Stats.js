import React from 'react'
import './Stats.css'

function Stats() {
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
              {/*  stocks we can buy */}
              </div>
            </div>
        </div>
    </div>
    )
}

export default Stats
