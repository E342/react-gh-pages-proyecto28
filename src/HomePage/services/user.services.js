import axios from 'axios';
const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

const services = {};

services.login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if(response.ok) {
        const data = await response.json();
        return data;
    }
    return {};
}

services.verifyToken = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
        headers: {
            "Authorization": `Bearer ${ token }`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    return {};
}

  services.getAll = async (token, page=0) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    return await axios.get(`https://posts-pw2021.herokuapp.com/api/v1/post/all?limit=8&page=${page}`,
    config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  };

  services.getById = async (token, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    
    return await axios.get(`https://posts-pw2021.herokuapp.com/api/v1/post/one/${id}`,
    config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  };
  
  services.addPost = async (token, datos) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }

    return await axios.post("https://posts-pw2021.herokuapp.com/api/v1/post/create",
      datos, config
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  };
  
  services.putChanges = async (token, datos, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    return await axios.put(`https://posts-pw2021.herokuapp.com/api/post/update/${id}`,
    datos, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  };
  services.delete = async (token, datos, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    return await axios.patch(`https://posts-pw2021.herokuapp.com/api/v1/post/toggle/${id}`,
    datos, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  };
  services.addComment = async (token, datos, id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    return await axios.patch(`https://posts-pw2021.herokuapp.com/api/v1/post/comment/${id}`,
    datos, config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  };

export default services;