const URL = import.meta.env.VITE_BACKEND_URL;
export async function signup({ firstName,lastName ,email, password }) {
    try {
        const res = await fetch(`${URL}/api/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName,lastName, email, password}),
        })
        // const data = await res.json();
        // const status = res.status
        // return {data,status}
        return res
    }
    catch (err) {
        console.log(err);
        throw err;
    }

}