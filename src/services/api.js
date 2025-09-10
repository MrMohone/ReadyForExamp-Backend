// src/services/api.js
import axios from "axios";

// Django backend base URL
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // your DRF API base
});

// Example endpoints
export const getExamTypesAPI = () => API.get("examtypes/");
export const getSubjectsAPI = () => API.get("subjects/");
export const getResourcesAPI = () => API.get("resources/");
