import Bus from "./vehicles/bus";
import getStopsOfNextFiveBuses from "./functions/getStopsOfNextFiveBuses";
import Location from "./vehicles/location";

async function main () {
    // const buses = await getStopsOfNextFiveBuses("490008660N");
    // console.table(buses);

    const postcode ="NW5 1TL";

    const location = await Location.fromPostcode(postcode)

    await stopPointsWithin(location);

}

async function printBusesAtNearestTwoStops(postcode:string){
    const location = Location.fromPostcode(postcode);
}

async function stopPointsWithin(location:Location) {
    const requestURL = `https://api.tfl.gov.uk/StopPoint/?lat=${location.latitude}&lon=${location.longitude}&stopTypes=NaptanPublicBusCoachTram&radius=200`;

    const response = await fetch(requestURL);
    const jsonResponse = await response.json() as any;

    console.log("test");

}

main();
