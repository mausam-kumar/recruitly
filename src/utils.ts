import axios from "axios";

export const axiosFetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

export const baseURL = "https://api.recruitly.io"

export const apiKey = "HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const axiosPoster = async (url: string, payload: any) => {
    const response = await axios.post(url, payload);
    return response.data;
  };