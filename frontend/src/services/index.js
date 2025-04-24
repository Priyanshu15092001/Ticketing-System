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

    return res;
  } catch (error) {
    console.log(err);
    throw err;
  }
}

export async function getAllMembers() {
  try {
    const res = await fetch(`${URL}/api/teams`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    return res;
  } catch (error) {
    console.log(err);
    throw err;
  }
}

export async function addMember(formData){
  try {
    const res = await fetch(`${URL}/api/teams`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify(formData)
    })

    return res
  } catch (err) {
      console.error(err);
      throw err;
      
  }
}

export async function editMember(formData,id){
  try {
    const res = await fetch(`${URL}/api/teams/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    });

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteMember(id){
  try {
    const res =await fetch(`${URL}/api/teams/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })

    return res
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTickets(status){

  const query = new URLSearchParams({status});
  console.log(query);
  
  try {
    const res=await fetch(`${URL}/api/tickets?${query}`,{
      method: "GET",
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    return res
  } catch (error) {
    console.error(error);
    throw error;
    
  }
}

export async function getMessages(id){
  try {
    const res=await fetch(`${URL}/api/messages/${id}`,{
      method:"GET",
    })

    return res
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function reassignTicket(newUser,id){
  try {
    const res = await fetch(`${URL}/api/tickets/${id}/reassign`,{
      method:"PUT",
      headers: {
        "Content-Type" : "application/json",
        Authorization: localStorage.getItem("token")
      },
      body:JSON.stringify({newAssigneeId:newUser})
    })
    return res;
  } catch (error) {
    console.error(error);
    throw error
    
  }
}

export async function updateTicketStatus(id){
  try {
    const res = await fetch(`${URL}/api/tickets/${id}/status`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      },
      body:JSON.stringify({status:"resolved"})
    })

    return res

  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function sendMessages(id,message){
  try {
    const res = await fetch(`${URL}/api/messages/${id}/send`,{
      method:'POST',
      headers:{
        "content-type":'application/json',
      },
      body:JSON.stringify(message),
    })

    return res;
  } catch (error) {
    console.error(error);
    throw error
    
  }
}