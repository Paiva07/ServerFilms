export const API_URL = 'http://localhost:3000';

export function GET_FILMS() {
  return {
    url: API_URL + '/films',
    options: {
      method: 'GET',
    },
  };
}
export function GET_USER() {
  return {
    url: API_URL + '/user',
    options: {
      method: 'GET',
    },
  };
}

export function DELETE_FILMS(id) {
  return {
    url: API_URL + `/films/${id}`,
    options: {
      method: 'DELETE',
    },
  };
}
export function POST_FILMS(body) {
  return {
    url: API_URL + '/films',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PUT_FILMS(id, body) {
  return {
    url: API_URL + `/films/${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
