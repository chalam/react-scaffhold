import React, {Component} from 'react';
import PropTypes from 'prop-types';
const ReactHighcharts = require('react-highcharts/ReactHighcharts')
const ReactHighstock = require('react-highcharts/ReactHighstock')
// var Highlight = require('react-highlight');

'use strict';


// Enable script link in index.html
// See https://github.com/kirjs/react-highcharts
// Generate random data of form [[x, y]] => [[date, double]]

const data = [[1220832000000, 22.56], [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28], [1221436800000, 20.05], [1221523200000, 19.98], [1221609600000, 18.26], [1221696000000, 19.16], [1221782400000, 20.13], [1222041600000, 18.72], [1222128000000, 18.12], [1222214400000, 18.39], [1222300800000, 18.85], [1222387200000, 18.32], [1222646400000, 15.04], [1222732800000, 16.24], [1222819200000, 15.59], [1222905600000, 14.3], [1222992000000, 13.87], [1223251200000, 14.02], [1223337600000, 12.74], [1223424000000, 12.83], [1223510400000, 12.68], [1223596800000, 13.8], [1223856000000, 15.75], [1223942400000, 14.87], [1224028800000, 13.99], [1224115200000, 14.56], [1224201600000, 13.91], [1224460800000, 14.06], [1224547200000, 13.07], [1224633600000, 13.84], [1224720000000, 14.03], [1224806400000, 13.77], [1225065600000, 13.16], [1225152000000, 14.27], [1225238400000, 14.94], [1225324800000, 15.86], [1225411200000, 15.37], [1225670400000, 15.28], [1225756800000, 15.86], [1225843200000, 14.76], [1225929600000, 14.16], [1226016000000, 14.03], [1226275200000, 13.7], [1226361600000, 13.54], [1226448000000, 12.87], [1226534400000, 13.78], [1226620800000, 12.89], [1226880000000, 12.59], [1226966400000, 12.84], [1227052800000, 12.33], [1227139200000, 11.5], [1227225600000, 11.8], [1227484800000, 13.28], [1227571200000, 12.97], [1227657600000, 13.57], [1227830400000, 13.24], [1228089600000, 12.7], [1228176000000, 13.21], [1228262400000, 13.7], [1228348800000, 13.06], [1228435200000, 13.43], [1228694400000, 14.25], [1228780800000, 14.29], [1228867200000, 14.03], [1228953600000, 13.57], [1229040000000, 14.04], [1229299200000, 13.54]];

// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    chartData.visits = [];
    chartData.hits = [];
    chartData.views = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 10);

    for (var i = 0; i < 10; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        var visits = Math.round(Math.sin(i * 5) * i *4);
        var hits = Math.round(Math.cos(3*i) * i * 2);
        // var views = Math.round(Math.tan(3*i) * i * 8);
        var views = Math.round(Math.random() * 6000) + i * 4;

        chartData.visits.push([newDate, visits]);
        chartData.hits.push([newDate, hits]);
        chartData.views.push([newDate, views]);

        // var epoch = parseInt(newDate.getTime())
        // chartData.visits.push([epoch, visits]);
        // chartData.hits.push([epoch, hits]);
        // chartData.views.push([epoch, views]);
    }
    return chartData;
}

var chartData = generateChartData();
console.log(chartData);

class ChartingGrid_HighCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {  }

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
      yAxis: [{ // Primary yAxis
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
                      color:'blue'
                  }
              },
              opposite: true
          }],


      series: [
        {
          name: 'visits',
          data: chartData.visits,
          tooltip: {
            valueDecimals: 2
          },
          // yAxis: 0,
        },
        {
          name: 'hits',
          data: chartData.hits,
          tooltip: {
            valueDecimals: 2
          },
          yAxis: 1,
        },
        {
          name: 'views',
          data: chartData.views,
          tooltip: {
            valueDecimals: 2
          },
          yAxis: 2,
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
