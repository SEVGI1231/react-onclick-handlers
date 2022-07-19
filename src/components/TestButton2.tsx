function TestButton2(): JSX.Element{
    const handleClick=() =>{
        console.log("this is my second button");
    }
    return <button onClick={handleClick}>My Handler is a full body arrow fucntion</button>
}
export default TestButton2;