import React from 'react';
import './App.css';
import { Point, LinkStation } from './model';
export const linkStations: LinkStation[] = [
	new LinkStation(0, 0, 10),
	new LinkStation(20, 20, 5),
	new LinkStation(10, 0, 12)
];

export const points: Point[] = [
	new Point(1, 2),
	new Point(100, 100),
	new Point(15, 10),
	new Point(18, 18)
];
export const getDistance = (
	linkStationCoordinates: LinkStation,
	pointCoordinates: Point
): number =>
	Math.sqrt(
		Math.pow(linkStationCoordinates.x - pointCoordinates.x, 2) +
			Math.pow(linkStationCoordinates.y - pointCoordinates.y, 2)
	);

export const getPower = (
	linkStation: LinkStation,
	pointCoordinates: Point
): number => {
	const stationReach = linkStation.reach;
	
	if (stationReach <= 0) {
		return 0;
	}
	const distance = getDistance(linkStation, pointCoordinates);

	if (distance > stationReach) {
		return 0;
	}
	return stationReach - distance;
};

export const getStationWithMostPower = (
	stations: LinkStation[],
	point: Point
): LinkStation => {
	let prevPower: number = 0;
	return stations.reduce((acc, station) => {
		const power = getPower(station, point);
		if (power) {
			if (acc && power > prevPower) {
				acc = Object.assign({}, station);
			} else {
				acc = Object.assign({}, station);
				prevPower = power;
			}
		}
		return acc;
	}, {} as LinkStation);
};

export const displayResult = (
	mostPowerfulStation: LinkStation,
	point: Point
): string => {
	return Object.entries(mostPowerfulStation).length
		? `Best link station for point (${point.x},${point.y}) is ${mostPowerfulStation.x}, ${mostPowerfulStation.y} with power ${mostPowerfulStation.reach}`
		: 'no link';
};
const App: React.FC = () => {
	return (
		<div className='App'>
			{points.map((point, i) => {
				return (
					<div key={i}>
						{displayResult(getStationWithMostPower(linkStations, point), point)}
            <hr></hr>
					</div>
				);
			})}
		</div>
	);
};

export default App;
