import { useState } from 'react'

const Test1 = () => {
    const [count, setCount] = useState(0)

return(
    <div>
        <p data-testid="paragraph">You clicked {count} times</p>
        <button onClick={()=>setCount(count+1)}>
            Click me
        </button>
    </div>
)
}

export default Test1