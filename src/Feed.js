import React from 'react'
import './Feed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'

function Feed() {
    return (
        <div className="Feed">
            <div className="feed_container">
                <div className="feed_chart"> 
                    <div className="feed_portfolio">
                        <h1>$115,000.84</h1>
                        <p>-$0.0338 (-4.10%) Today</p>
                    </div>
                     <div className="chart">
                        <LineGraph/>
                        <TimeLine/>
                     </div>
                </div>
                <div className="buying_section">
                    <h2>Buying Power</h2>
                    <h2>$42.77</h2>
                </div>
                <div className="market_section">
                    <div className="market_box">
                        <p>Stocks going</p>
                        <h1>To The Moon!🚀</h1>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Feed
