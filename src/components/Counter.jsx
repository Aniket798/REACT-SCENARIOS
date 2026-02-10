function Counter({value, onIncrement}) {
    return (
        <div style = {{marginBottom: '20px'}}>
            <p>Count: {value}</p>
            <button conClick={onIncrement}>Increment</button>
        </div>
    )
}

export default Counter