import { useEffect, useState } from "react";

const Countdown = (props) => {
    const [count, setCount] = useState(8);

    useEffect(() => {
        if (count <= 0) {
            props.setIsDissble(true)
            return
        };
        setTimeout(() => setCount(count - 1), 1000);
    }, [count])

    return (
        <div>{count}</div>
    )
}

export default Countdown;