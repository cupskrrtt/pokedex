import React, {useState} from 'react';
import Chart from 'react-apexcharts';
import useApi from '../hooks/useApi';

const StatsChart = ({pokemon}) => {
  const values = [];
  const stats = [];

  const {data, loading} = useApi(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  data ? data.stats.map(item => values.push(item.base_stat)) : loading;
  data
    ? data.stats.map(item => item.stat).map(item => stats.push(item.name))
    : loading;

  return (
    <>
      <Chart
        type="bar"
        width={300}
        height={220}
        series={[
          {
            name: '',
            data: values,
          },
        ]}
        options={{
          xaxis: {
            tickPlacement: 'on',
            categories: stats,
          },
          chart: {
            toolbar:{
                show: false
            },
            animations: {
                enabled: false
            }
          },
          plotOptions: {
            bar:{
                horizontal: true
            }
          },
          tooltip: {
            enabled: false,
          }
        }}
      />
    </>
  );
};

export default StatsChart;
