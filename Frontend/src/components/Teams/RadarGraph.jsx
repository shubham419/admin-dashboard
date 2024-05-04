import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

const data = [
  {
    "team": "LA soccer",
    "A": 120,
    "B": 110,
    "total": 150
  },
  {
    "team": "LA basketball",
    "A": 98,
    "B": 130,
    "total": 150
  },
  {
    "team": "Miami basketball",
    "A": 86,
    "B": 130,
    "total": 150
  },
  {
    "team": "Houston soccer",
    "A": 99,
    "B": 100,
    "total": 150
  },
  {
    "team": "Dallas basketball",
    "A": 85,
    "B": 90,
    "total": 150
  },
  {
    "team": "History",
    "A": 65,
    "B": 85,
    "total": 150
  }
];

function RadarGraph() {
  return (
    <div>
      <RadarChart outerRadius={90} width={430} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="team" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </div>
  );
}

export default RadarGraph;
