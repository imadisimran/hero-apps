import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RatingChart = ({ratings}) => {
    const reverseRatings=[...ratings].reverse()
    return (
        <ResponsiveContainer width="100%" height='100%'>
            <BarChart
                layout='vertical'
                data={reverseRatings}
                margin={{
                    top: 0,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type='number'/>
                <YAxis type='category' dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#ff8811" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default RatingChart;