# solstice-assessment

# TODO

1. Make profile sexier
    1. the <div> with the reason for joining can get ugly
    2. the split column format might be a bad idea since multiple lines in the reasoning for join text could make the two columns uneven heights
2. Routing between pages would be better than the one 'Return to all Customers' button...

## Running the app locally

In your CLI run:
```
yarn start
```


## Directions
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