import React from 'react';

export default function Emoji({ emojiNo, alt, handleClick, feeling }) {
	const style = `w-1/12 hover:animate-bounce duration:300 ${
		emojiNo === feeling ? '' : ' filter grayscale'
	}`;
	return (
		<img
			src={`/images/emojis/${emojiNo}.png`}
			alt={alt}
			onClick={() => handleClick(emojiNo)}
			className={style}
		/>
	);
}
