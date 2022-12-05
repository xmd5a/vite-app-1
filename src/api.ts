import axios from "axios";
import { ImagePayload } from "./types";

const API_URL = document.location.origin + "/api";

const getImages = () => {
  return axios.get(`${API_URL}/images`).then((response) => response.data);
};

const getImage = (imageId: string) =>
  axios.get(`${API_URL}/image/${imageId}`).then((response) => response.data);

const postImage = (data: ImagePayload) =>
  axios({
    method: "post",
    url: `${API_URL}/image`,
    data,
    headers: { "Content-Type": "multipart/form-data" },
  });

export { getImages, getImage, postImage };
