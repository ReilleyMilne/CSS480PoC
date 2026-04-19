import { useState } from "react";

export default function App()
{
	const [count, setCount] = useState(0);

	function increaseCounter()
	{
		console.log(`increasing count ${count + 1}`);
		setCount(count + 1);
	}

	return (
		<div>
			<Button count={count} onClick={increaseCounter}/>
			<Button count={count} onClick={increaseCounter}/>
		</div>
	);
}

function Button({ count, onClick })
{
	return (
		<button onClick={onClick}>Clicked {count} times.</button>
	);
}
