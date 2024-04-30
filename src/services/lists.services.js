import instance from "./axios";

export const getUserListsRequest = (userId) => instance.get(`/user/${userId}/lists`)