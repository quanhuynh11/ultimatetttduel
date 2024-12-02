import axios from "axios";
const API_BASE_URL = "https://674d089c54e1fca9290e200b.mockapi.io";
const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getWinners = async () => {
    try {
        const response = await api.get("/winners");
        return response.data;
    } catch (error) {
        console.error("error in fetching data: ", error);
        throw error;
    }
};

export const createWinners = async (winner) => {

    const data = { name: winner }

    try {
        const response = await api.post("/winners", data);
        return response.data;
    } catch (error) {
        console.error("error in creating data: ", error);
        throw error;
    }
};

export const deleteWinners = async (winnerID) => {
    try {
        const response = await api.delete(`/winners/${winnerID}`);
        return response.data;
    } catch (error) {
        console.error("error in deleting data: ", error);
        throw error;
    }
};

