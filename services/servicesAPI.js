import Axios from "axios";

import { DOMAIN_API } from "./domain";

export const vaccinesServices = {
    getApiVaccines: () => {
        return Axios({
            url: `${DOMAIN_API}/vacxin/show_all`,
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        }, );
    },
};

export const quanLyServices = {
    getAPIDemo: () => {
        return Axios({
            url: `${DOMAIN_API}/posts/1`,
            method: "GET",
        }, );
    },
}