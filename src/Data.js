const mainUrl = "http://127.0.0.1:8000/api/";

export const postData = async (formData, route) => {
  const url = mainUrl + route;
  const options = {
    method: "POST",
    body: formData,
  };

  const response = await fetch(url, options);
  if (response.status >= 200 && response.status <= 299) {
    const data = await response.json();
    return data;
  } else {
    // throw new Error(response.statusText);
    return "Error while accessing data. Please contact the admin...";
  }
};