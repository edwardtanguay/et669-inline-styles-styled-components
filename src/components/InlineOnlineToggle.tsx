import { useState } from "react";

export const InlineOnlineToggle = () => {
	const [isOnline, setIsOnline] = useState(false);
	return (
		<>
			{isOnline}
			<button
				className="bg-slate-500 px-3 pt-1 pb-2 rounded hover:opacity-90"
				onClick={() => setIsOnline(!isOnline)}
			>
				Toggle
			</button>
			<p style={{ color: isOnline ? "darkgreen" : "darkred" }}>
				User is now {isOnline ? "online" : "offline"}.
			</p>
			<p style={{ fontWeight: isOnline ? "bold" : "normal" }}>
				Hans Schmidt
			</p>
		</>
	);
};
