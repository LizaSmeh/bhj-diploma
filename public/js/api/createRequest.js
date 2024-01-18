/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    const array = [];
    if(options.method === 'GET') {
        if(options.data){
            Object.entries(options.data).forEach(
                ([key, value]) => (options.url += `${key}=${value}&`)
            ) 

            options.url = options.url.slice(0, -1);
        }
    } else {
        Object.entries(options.data).forEach(
            ([key, value]) => formData.append(key, value)
        ) 
    }

    try {
        xhr.open(options.method, options.url);
        xhr.send(formData);
    } catch (err) {
        options.callback(err, null)
    }

    xhr.responseType = 'json';

    xhr.onload = () => options.callback(xhr.error, xhr.response);
};
