import Axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToAPI = (form) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.post("http://localhost:4000/v1/blog/post", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("Post Success: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("Update Success: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
