export async function doPost(url: string, data: any) {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token') || ''
    },
    body: JSON.stringify(data)
  }

  return await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);
};

export async function doGet(url: string) {

  const options = {
    headers: {
      'token': localStorage.getItem('token') || ''
    }
  }

  return fetch(`${process.env.REACT_APP_HOST}/${url}`, options);
};