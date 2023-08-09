import instance from "./instance";

export const apiGetAllPost = () => {
  const url = `/posts`;
  return instance.get(url);
};

export const apiAddPost = (data) => {
  const url = `/posts`;
  return instance.post(url, data);
};

export const apiEditPost = (data) => {
  const url = `/posts/${data?.id}`;
  return instance.put(url, data);
};
export const apiRemovePost = (id) => {
  const url = `/posts/${id}`;
  return instance.delete(url);
};
export const apiReadDetailPost = (id) => {
  const url = `/posts/${id}`;
  return instance.get(url);
};
