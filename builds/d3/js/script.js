d3.selectAll("tr:nth-child(4) .day-high")
  .append('span')
  .html('HOT')
  // .style('background', 'red')
  // .style('color', 'white')
  // .style('font-weight', 'bold')
  // .style('padding', '5px')
  // .style('border-radius', '5px')
  // .style('margin-left', '5px')
  .classed('label label-danger', true)
  .classed('label-danger', false)
  .classed('label-warning', true)
  .style('margin-left', "3px")


d3.select('h2 span')
  .classed('small', false)

d3.selectAll('tr')
  .insert('td', ':first-child') //injects the new element before the first child
  .append('input') //appends the new element to the selected elements
  .attr('type', 'checkbox')