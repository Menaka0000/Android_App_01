import baseURL from '../app/config/urlConfig';
import urlConfig from '../app/config/urlConfig';

class UserServices {
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${urlConfig().baseURL}users`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then(async (res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
        return await promise;
    };

    reqForLogin = async (data) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${urlConfig().baseURL}login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then(async (res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
        return await promise;
    };
    /*
        putCustomer = async (data) => {
            const promise = new Promise((resolve, reject) => {
                axios.put('customer', data)
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        };

        deleteCustomer = async (params) => {
            const promise = new Promise((resolve, reject) => {
                axios.delete('customer', {params: params})
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        };*/
}

export default new UserServices();