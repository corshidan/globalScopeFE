import React from 'react';
import Layout from '../Layout';
import { CSVLink } from 'react-csv';
import { useState, useEffect } from 'react';
import BootcampersList from '../BootcampersList';
import AdminChart from '../AdminChart';
import { getPreviousDate } from '../../libs/helperFunctions';
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
	const [filterDate, setFilterDate] = useState('2010-01-01');
	const [bootcamper, setBootcamper] = useState({ name: '', id: 0 });
	const [selectedBootcamperData, setSelectedBootcamperData] = useState([]);

	const handleBootcamperChange = (id, name) => {
		setBootcamper({ ...bootcamper, id: id, name: name });
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
	const updateDataForGraph = (id = bootcamper.id, date = filterDate) => {
		const filteredData = allData.filter((reflection) => {
			return (
				reflection.bootcamperid === id && Date.parse(reflection.created) >= Date.parse(date)
			);
		});
		setSelectedBootcamperData(filteredData);
	};
	useEffect(() => {
		updateDataForGraph(bootcamper.id, filterDate);
	}, [filterDate, bootcamper]);
	const days = {
		'2010-01-01': 'All reflections',
		[getPreviousDate()]: 'Since yesterday',
		[getPreviousDate(3)]: 'Last 3 days',
		[getPreviousDate(7)]: 'Last 7 days',
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

						<section className="flex flex-col items-center ">
							<div className="flex flex-col ml-2">
								<BootcampersList
									allReflections={allData}
									changeBootcamper={handleBootcamperChange}
									filterDate={filterDate}
									changeDate={setFilterDate}
								/>
							</div>
							{/* <div>
								{' '}
								{selectedBootcamperData.map((item, i) => {
									return <p key={i}>{JSON.stringify(item)}</p>;
								})}
							</div> */}
							<div className="flex flex-col justify-center align-center mt-6 w-2/3">
								<div>
									<p className=" ml-5 text-sm text-gray-500">
										{bootcamper.name}
										<span className="font-bold ml-2"> {days[filterDate]}</span>
									</p>
								</div>
								<div>
									<AdminChart graphData={selectedBootcamperData} />
								</div>
							</div>
						</section>
					</>
				)}
			</div>
		</Layout>
	);
}
