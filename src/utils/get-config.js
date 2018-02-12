const getConfig = config => {
    if (process.env.NODE_ENV === 'production') {
        return config.prod;
    }
    return config.dev;
};

export default getConfig;
