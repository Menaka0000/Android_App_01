import urlConfig from '../app/config/urlConfig';

class VehicleServices {
    save = async (data) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${urlConfig().baseURL}vehicles`, {
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

    getAll = async (userId) => {
        const promise = new Promise((resolve, reject) => {
            fetch(`${urlConfig().baseURL}vehicles/${userId}`, {
                method: 'GET'
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

}

export default new VehicleServices();