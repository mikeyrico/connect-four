import React from 'react'
import Row from './Row'

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let matrix = this.props.board.map((row, i) => {
      return <Row index={i} key={i} row={row}/>
    });

    return (
      <div className='board'>
        {matrix}
      </div>
    )
  }
}

export default Board
