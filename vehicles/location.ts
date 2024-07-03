import {app_key} from "../secrets/app_key";
import Bus from "./bus";


export default class Location {
    latitude:number;
    longitude:number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    static async fromPostcode(postcode:string):Promise<Location>{
        const requestURL = `https://api.postcodes.io/postcodes/${postcode}`;

        const response = await fetch(requestURL);
        const jsonResponse = await response.json() as any;

        return new Location(jsonResponse.result.latitude, jsonResponse.result.longitude);
    }


}