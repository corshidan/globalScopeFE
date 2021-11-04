import React from 'react';
import Layout from '../Layout';
import { CSVLink } from 'react-csv';
import { useState, useEffect } from 'react';
import BootcampersList from '../BootcampersList';

const columnNames = [
	[
		'first_name',
		'last_name',
		'email',
		'bootcamperid',
		'reflection',
		'date',
		'confidence',
		'overall-feeling',
		'grateful',
		'improvements',
	],
];

export default function AdminPage() {
	const [cvsData, setCsvData] = useState(null);
	const [allData, setAllData] = useState([]);
	// const [bootcamper, setBootcamper] = useState('');
	const [selectedBootcamperData, setSelectedBootcamperData] = useState([]);

	const handleBootcamperChange = (e, id) => {
		e.preventDefault();
		// setBootcamper(id);
		updateDataForGraph(id);
	};
	useEffect(() => {
		fetch('https://global-scope.herokuapp.com/reflections?admin=true')
			.then((res) => res.json())
			.then((data) => {
				setAllData(data.payload);
				const reflectionsArray = data.payload.map((item) => {
					return [
						item.firstname,
						item.lastname,
						item.email,
						item.bootcamperid,
						item.reflection,
						item.created,
						item.confidence,
						item.overallfeeling,
						item.grateful,
						item.improvements,
					];
				});
				const filteredCsvData = [...columnNames, ...reflectionsArray];
				setCsvData(filteredCsvData);
			})
			.catch((err) => console.log(err));
	}, []);
	const updateDataForGraph = (id) => {
		const filteredData = allData.filter((reflection) => reflection.bootcamperid === id);
		setSelectedBootcamperData(filteredData);
	};
	return (
		<Layout>
			<div className=" flex flex-col justify-start p-2">
				{cvsData && (
					<>
						<div className=" flex justify-end w-full pr-4 mt-2">
							<CSVLink
								className="text-white bg-purple-900 btn-accent hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center shadow-md duration-300"
								data={cvsData}
							>
								Download Bootcamper Data
							</CSVLink>
						</div>

						<section className="flex flex-col items-start">
							<div className="flex">
								<BootcampersList
									allReflections={allData}
									handleBootcamperChange={handleBootcamperChange}
								/>
							</div>
							<p>The id is {JSON.stringify(selectedBootcamperData, null, 2)}</p>
						</section>
					</>
				)}
			</div>
		</Layout>
	);
}
