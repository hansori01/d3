d3.selectAll('.day-high .temp')
  .data([45, 44, 54])
  .html(function (d, i) {
    //d is iterated element in the data array
    if (i === 0) {
      return d;
    }
    return `<strong>${d}</strong>`;
  });
