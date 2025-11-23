import { Employee } from "../../models/emploee.ts";
import { HttpResponse } from "../protocols.ts";


export interface IGetEmploeesController {
    handle(): Promise<HttpResponse<Employee[]>>;
}

export interface IGetEmploeesRepository{
    getEmploees(): Promise<Employee[]>
}