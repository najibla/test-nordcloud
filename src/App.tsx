import React from 'react';
import './App.css';
import { Device, LinkStation } from './model';
import Setup from './components/setup/Setup';

export const linkStations: LinkStation[] = [
	new LinkStation(0, 0, 10),
	new LinkStation(20, 20, 5),
	new LinkStation(10, 0, 12)
];

export const devices: Device[] = [
	new Device(1, 2),
	new Device(100, 100),
	new Device(15, 10),
	new Device(18, 18)
];

/**
 * @description calculates the distance between two cartesian points
 * @param linkStationCoordinates coordinates of the station of interest
 * @param deviceCoordinates coordinates of the device
 */
export const getDistance = (
	linkStationCoordinates: LinkStation,
	deviceCoordinates: Device
): number =>
	// pythagoras triangle formula
	Math.sqrt(
		Math.pow(linkStationCoordinates.x - deviceCoordinates.x, 2) +
			Math.pow(linkStationCoordinates.y - deviceCoordinates.y, 2)
	);

/**
 * @description get power of a specific linkstation vis-a-vis a device using the formula provided.
 * @param linkStation station of interest
 * @param deviceCoordinates device of interest
 * @returns the power of the linkstation or 0
 */

export const getPower = (
	linkStation: LinkStation,
	deviceCoordinates: Device
): number => {
	const stationReach = linkStation.reach;
	// if reach is 0 or negative let's not continue.
	if (stationReach <= 0) {
		return 0;
	}
	const distance = getDistance(linkStation, deviceCoordinates);
	// according to requirements
	if (distance > stationReach) {
		return 0;
	}
	return stationReach - distance;
};

/**
 * @description Gets the station with the most power
 * @param stations All stations
 * @param device device of interest
 * @returns the station with the most power for the device, or an empty object
 */
export const getStationWithMostPower = (
	stations: LinkStation[],
	device: Device
): LinkStation => {
	// keep a reference to the previous power for later comparison
	let prevPower: number = 0;
	return [...stations].reduce((acc, station) => {
		const power = getPower(station, device);
		// if power is not 0
		if (power) {
			if (acc && power > prevPower) {
				acc = Object.assign({}, station);
			} else {
				acc = Object.assign({}, station);
				prevPower = power;
			}
		}
		// if power is 0, just proceed to next station
		return acc;
	}, {} as LinkStation);
};

/**
 * @description Prints a user friendly message showing the coordinates and reach of the most powerful station, or that there is no link if none
 * @param mostPowerfulStation Result of getStationWithMostPower method
 * @param device device of interest
 */
export const displayResult = (
	mostPowerfulStation: LinkStation,
	device: Device
): string =>
	/* Checking object.entries to make sure we dont have an empty object. */
	Object.entries(mostPowerfulStation).length
		? `Best link station for device (${device.x},${device.y}) is ${mostPowerfulStation.x}, ${mostPowerfulStation.y} with power ${mostPowerfulStation.reach}`
		: `no link for device ${device.x}, ${device.y}`;

const App: React.FC = () => {
	return (
		<div className='App'>
			<Setup stations={linkStations} devices={devices}></Setup>
			<div className='section'>
				<div className='title'>Results:</div>
				{devices.map((device, i) => {
					return (
						<div key={i}>
							{displayResult(
								getStationWithMostPower(linkStations, device),
								device
							)}
						</div>
					);
				})}
			</div>
			<a href='https://github.com/najibla/test-nordcloud/' target='blank'>
				View on git
			</a>
		</div>
	);
};

export default App;
