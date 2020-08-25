import { Context, APIGatewayEvent } from "aws-lambda";
import axios, { AxiosResponse } from 'axios';
import * as dotenv from "dotenv";
import { Appliances } from "./model";
dotenv.config();

export async function handler(event: APIGatewayEvent, context?: Context): Promise<string> {
    const token = process.env['REMO_TOKEN'];
    const baseRequest = axios.create({
        baseURL: `https://api.nature.global`,
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'json'
    });
    let res: AxiosResponse<Appliances> | void = await baseRequest.post<Appliances>(`/1/appliances/${process.env['DEVICE_ID']}/aircon_settings`,
        {
            params: {
                air_direction: 7
            }
        })
        .catch(e => {
            console.error(e);
        });

    console.log(res);

    return res ? 'success!' : 'failured';
}
