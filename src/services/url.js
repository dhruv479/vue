import uritemplate from "uritemplate";

const makeQueryParam = (queryParamMap = {}) => {
  let string = "?";
  let paramList;
  let index;
  if (queryParamMap) {
    Object.keys(queryParamMap).forEach((key) => {
      if (queryParamMap[key].constructor === Array) {
        paramList = queryParamMap[key];
        index = paramList.length;
        while (index) {
          index -= 1;
          string += `${key}[]=${paramList[index]}&`;
        }
      } else {
        string += `${key}=${queryParamMap[key]}&`;
      }
    });
  }
  return string;
};
export default {
  AUTH_LOGIN: `/auth/login`,
  AUTH_REGISTER: `/auth/register`,

  buildUrl(urlName, params, queryParam) {
    return (
      uritemplate.parse(this[urlName]).expand(params) +
      makeQueryParam(queryParam)
    );
  },
};
