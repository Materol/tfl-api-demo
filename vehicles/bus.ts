export default class Bus {
    vehicleID: string;
    goingTowards: string;
    destination: string;
    secondsUntilArrival: number;

    constructor(vehicleID: string, goingTowards: string, destination: string, secondsUntilArrival: number) {
        this.vehicleID = vehicleID;
        this.goingTowards = goingTowards;
        this.destination = destination;
        this.secondsUntilArrival = secondsUntilArrival;
    }

    static parseFromJSON(busJSON: any) : Bus {
        return new Bus(busJSON.vehicleID, busJSON.towards, busJSON.destinationName, busJSON.timeToStation);
    }
}