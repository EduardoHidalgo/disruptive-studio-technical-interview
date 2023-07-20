# Disruptive Studio Technical Test

This is the repository of my technical test for the company "Disruptive Studio".

The test consists of the development of a website with the following requirements:

- Must be published on Github
- A table that exposes the information of 3 cryptocurrencies (Bitcoin, Ethereum and Cardano).
- The table must be able to export its information in CSV and JSON.
- The positioning and design of the interface is at the discretion of the developer.
- The annual profit of each coin (Annual ROI), assuming that Bitcoin has a monthly return of 5%, Ether 4.2% and Cardano 1%.
- There must be a functionality called "value investment calculator", where the user can invest a certain amount of dollars, choose which cryptocurrency to invest in, and how much in each one.
- The investment is reflected in a "balance" which shows the result of the investment.

Requirements not described:

- Show a certain UI for cases of errors in environment variables, or in cases where the messari API returns a fetch error.

### Messari API Limits

Without an API key, requests are rate limited to 20 requests per minute and 1000 requests per day. Users that create an account will have slightly higher limits of 30 requests per minute and 2000 requests per day. PRO users have the highest limit at 60 requests per minute up to a maximum of 4000 requests per day. Contact us at support@messari.io if you need a higher limit.

## How to use this repo

Clone the repo and follow this instructions. You need to have Node.js and Yarn installed..

1. This repo use yarn as package manager. Run "yarn" in your cli to install the dependencies.
2. Create a .env file in the root directory with the following structure:

```text
MESSARI_KEY=""
NEXT_PUBLIC_MESSARI_KEY=""
NEXT_PUBLIC_REALTIME_FETCHING=true
```

3. Run in your cli the commando "yarn dev" to start the Next.js app.
