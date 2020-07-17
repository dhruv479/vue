const parseJwt = (token) => {
  if (token === "" || token === null) {
    return null;
  }
  const base64Url = token.split(".")[1];
  if (typeof base64Url === "undefined") {
    return null;
  }
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(window.atob(base64));
};

export default {
  parseJwt,
  getUserId() {
    return parseJwt(localStorage.getItem("auth")).id;
  },
  getQueryStringValue(key) {
    return decodeURIComponent(
      window.location.search.replace(
        new RegExp(
          `^(?:.*[&\\?]${encodeURIComponent(key).replace(
            /[.+*]/g,
            "\\$&"
          )}(?:\\=([^&]*))?)?.*$`,
          "i"
        ),
        "$1"
      )
    );
  },
  isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  objectFlip(obj) {
    const ret = {};
    Object.keys(obj).forEach((key) => {
      ret[obj[key]] = key;
    });
    return ret;
  },
};
