import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const graphRef = useRef();

  useEffect(() => {
    const data = [
      { x: 'Older', y: 2 },
      { x: 'Jan 01-08', y: 6 },
      { x: 'Jan 09-16', y: 10 },
      { x: 'Jan 17-24', y: 8 },
      { x: 'Jan 25-31', y: 3 },
      { x: 'Future', y: 2 },
    ];

    const margin = { top: 10, right: 10, bottom: 30, left: 10 };
    const width = 650 - margin.left - margin.right;
    const height = 235 - margin.top - margin.bottom;

    const svg = d3
      .select(graphRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.x))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .nice()
      .range([height, 0]);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.x))
      .attr('y', (d) => y(d.y))
      .attr('width', 15)
      .attr('height', (d) => height - y(d.y))
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', '#55BC55');

    const xAxis = d3.axisBottom(x);
    xAxis.tickSize(0);

    xAxis.tickPadding(10);
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-0)')
      .attr('font-size', '15px')
      .attr('fill', 'gray')
      .attr("dy", "1em")
      .attr("dx", "-10px");

    svg.select('path').style('display', 'none');
  }, []);

  return <svg ref={graphRef}></svg>;
};

export default BarChart;