import {app_key} from "../app_key";
import Bus from "../vehicles/bus";

export default async function getStopsOfNextFiveBuses (stopID: string) : Promise<Bus[]> {
    const request = `https://api.tfl.gov.uk/StopPoint/${stopID}/Arrivals?app_key=${app_key}`;
    const response = await fetch(request);
    const jsonResponse = await response.json() as any;
    const buses = jsonResponse.map(Bus.parseFromJSON);
    const sortedBuses = buses.sort((bus1: Bus, bus2: Bus) => (bus1.secondsUntilArrival - bus2.secondsUntilArrival));
    const nextFiveBuses = sortedBuses.slice(0, 5);
    return nextFiveBuses;
}