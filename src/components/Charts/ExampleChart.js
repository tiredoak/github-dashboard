// TODO: remove this file when no longer needed
import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ExampleChart = ({ data }) => {
  const chartConfigs = {
    type: 'column2d',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'wCountries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion',
      },

      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ExampleChart;
