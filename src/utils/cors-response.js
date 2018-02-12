const corsResponse = (callback, json, statusCode = 200, headers = {}) => {
    callback(null, {
        statusCode,
        headers,
        body: JSON.stringify(json),
    });
};

export default corsResponse;
