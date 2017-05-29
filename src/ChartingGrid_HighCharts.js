import React, {Component} from 'react';
import PropTypes from 'prop-types';
const ReactHighcharts = require('react-highcharts/ReactHighcharts')
const ReactHighstock = require('react-highcharts/ReactHighstock')
// var Highlight = require('react-highlight');

'use strict';

// Enable script link in index.html
// See https://github.com/kirjs/react-highcharts
// Generate random data of form [[x, y]] => [[date, double]]

// generate some random data, quite different range
function generateChartData() {
  var chartData = [];
  chartData.visits = [];
  chartData.hits = [];
  chartData.views = [];
  var firstDate = new Date();
  const num = 100
  firstDate.setDate(firstDate.getDate() - num);

  for (var i = 0; i < num; i++) {
    // we create date objects here. In your data, you can have date strings
    // and then set format of your dates using chart.dataDateFormat property,
    // however when possible, use date objects, as this will speed up chart rendering.
    var newDate = new Date(firstDate);
    newDate.setDate(newDate.getDate() + i);

    var visits = Math.round(Math.sin(i * 5) * i * 4);
    var hits = Math.round(Math.cos(3 * i) * i * 2);
    // var views = Math.round(Math.tan(3*i) * i * 8);
    var views = Math.round(Math.random() * 6000) + i * 4;

    // chartData.visits.push([newDate, visits]);
    // chartData.hits.push([newDate, hits]);
    // chartData.views.push([newDate, views]);

    // var epoch = parseInt(newDate.getTime())
    // chartData.visits.push([epoch, visits]);
    // chartData.hits.push([epoch, hits]);
    // chartData.views.push([epoch, views]);

    // var newDate_fmt = newDate.toISOString().slice(0, 10);
    var newDate_fmt = newDate.toLocaleDateString("en-US");
    chartData.visits.push([newDate_fmt, visits]);
    chartData.hits.push([newDate_fmt, hits]);
    chartData.views.push([newDate_fmt, views]);
  }
  return chartData;
}

var chartData = generateChartData();
console.log(chartData);

class ChartingGrid_HighCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const config = {
      chart: {
        zoomType: 'xy'
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: this.props.symbol + ' Stock Price'
      },
      xAxis: {
        tickInterval: 1 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
          align: 'left',
          x: 3,
          y: -3
        }
      },
      yAxis: [
        { // Primary yAxis
          labels: {
            style: {
              color: 'green'
            }
          },
          title: {
            text: 'visits',
            style: {
              color: 'green'
            }
          },
          opposite: true

        }, { // Secondary yAxis
          gridLineWidth: 0,
          title: {
            text: 'hits',
            style: {
              color: 'red'
            }
          },
          labels: {
            // format: '{value} mm',
            style: {
              color: 'red'
            }
          }

        }, { // Tertiary yAxis
          gridLineWidth: 0,
          title: {
            text: 'views',
            style: {
              color: 'blue'
            }
          },
          labels: {
            // format: '{value} mb',
            style: {
              color: 'blue'
            }
          },
          opposite: true
        }
      ],

      legend: {
        // align: 'left',
        // verticalAlign: 'top',
        y: 20,
        floating: true,
        borderWidth: 0
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      series: [
        {
          name: 'visits',
          data: chartData.visits,
          tooltip: {
            valueDecimals: 2
          },
          // yAxis: 0,
        }, {
          name: 'hits',
          data: chartData.hits,
          tooltip: {
            valueDecimals: 2
          },
          yAxis: 1
        }, {
          name: 'views',
          data: chartData.views,
          tooltip: {
            valueDecimals: 2
          },
          yAxis: 2
        }
      ]
    };

    return (
      <div className="ChartingGrid">
        <h2>ChartingGrid_HighCharts</h2>
        {/* <ReactHighstock config={config}></ReactHighstock> */}
        <ReactHighcharts config={config}></ReactHighcharts>

      </div>
    );
  }
}

// Specifies the types for props:
ChartingGrid_HighCharts.propTypes = {
  symbol: PropTypes.string.isRequired
}

// Specifies the default values for props:
ChartingGrid_HighCharts.defaultProps = {
  symbol: 'MSFT'
};

export default ChartingGrid_HighCharts;
