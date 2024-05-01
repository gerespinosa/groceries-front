import instance from "./axios";

export const getUserListsRequest = (userId) => instance.get(`/user/${userId}/lists`) // USER LISTS

export const createListRequest = (userId, listName) => instance.post(`/user/${userId}/lists/new`, { name: listName });

