d3.select('#viz')
  .append('svg')
  .attr('width', 600)
  .attr('height', 400)
  .style('background', 'blue')
  .append('rect')
  .attr('x', 200)
  .attr('y', 100)
  .attr('width', 100)
  .attr('height', 100)
  .style('fill', 'tomato');

d3.select('#viz svg')
  .append('circle')
  .attr('cx', 200)
  .attr('cy', 100)
  .attr('r', 50)
  .style('fill', 'white');
