# solstice-assessment

> Note: this app is meant to run in parallel with [solstice-assessment-api](https://github.com/jillburg7/solstice-assessment-api)

## Running the app locally

1. Clone [solstice-assessment-api](https://github.com/jillburg7/solstice-assessment-api) and follow setup instructions before running this React app.
2. Once the backend server is running, in another terminal window navigate to the `solstice-assessment` directory. 
3. Install dependencies locally by running:
    ```
    yarn
    ```
4. Once installed, run:
    ```
    yarn start
    ```
5. Navigate to [http://localhost:3000/](http://localhost:3000/)

## Assessment Directions
Given this JSON file, you are asked to build a web app that should meet these requirements:
- a backend api: preferably using Nodejs, but you can use any other backend language.
- a client server: using React.

### Backend API (see [solstice-assessment-api](https://github.com/jillburg7/solstice-assessment-api))
1. should contain the json file with the customers and accounts information and should serve the data contained within the file when requested.

### Client Server (this repo)
1. In the main view/component: display in a table a list of all the customers provided in the file.
2. In a separate component: display in a table a list of all the accounts provided in the file.

When a user clicks on a single customer on the table. the user is taken to a profile view containing information about that specific customer + a table with a list of all the accounts associated with the customer.

Please send back your completed assessment by 6pm on Friday 6/26. You may send us a link to a zip containing your project or send it back to us by email.  A link to a GitHub repository would be preferred, as well as a live link to view the finished product.
