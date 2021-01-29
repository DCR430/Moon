import React from 'react'
import './Feed.css'
import LineGraph from './LineGraph'

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
                     </div>
                </div>
             </div>
        </div>
    )
}

export default Feed
