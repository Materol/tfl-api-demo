import Bus from "./vehicles/bus";
import getStopsOfNextFiveBuses from "./functions/getStopsOfNextFiveBuses";

async function main () {
    const buses = await getStopsOfNextFiveBuses("490008660N");
    console.table(buses);
}
console.log("Starting");
main();
