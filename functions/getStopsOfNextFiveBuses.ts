import {app_key} from "../secrets/app_key";
import Bus from "../vehicles/bus";

export default async function getStopsOfNextFiveBuses(stopID: string): Promise<Bus[]> {
    const requestURL = `https://api.tfl.gov.uk/StopPoint/${stopID}/Arrivals?app_key=${app_key}`;

    const response = await fetch(requestURL);
    const jsonResponse = await response.json() as any[];

    const nextFiveBuses = jsonResponse
        .map(Bus.parseFromJSON)
        .sort((bus1, bus2) => (bus1.secondsUntilArrival - bus2.secondsUntilArrival))
        .slice(0, 5);

    return nextFiveBuses;
}