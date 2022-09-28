import axios from "axios";
import { BASE_URL } from "../utils/request";

export const get = axios.create({
    baseURL: BASE_URL,
    method: 'get',
});

export const save = axios.create({
    baseURL: BASE_URL,
    method: 'post'
});

export const update = axios.create({
    baseURL: BASE_URL,
    method: 'put'
});

export const del = axios.create({
    baseURL: BASE_URL,
    method: 'delete'
});