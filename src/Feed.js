import React, {useState} from 'react'
import './Feed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import Chip from '@material-ui/core/Chip'
import {Avatar} from '@material-ui/core'



function Feed() {
    const [popularTopics, setpopularTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma"
      ]);
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
                    <div className="popularlist_section">
                        <div className="popularlist_intro">
                            <h1>Popular Stocks</h1>
                            <p>Show More</p>
                        </div>
                        <div className="popularlist_badges ">
                            {popularTopics.map((topic) =>(
                                <Chip
                                className="topic_badge"
                                variant="outlined"
                                lable={topic}
                                avatar={<Avatar
                                src={`https://avatars.dicebear.com/api/human/${topic}.svg`}/>}
                                />
                            ))}
                        

                        </div>

                    </div>
                </div>
             </div>
        </div>
    )
}

export default Feed
