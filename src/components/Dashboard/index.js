import React, { useEffect, useRef } from 'react';
import Layout from '../Layout';
import Card from '../Card';
import { useHistory } from 'react-router-dom';

import lottie from 'lottie-web';
import css from './index.module.css';

import { useUser } from '../App/App.js';

export default function Dashboard({ handleAuth }) {
	const container = useRef(null);
	const user = useUser();
	const history = useHistory();
	async function getBootcamperProfile() {
		try {
			fetch('http://localhost:5000/dashboard', {
				method: 'POST',
				headers: { jwtToken: localStorage.token },
			})
				.then((response) => response.json())
				.then((response) => {
					if (response.email === 'admin@soc.com') {
						const adminUser = { ...response, role: 'admin' };
						handleAuth(adminUser);
					} else {
						const bootcamper = { ...response, role: 'bootcamper' };
						handleAuth(bootcamper);
					}
					if (user.role === 'admin') history.replace('/adminpage/');
				});
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		const anim = lottie.loadAnimation({
			container: container.current,
			path: '/images/33645-happy-dog.json',
			renderer: 'svg',
		});
		anim.setSpeed(2);
	}, []);
	useEffect(() => {
		getBootcamperProfile();
	}, []);
	return (
		<Layout>
			{/* <div className="grid grid-cols-2 p-10"> */}
			<div className="flex flex-col justify-center items-center mt-10">
				<div className=" flex justify-around mb-5 w-1/2 ">
					<div className="transition duration-500 ease-in-out transform hover:-translate hover:scale-105">
						<Card
							image="/images/addToBlogImage.png"
							buttonLabel="Add to Blog"
							path="/bloginputpage"
						/>
					</div>
					<div className="transition duration-500 ease-in-out transform hover:-translate hover:scale-105">
						<Card
							image="/images/seeYourStatsImage.png"
							buttonLabel="See your Stats"
							path="/statistics"
						/>
					</div>
				</div>
				<div className="flex justify-around w-1/2">
					<div className="transition duration-500 ease-in-out transform hover:-translate hover:scale-105">
						<Card
							image="/images/recapBlogImage.png"
							buttonLabel="Blog Recap"
							path="/blogrecappage"
						/>
					</div>
					<div className="transition duration-500 ease-in-out transform hover:-translate hover:scale-105">
						<Card
							image="/images/lettersBro.png"
							buttonLabel="Word Cloud"
							path="/cloud"
						/>
					</div>
				</div>
			</div>
			<div className="w-1/12   fixed -bottom-8 -right-8  " ref={container}>
				<div className={css.dog}>
					<p className={css.text}>
						Hi..I'm Bones.. <br />
						I'll keep you company whilst you reflect..
					</p>
				</div>
			</div>
		</Layout>
	);
}
