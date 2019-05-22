const baseUrl = "http://localhost:9000";

const defaultHeaders = () => ({
    'Content-Type': 'application/json'
});

const defaultAuthHeaders = (token) => ({
    'Content-Type': 'application/json',
    'Authorization': token
});

const request = (url, options) => {
    console.log('----API Request');
    console.log(url);
    console.log(options);
    return fetch(url, options)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }else{
          throw response;
        }
      }).catch(error => {
        console.log("=====shit happened");
        console.log(error);
    });
};

export const loginApi = (payload) => {
    const credentials = {
        ...payload
    };
    const url = `${baseUrl}/login`;
    const body = JSON.stringify(credentials);
    return request(url, { method: 'POST', headers: defaultHeaders(), body })
}

export const signupApi = (payload) => {
    const credentials = {
        ...payload
    };
    const url = `${baseUrl}/signup`;
    const body = JSON.stringify(credentials);
    return request(url, { method: 'POST', headers: defaultHeaders(), body })
}

export const fetchPostsApi = () => {
    const url = `${baseUrl}/posts`;
    return request(url, { method: 'GET' })
}

export const fetchPostApi = (payload) => {
    const url = `${baseUrl}/posts/${payload}`;
    return request(url, { method: 'GET' })
}

export const savePostApi = (payload, token) => {
    const post = {
        ...payload
    };
    const url = `${baseUrl}/posts/save`;
    const body = JSON.stringify(post);
    return request(url, { method: 'POST', headers: defaultAuthHeaders(token), body})
}

export const updatePostApi = (payload, token) => {
    const post = {
        ...payload
    };
    const url = `${baseUrl}/posts/update`;
    const body = JSON.stringify(post);
    return request(url, { method: 'POST', headers: defaultAuthHeaders(token), body})
}

export const deletePostApi = (payload, token) => {
    const url = `${baseUrl}/posts/${payload}`;
    return request(url, { method: 'DELETE', headers: defaultAuthHeaders(token)})
}

export const saveOrderApi = (payload, token) => {
    const order = {
        ...payload
    };
    const url = `${baseUrl}/orders/save`;
    const body = JSON.stringify(order);
    return request(url, { method: 'POST', headers: defaultAuthHeaders(token), body})
}