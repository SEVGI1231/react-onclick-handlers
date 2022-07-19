function TestButton(): JSX.Element {
  function handleClick(){
    console.log("This is my button!!")
  }
  return <button onClick={handleClick}>My handler is a functiion decleration </button>;
}

export default TestButton;
