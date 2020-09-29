import React, { useState, useEffect } from "react";
import {
  Deck,
  Slide,
  Heading,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Appear,
  OrderedList,
  ListItem,
  UnorderedList,
  CodePane,
} from "spectacle";
import Counter from "./components/Counter";
import HooksCounter from "./components/HooksCounter";

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

class ClockClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <h1>It is {this.state.date.toLocaleTimeString()}.</h1>;
  }
}

const clockClassCode = `class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
    );
  }
};`;

const DumbClockFunction = (props) => (
  <h1>It is {props.date.toLocaleTimeString()}.</h1>
);

const dumbClockFunctionCode = `const Clock = (props) => <h1>It is {props.date.toLocaleTimeString()}.</h1>;

<Clock date={new Date()} />`;

const SmartClockFunction = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);

  return <h1>It is {date.toLocaleTimeString()}.</h1>;
};

const smartClockFunctionCode = `const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);

  return <h1>It is {date.toLocaleTimeString()}.</h1>;
};`;

const providerExample = `<Provider store={store}>
  <CounterApp />
</Provider>`;

const reducerExample = `const counter(state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};`;

const App = () => {
  return (
    <Deck transitionEffect="slide" template={template}>
      <Slide>
        <Heading>React, Redux and Hooks</Heading>
        <OrderedList>
          <Appear elementNum={0}>
            <ListItem>Brief history of React and hooks</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>Brief history of Redux</ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>Redux and Hooks</ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>Bonus Slides</ListItem>
          </Appear>
        </OrderedList>
      </Slide>
      <Slide>
        <Heading>In the beginning there was React...</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>First released in May 2013 🗓️</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              Javascript <u>library</u> for building User Interfaces 📚
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              React is only concerned with rendering data to the DOM
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>
              Does not handle things like global state* and routing 🌍
            </ListItem>
          </Appear>
          <Appear elementNum={4}>
            <ListItem>Maintained by Facebook</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>React before Feb 2019</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              Before React 16.8 there were 2 common ways to write React
              components ✍️
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>Class components vs. Functional components</ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>Stateful components vs. Stateless components</ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>Smart components vs. Dumb components</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Class component</Heading>
        <ClockClass />
        <CodePane language="javascript" indentSize={4} autoFillHeight={true}>
          {clockClassCode}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Old Functional component</Heading>
        <DumbClockFunction date={new Date()} />
        <CodePane language="javascript" indentSize={4} autoFillHeight={true}>
          {dumbClockFunctionCode}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>React after Feb 2019</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>React 16.8 introduced hooks</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              Allow stateful functional components
              <CodePane language="javascript" indentSize={4}>
                const [date, setDate] = useState(new Date())
              </CodePane>
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              Replace lifecycle methods
              <CodePane language="javascript" indentSize={4}>
                {`useEffect(() => {console.log("Date changed!")}, [date])`}
              </CodePane>
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>
              Basically deprecates the need for Class components 🗑️
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>New Functional component</Heading>
        <SmartClockFunction />
        <CodePane language="javascript" indentSize={4} autoFillHeight={true}>
          {smartClockFunctionCode}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Redux</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>Library for managing global state 🌍</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              First released in June 2015 by Dan Abramov and Andrew Clark 🗓️
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>Works with any front end framework but...</ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>Is used most often in React applications...</ListItem>
          </Appear>
          <Appear elementNum={4}>
            <ListItem>Using the react-redux library</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>How does it work in a nutshell 🥜</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              <u>Single state object</u> defined at the app root 🌱
            </ListItem>
            <CodePane language="javascript" indentSize={4}>
              {providerExample}
            </CodePane>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              State is updated by <u>dispatching</u> an <u>action</u> 🎬
            </ListItem>
            <CodePane
              language="javascript"
              indentSize={4}
            >{`dispatch({ type: 'INCREMENT' });`}</CodePane>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>How does it work continued...</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              Dispatched actions are picked up by a <u>reducer</u> that will
              return a new state object
            </ListItem>
            <CodePane language="javascript" indentSize={4}>
              {reducerExample}
            </CodePane>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              The state object is <u>immutable</u> - it is not mutated, it is
              overwritten
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Old style vs Hooks style</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              Old Style
              <Counter />
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              Hooks Style
              <HooksCounter />
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>Lets look at the code 👨‍💻</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>What have I learned? 🤔</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>I wanted to prove the superiority of hooks</ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>I don't really like react-redux hooks 🤣</ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>The connect function is just nicer to work with</ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>React hooks are still the bomb though 💣</ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Redux seems complicated, whats the alternative? 😕</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              You could use react's state implementation at the app's root - but
              that would involve lots of <u>prop drilling</u>
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              You could use react's <u>context API</u> but it doesn't scale well
              IMHO ⚖️
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              Or you could look into alternatives like <u>Recoil</u> which is
              built by facebook
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>But Dan, what about asynchronous state management? 🙋</Heading>
        <UnorderedList>
          <Appear elementNum={0}>
            <ListItem>
              The examples I have shown you are all synchronous i.e. the state
              changes immediately
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              But what if you need to wait for a response from a server? 🧐
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              Look into <u>redux-thunk</u> - redux middleware that dispatches
              actions as functions that return an action once resolved
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>
              You could also look into <u>redux-saga</u> but I have never even
              looked into it 🙈
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Thank you for listening to me ramble 🙏</Heading>
        <Heading>Any questions?</Heading>
      </Slide>
    </Deck>
  );
};
export default App;
