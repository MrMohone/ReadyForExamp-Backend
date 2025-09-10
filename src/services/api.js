// src/services/api.js
import axios from "axios";

// Django backend base URL
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // your DRF API base
});

// Example endpoints
export const getExamTypes = () => API.get("examtypes/");
export const getSubjects = () => API.get("subjects/");
export const getResources = () => API.get("resources/");
