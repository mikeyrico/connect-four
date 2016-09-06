import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import Header from './components/Header'
import { createBoard, turn } from './util/helpers'

const App = React.createClass({
  getInitialState() {
    return ({
      board: createBoard(6, 7),
      player1: true,
      player2: false
    })
  },
  handleTurn(col) {
    let board = this.state.board.slice();
    let player = this.state.player1 ? 1 : 2;
    board = turn(board, player, col);
    this.setState({
      board: board,
      player1: !this.state.player1,
      player2: !this.state.player2
    });
  },
  render () {
    return (
      <div>
        <Header handleTurn={this.handleTurn}/>
        <Board board={this.state.board}/>
     </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
