import instance from "./instance";

export const Signin = (data) => {
  const url = `/signin`;
  return instance.post(url, data);
};
export const Signup = (data) => {
  const url = `/signup`;
  return instance.post(url, data);
};
