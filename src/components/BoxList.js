import React, { Component } from 'react'
import Box from './Box'
import NewFormBox from './NewBoxForm'

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = { boxes: [] }
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id != id)
    })
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        width={box.width}
        height={box.height}
        color={box.color}
        key={box.id}
        id={box.id}
        removeBox={() => this.remove(box.id)}
      />
    ))
    return (
      <div>
        <h1>Color Box Maker </h1>
        <NewFormBox createBox={this.create} />
        {boxes}
      </div>
    )
  }
}

export default BoxList
