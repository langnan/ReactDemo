import React from 'react';
import ReactDOM from 'react-dom';
import superman from '../src/public/superman.jpg';
import _ from '../src/index.less'
import reDemo from 'index1.js'


console.log(reDemo)
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>women 11212312212 2</h1>
        <div className="bb">It is {this.state.date.toLocaleTimeString()}.</div>
        <img src={superman} alt="" />
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}