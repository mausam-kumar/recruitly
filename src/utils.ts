import axios from "axios";

export const axiosFetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export const baseURL = "https://api.recruitly.io"

export const apiKey = "HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE"