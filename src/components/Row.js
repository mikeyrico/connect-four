import React from 'react'

const Row = React.createClass({
  render() {
    let {index, row } = this.props;
    let playerMap = {
      0: 'none',
      1: 'one',
      2: 'two'
    };
    let horizontal = row.map((col, i) => {
    console.log('inside row', playerMap[col]);
      return (
        <span
          className='col'
          data-col-num={i}
          key={i}
          data-player={playerMap[col]} >
        </span>
      )
    });

    return (
      <div className='row' data-row-num={index} >
        {horizontal}
      </div>
    )
  }
})

export default Row
