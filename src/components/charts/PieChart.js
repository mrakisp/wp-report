import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {

	render() {

		let dataPoints = [];
		const data = this.props.data;

		data.forEach((row) => {
			dataPoints.push({ y: row.quantity, label: row.name + ' - ID: ' + row.product_id })
		});

		const options = {

			// title: {
			// 	text: "Top Sellers"
			// },
			theme: "dark2",
			// exportEnabled: true,
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "doughnut",
				dataPoints: dataPoints
			}
			]

		}

		return (
			<CanvasJSChart options={options} />
		);
	}
}

export default ColumnChart;