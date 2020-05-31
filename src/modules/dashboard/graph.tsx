import { ResponsiveBar } from 'nivo';
import React from 'react';

interface Props {
  data: any;
}

const Graph = (props: Props) => (
  <ResponsiveBar
    data={props.data}
    keys={['cuatrimestre1', 'cuatrimestre2', 'cuatrimestre3']}
    indexBy='quater'
    margin={{ top: 50, right: 60, bottom: 50, left: 110 }}
    padding={0.3}
    defs={[
      {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          size: 4,
          padding: 1,
          stagger: true
      },
      {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
      }
    ]}
    borderColor="#737373"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="#000"
    legends={[
      {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
              {
                  on: 'hover',
                  style: {
                      itemOpacity: 1
                  }
              }
          ]
      }
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
)

export default Graph;