const baseUrl = process.env.REACT_APP_API_URL;


export const fetchSinToken = async(endpoint, data, method = 'GET') => {
  const URL = `${ baseUrl }/${ endpoint }`;

  if( method === 'GET' ) {
    const resp = await fetch( URL );
    return await resp.json();
  }else{
    const resp = await fetch(URL, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(data)
    });

    return await resp.json();
  }
}

export const fetchConToken = async(endpoint, data, method = 'GET') => {
  const URL = `${ baseUrl }/${ endpoint }`;
  const token = localStorage.getItem('token')|| '' ;

  if( method === 'GET' ) {
    const resp = await fetch( URL, {
      headers : {
        'x-token' : token
      }
    });
    return await resp.json();
  }else{
    const resp = await fetch(URL, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token' : token
      },
      body : JSON.stringify(data)
    });

    return await resp.json();
  }
}