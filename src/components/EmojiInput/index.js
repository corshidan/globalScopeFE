import React from 'react';
import Emoji from '../Emoji';
const emojiOption = [
	{ number: 1, alt: 'crying face emoji' },
	{ number: 2, alt: 'sad face emoji' },
	{ number: 3, alt: 'neutral face emoji' },
	{ number: 4, alt: 'thinking face emoji' },
	{ number: 5, alt: 'smiley face emoji' },
	{ number: 6, alt: 'star struck emoji' },
];
export default function EmojiInput({ feeling, emojiClick }) {
	return (
		<>
			{emojiOption.map((item, index) => {
				return (
					<Emoji
						key={index}
						emojiNo={item.number}
						alt={item.alt}
						handleClick={emojiClick}
						feeling={feeling}
					/>
				);
			})}
		</>
	);
}
