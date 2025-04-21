const URL = import.meta.env.VITE_BACKEND_URL;
export async function signup({ firstName, lastName, email, password }) {
  try {
    const res = await fetch(`${URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function login({ email, password }) {
  try {
    const res = await fetch(`${URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getProfile() {
  try {
    const res = await fetch(`${URL}/api/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });

    return res;
  } catch (error) {
    console.log(err);
    throw err;
  }
}

export async function editProfile(formData) {
  try {
    const res = await fetch(`${URL}/api/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    });

    return res
  } catch (error) {
    console.log(err);
    throw err;
  }
}
