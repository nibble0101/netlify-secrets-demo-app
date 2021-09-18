# Netlify Secrets Demo

This app was created using [create-react-app](https://create-react-app.dev/). It is for demonstrating how to store netlify secrets. It is part of the article [how to access secret API keys using netlify functions in a react app](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/) which was published on freeCodeCamp. It is recommended you run this project while reading through the article to derive maximum benefit from it.

If you have any questions, feel free to open an issue here. I will be more than happy to help.

## How to run the app locally

To run the app locally on your machine, follow the steps below:

1. Fork this project under your own account.
2. Clone the forked project to your local machine using the command below. Do not forget to replace `GITHUB_USER_NAME` with your GitHub username.

   ```shell
   git clone https://github.com/GITHUB_USER_NAME/netlify-secrets-demo-app.git

   ```

   or

   ```shell
   git clone git@github.com:GITHUB_USER_NAME/netlify-secrets-demo-app.git

   ```

3. Run the command `npm install` to install dependencies.
4. Create `.env` file at the root of the project directory. Copy and paste the contents of [example.env](./example.env) file. Set the value of the environment variable `REACT_APP_TODO_BASE_URL` to `"https://jsonplaceholder.typicode.com/todos"` for the purpose of this demonstration.
5. Start the development server by running the command `npm start`.

## License

[MIT](./LICENSE)

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/955da7c3-5a19-4981-ab7d-5fd44ee457ee/deploy-status)](https://app.netlify.com/sites/netlify-secrets-demo-app/deploys)
