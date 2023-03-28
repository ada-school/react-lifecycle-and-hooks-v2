import React from "react"

import Card from "../../components/Card"
import Button from "../../components/Button"

export default class LifeCycle extends React.Component {
  state = {
    counter: 0,
  }

  constructor(props) {
    super(props)
    console.log("Component constructed!")
  }

  componentDidMount() {
    console.log("Component mounted!")
  }

  componentDidUpdate() {
    console.log("Componente updated!")
  }

  componentWillUnmount() {
    console.log("Component will un-mount!")
  }

  render() {
    console.log("Component rendered!")
    return (
      <Card title="Hello world! This is a class component" showButtons={false}>
        <div className="w-full h-full items-center justify-center flex flex-col gap-y-6">
          <p>{`Current count: ${this.state.counter}`}</p>
          <div className="flex gap-x-6">
            <Button
              onClick={() => this.setState({ counter: this.state.counter - 1 })}
            >
              -
            </Button>
            <Button
              onClick={() => this.setState({ counter: this.state.counter + 1 })}
            >
              +
            </Button>
          </div>
        </div>
      </Card>
    )
  }
}
