import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineGraph = ({ data }) => {
  const graphRef = useRef();

  useEffect(() => {
    if (data?.length > 0) {
      d3.select(graphRef.current).selectAll("*").remove();
      const margin = { top: 10, right: 10, bottom: 30, left: 10 };
      const width = 600 - margin.left - margin.right;
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

      const line = d3
        .line()
        .x((d) => x(d.x) + x.bandwidth() / 2)
        .y((d) => y(d.y))
        .curve(d3.curveBasis);

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#55BC55')
        .attr('stroke-width', 2)
        .attr('d', line);

      const xAxis = d3.axisBottom(x);

      xAxis.tickSize(0);

      xAxis.tickPadding(10);
      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)
        .selectAll('text')
        .style('text-anchor', 'middle')
        .attr('font-size', '15px')
        .attr('fill', 'gray');

      svg.selectAll('.domain').classed('x-axis-line', true);

      svg.selectAll('.x-axis-line').style('display', 'none');
    }







  }, [data]);

  return <svg ref={graphRef}></svg>;
};

export default LineGraph;