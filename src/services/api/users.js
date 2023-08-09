import instance from "./instance";

export const apiEditUser = (data) => {
  const url = `/users/${data?.id}`;
  return instance.put(url, data);
};
export const apiReadDetailUser = (id) => {
  const url = `/users/${id}`;
  return instance.get(url);
};
