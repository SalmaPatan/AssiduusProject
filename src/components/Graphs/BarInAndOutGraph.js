import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarInAndOutGraph = () => {
  const chartRef = useRef();
  useEffect(() => {
    const data = [
      { month: 'August', in: 50, out: 30 },
      { month: 'September', in: 45, out: 35 },
      { month: 'October', in: 60, out: 40 },
      { month: 'November', in: 55, out: 45 },
      { month: 'December', in: 55, out: 45 },
      { month: 'January', in: 55, out: 45 },
    ];

    const margin = { top: 10, right: 10, bottom: 30, left: 10 };
    const width = 650 - margin.left - margin.right;
    const height = 235 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.in, d.out))])
      .nice()
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.month))
      .attr('width', 15)
      .attr('y', (d) => y(d.in))
      .attr('height', (d) => height - y(d.in))
      .attr('fill', '#00e18b')
      .attr('rx', 5)
      .attr('ry', 5)

    svg
      .selectAll('.bar-out')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-out')
      .attr('x', (d) => x(d.month))
      .attr('width', 15)
      .attr('y', (d) => y(d.out))
      .attr('height', (d) => height - y(d.out))
      .attr('fill', '#55BC55')
      .attr('rx', 5)
      .attr('ry', 5)

    const xAxis = d3.axisBottom(x);

    xAxis.tickSize(0);

    xAxis.tickPadding(10);
    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .style('text-anchor', 'end')
      .attr('font-size', '15px')
      .attr('fill', 'gray');


    svg.select('path').style('display', 'none');


  }, []);

  return <svg ref={chartRef}></svg>;
};

export default BarInAndOutGraph;
