const myData = [
  { date: '4/01/2020', low: 23, high: 80 },
  { date: '4/01/2020', low: 22, high: 66 },
  { date: '4/01/2020', low: 44, high: 59 },
  { date: '4/01/2020', low: 55, high: 98 },
  { date: '4/01/2020', low: 33, high: 81 }
];

d3.select('tbody')
  .selectAll('tr') // this 'tr' does not exist yet
  .data(myData)
  .enter() //access the sublevel of the data
  .append('tr')
  .html(function (d) {
    return `<th scope='row'> ${d.date} </th>
    <td> ${d.low}</td>
    <td> ${d.high}</td>`;
  });
