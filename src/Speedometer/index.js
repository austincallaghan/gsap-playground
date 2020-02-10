import React, { Component } from "react";

import "./speedometer.css";

const coverageOptions = [
  {
    term: 24,
    miles: 12,
  },
  {
    term: 36,
    miles: 30,
  },
  {
    term: 48,
    miles: 75,
  },
  {
    term: 60,
    miles: 90,
  },
  {
    term: 72,
    miles: 100,
  },
];

class Speedometer extends Component {
  constructor(props) {
    super(props);
  }

  transformOuter = (degree, offset) => {
    if (offset) {
      return { transform: `rotate(${(degree - offset) * 1.8}deg)` };
    } else {
      return { transform: `rotate(${degree * 1.8}deg)` };
    }
  };
  //   transformString = (degree, modifier) => {
  //     console.log(degree);
  //     if (modifier) {
  //       return { transform: `rotate(${degree - modifier}deg)` };
  //     } else {
  //       return { transform: `rotate(${degree * 1.8}deg)` };
  //     }
  //   };

  render() {
    return (
      <div className="speedometer--container">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTAgMTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZvbnQtc2l6ZTo3cHg7ZmlsbDojMzQzYjQzO2ZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdDtmb250LXdlaWdodDo3MDA7fS5jbHMtM3tsZXR0ZXItc3BhY2luZzowZW07fS5jbHMtNHtsZXR0ZXItc3BhY2luZzowZW07fS5jbHMtNXtsZXR0ZXItc3BhY2luZzotMC4wM2VtO30uY2xzLTZ7bGV0dGVyLXNwYWNpbmc6LTAuMDFlbTt9LmNscy03e2ZpbGw6I2IzYjNiMzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmRpYWwtdnNjPC90aXRsZT48ZyBpZD0iZGlhbCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCwwVjEwMEgxOTBWMFpNMTM5LjQxLDkwYTQ5LjQxLDQ5LjQxLDAsMCwwLTk4LjgyLDBIMjBhNzAsNzAsMCwwLDEsMTQwLDBaIi8+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS45MyA1MS4yNSkiPjx0c3BhbiBjbGFzcz0iY2xzLTMiPjI8L3RzcGFuPjx0c3BhbiB4PSI0LjEyIiB5PSIwIj4wazwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTMuNDUgNzAuODIpIj48dHNwYW4gY2xhc3M9ImNscy00Ij4zPC90c3Bhbj48dHNwYW4geD0iNC4xMSIgeT0iMCI+MjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzEuODMgNTQuNzUpIj40NDwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0LjQxIDI3LjA1KSI+NDBrPC90ZXh0Pjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIuMzIgMTUuNzMpIj42MGs8L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDcuNTUgMTguMzEpIj44MGs8L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDEuNzEgMzUuOSkiPjEwMGs8L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTkuMTkgNjAuMzEpIj4xPHRzcGFuIGNsYXNzPSJjbHMtMyIgeD0iMi43NCIgeT0iMCI+MjwvdHNwYW4+PHRzcGFuIHg9IjYuODYiIHk9IjAiPjBrPC90c3Bhbj48L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUuMjggOTAuMzEpIj4xNDA8dHNwYW4gY2xhc3M9ImNscy01IiB4PSIxMi4zMiIgeT0iMCI+azwvdHNwYW4+PHRzcGFuIHg9IjE2Ljc2IiB5PSIwIj4rPC90c3Bhbj48L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NS42OCA1NC4wNikiPjYwPC90ZXh0Pjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE2LjEgNjYuOTkpIj43MjwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC40MyA5MC4xOCkiPjg0PC90ZXh0Pjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuMzggODkuOTQpIj5NPHRzcGFuIGNsYXNzPSJjbHMtNiIgeD0iNi42OCIgeT0iMCI+bzwvdHNwYW4+PHRzcGFuIHg9IjExLjIyIiB5PSIwIj4uPC90c3Bhbj48L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjA5IDkwLjA2KSI+TWkuPC90ZXh0PjwvZz48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48cG9seWdvbiBjbGFzcz0iY2xzLTciIHBvaW50cz0iMTU5Ljk5IDkwLjAxIDE2MC43MiA5MCAxNTkuOTkgOTAgMTU5Ljk5IDkwLjAxIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMTYyLjksOTBsLTIuMTgsMGgyLjE4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTMwLjYsNTIuODZsLTIuNDItMS40OGMtLjE3LjI4LS4zNi41Ni0uNTMuODRsMi40MywxLjQ5WiIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTExMi4xNywyMy41NWwuODctMi43MS0xLS4zMi0uODgsMi43MloiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik01Mi41OCwzMC43Nyw1MS4wNSwyOC40bC0uODQuNTMsMS41MywyLjM4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTE2Mi44Nyw4OSwxNjAsODl2MWguNzNsMi4xOCwwQzE2Mi44OSw4OS42NCwxNjIuODcsODkuMzEsMTYyLjg3LDg5WiIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTEzOC4yMiwzOS4xOGwxLjkyLTIuMDZjLS4yNC0uMjMtLjQ4LS40Ny0uNzItLjY5bC0xLjkzLDIuMDdaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMTU0LjIsNjJsMy0xLjM0Yy0uMTMtLjMxLS4yNy0uNjEtLjQxLS45MWwtMywxLjM0WiIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTgxLjA2LDIwLjUybC0uMzgtMi44LTEsLjEyLjM4LDIuODFaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMTA0LjE0LDQyLjY1bC0xLS4yNy0uODUsMywxLC4yOFoiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik03Mi44Miw0My42NmwtLjkzLjM3TDczLDQ2LjkybC45My0uMzdaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMTI5Ljc4LDYwLjY5bC0uNjEtLjgtMi40NywxLjg2Yy4yLjI3LjQxLjUzLjYuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik00OC40NSw2My4yN2wtLjU0Ljg0LDIuNjIsMS42NS41NC0uODVaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMTM5LjQsODloLTMuMTFjMCwuMzMsMCwuNjYsMCwxaDMuMDlaIi8+PC9nPjwvc3ZnPg=="
          className="speedometer--svg"
        />

        <div className="speedometer--outer-container--track"></div>

        <div
          style={this.transformOuter(this.props.coverageChosen.miles + 20)}
          className="speedometer--outer-container outer-one"
        >
          <div className="speedometer--outer-grey" />
          <div className="speedometer--outer-track navy" />
        </div>

        <div
          style={this.transformOuter(this.props.coverageChosen.miles + 30)}
          className="speedometer--outer-container  outer-two"
        >
          <div className="speedometer--outer-grey" />
          <div className="speedometer--outer-track orange" />
        </div>

        <div
          style={this.transformOuter(this.props.coverageChosen.miles + 50)}
          className="speedometer--outer-container outer-three"
        >
          <div className="speedometer--outer-grey" />
          <div className="speedometer--outer-track green" />
        </div>

        <div className="speedometer--white-border">
          <div className="speedometer--hidden" />
        </div>

        <div
          style={this.transformOuter(this.props.coverageChosen.miles)}
          className="speedometer--inner-container inner-one"
        >
          <div className="speedometer--inner-grey" />
          <div className="speedometer--inner-track navy" />
        </div>

        <div
          style={this.transformOuter(this.props.coverageChosen.miles + 12)}
          className="speedometer--inner-container inner-two"
        >
          <div className="speedometer--inner-grey" />
          <div className="speedometer--inner-track orange" />
        </div>

        <div
          style={this.transformOuter(this.props.coverageChosen.miles + 40)}
          className="speedometer--inner-container inner-three"
        >
          <div className="speedometer--inner-grey" />
          <div className="speedometer--inner-track green" />
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      coverageChosen: {
        term: 0,
        miles: 0,
      },
    };
  }

  handleCoverage = plan => {
    this.setState({ coverageChosen: plan });
  };

  render() {
    console.log(this.state.coverageChosen);
    return (
      <div className="page--container">
        <Speedometer coverageChosen={this.state.coverageChosen} />
        <div>Option</div>
        {coverageOptions.map((plan, index) => {
          return (
            <section onClick={() => this.handleCoverage(plan)}>
              <p>term: {plan.term}</p>
              <p>miles: {plan.miles}</p>
            </section>
          );
        })}
      </div>
    );
  }
}
