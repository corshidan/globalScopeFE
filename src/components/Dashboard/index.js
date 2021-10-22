import './Dashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Card from '../Card';

export default function Dashboard() {
	return (
		<div>
			<Sidebar />
			<Card />
			<body>
				<div class="container">
					<div class="testimonial-card1">
						<div class="text"></div>
						<div class="footer">
							<div class="image"></div>
							<a href="/bloginputpage">
								<h3 class="person">Add to your blog</h3>
							</a>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="testimonial-card2">
						<div class="text"></div>
						<div class="footer">
							<div class="image"></div>
							<a href="/blogrecappage">
								<h3 class="person">Blog Recap</h3>
							</a>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="testimonial-card3">
						<div class="text"></div>
						<div class="footer">
							<div class="image"></div>
							<a href="/statspage">
								<h3 class="person">See your stats</h3>
							</a>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="testimonial-card4">
						<div class="text"></div>
						<div class="footer">
							<div class="image"></div>
							<a href="/listpage">
								<h3 class="person">To do list</h3>
							</a>
						</div>
					</div>
				</div>
			</body>
		</div>
	);
}
