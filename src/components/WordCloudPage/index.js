import React from 'react';
import Layout from '../Layout';
import Wordcloud from '../WordCloud';
export default function WordCloudPage() {
	return (
		<Layout>
			<div
				className="bg-contain bg-no-repeat bg-top h-full"
				style={{ backgroundImage: 'url(/images/lettersBro.png)' }}
			>
				<div className="bg-white opacity-90 h-full">
					<Wordcloud />
				</div>
			</div>
		</Layout>
	);
}
