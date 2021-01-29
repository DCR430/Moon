import React from 'react'
import {Line} from "react-chartjs-2"

function LineGraph() {

    const data = [
        {
            x:10,
            y:20

        },
        {
            x:15,
            y:10

        }
    ]
    return (
        <div className="linegraph">
            <Line
            data={{
                datasets:[
                    {
                        type:"line",
                        data: data,
                        backgroundColor:"transparent",
                        borderColor:"#f0c420",
                        borderwidth:3,
                        pointBorderColor:"red",
                        pointBackgroundColor:"red",
                        pointHoverBackgroundColor:"#f0c420",
                        pointHoverBorderColor:"#000000",
                        pointHoverBorderWidth:4,
                        pointHoverRadius:6,
                    }
                ]
            }}
            // type={line}
            
            />
            
        </div>
    )
}

export default LineGraph
