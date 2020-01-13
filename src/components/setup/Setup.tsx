import * as React from 'react';
import { LinkStation, Device } from '../../model';

/** Show the link stations and devices used  */

const Setup = (props: any) => {
	return (
		<div>
			<div className='section'>
				<div className='title'>Stations:</div>
				<div>
					{JSON.stringify(
						// convert objects to array of values
						props.stations.map((station: LinkStation) => Object.values(station))
					)}
				</div>
			</div>
			<div className='section'>
				<div className='title'>Devices</div>
				<div>
					{JSON.stringify(
						// convert objects to array of values
						props.devices.map((device: Device) => Object.values(device))
					)}
				</div>
			</div>
		</div>
	);
};

export default Setup;
