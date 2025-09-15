// src/services/api.js
import axios from "axios";

// Django backend base URL
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // DRF API base
});

// Example endpoints
export const getExamTypesAPI = () => API.get("examtypes/");
export const getMinistryResourcesAPI = () => API.get("ministryresources/");
export const getMinistryAllResourceAPI = () => API.get("ministryallresource/")
export const getMatricResourcesAPI = () => API.get("matricresources/");
