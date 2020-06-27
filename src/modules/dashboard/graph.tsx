import { ResponsiveBar } from 'nivo';
import React from 'react';

interface Props {
  firstQuater: number;
  secondQuater: number;
  thirdQuater: number;
}

const Graph = (props: Props) => {
  const data = [
    {
      quater: 'Cuatrimestre 1',
      cuatrimestre1: props.firstQuater,
    },
    {
      quater: 'Cuatrimestre 2',
      cuatrimestre2: props.secondQuater,
    },
    {
      quater: 'Cuatrimestre 3',
      cuatrimestre3: props.thirdQuater,
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={['cuatrimestre1', 'cuatrimestre2', 'cuatrimestre3']}
      indexBy='quater'
      margin={{ top: 50, right: 60, bottom: 50, left: 110 }}
      padding={0.3}
    />
  );
}

export default Graph;