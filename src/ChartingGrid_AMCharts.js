import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AmCharts from "@amcharts/amcharts3-react";

'use strict';

// yarn add @amcharts/amcharts3-react@2.0.3
// Enable script link in index.html
// See https://github.com/amcharts/amcharts3-react/tree/master/examples/create-react-app
// Generate random data
function generateData() {
  var firstDate = new Date();

  var dataProvider = [];

  for (var i = 0; i < 100; ++i) {
    var date = new Date(firstDate.getTime());

    date.setDate(i);

    dataProvider.push({
      date: date,
      value: Math.floor(Math.random() * 100)
    });
  }

  return dataProvider;
}

class ChartingGrid_AMCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: generateData(),
      timer: null
    };
  }

  componentDidMount() {
    this.setState({
      // Update the chart dataProvider every 3 seconds
      timer: setInterval(() => {
        this.setState({dataProvider: generateData()});
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const config = {
      "type": "serial",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled": true,
      "valueAxes": [
        {
          "id": "v1",
          "axisAlpha": 0,
          "position": "left",
          "ignoreAxisWidth": true
        }
      ],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [
        {
          "id": "g1",
          "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff"
          },
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "title": "red line",
          "useLineColorForBulletBorder": true,
          "valueField": "value",
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
        }
      ],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "g1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true
      },
      "valueScrollbar": {
        "oppositeAxis": false,
        "offset": 50,
        "scrollbarHeight": 10
      },
      "categoryField": "date",

      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "dataProvider": this.state.dataProvider
    };

    return (
      <div className="ChartingGrid">
        <h2>ChartingGrid_AMCharts</h2>
        <AmCharts.React {...config}/>
      </div>
    );
  }
}

// Specifies the types for props:
ChartingGrid_AMCharts.propTypes = {
  symbol: PropTypes.string.isRequired
}

// Specifies the default values for props:
ChartingGrid_AMCharts.defaultProps = {
  symbol: 'MSFT'
};

export default ChartingGrid_AMCharts;
