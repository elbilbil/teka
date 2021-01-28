import { LOGIN_API_ENDPOINT} from './configRoutes'

export const loginUserService = (request) => {
    const parameters = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request.user)
    };

    return fetch(LOGIN_API_ENDPOINT, parameters)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};
