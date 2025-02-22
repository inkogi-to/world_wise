// правильний код для ES-модулів
export default {
    env: {
        browser: true,
        node: true,
    },
    extends: ["eslint:recommended"],
    rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
    },
};
