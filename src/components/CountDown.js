import React, { useState, useEffect } from 'react';

class CountDown extends React.Component {

  state = {
    timeDown: 10
  }


  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeDown: this.state.timeDown - 1
      })
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timeDown !== this.state.timeDown && this.state.timeDown === 0) {
      this.componentWillUnmount()
      // this.props.onTimesup()
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render() {
    return (
      <div>{this.state.timeDown} class</div>
    )
  }

}


const NewCountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      // props.onTimesup();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [count]);

  return (
    <div>{count} hooks</div>
  )
}


export { CountDown, NewCountDown }; 