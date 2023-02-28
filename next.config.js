module.exports = () => {
    const rewrites = () => {
        return [
            {
                source: "/api",
                destination: "https://qxrxr0y7gc.execute-api.us-west-2.amazonaws.com/prod/api",

            },
        ];
    };
    return {
        rewrites,

    };
};
