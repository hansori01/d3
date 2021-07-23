const data = [20, 30, 40, 50, 60];
const height= 400,
width = 600,
barWidth = 50,
barOffset = 5;

d3.select('#viz')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#C9d7d6')
  .selectAll('rect')//selecting rect before they exist
  .data(data)
  .enter()
  .append('rect')//appending rects
  .style('fill', '#c61c6f')
  .attr('width', barWidth)
  .attr('height', function(d) {
    return d;
  })
  .attr('x', function(d, i) {
    return i * (barWidth + barOffset)
  })
  .attr('y', function(d) {
    return height - d; //coordinate system works upside down so draw the bar from top down (minus)
  })