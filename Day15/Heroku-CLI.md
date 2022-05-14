# Heroku-CLI
How to deploy your server on Heroku using Heroku CLI
Before you start:
* go to [Heroku](https://id.heroku.com/login) and create an account
* Create an app
 
## Steps:
1. Install Heroku CLI: `npm install -g heroku`
2. Check the version number: `heroku --version`
3. Login to Heroku account:
   -  `heroku login` , used to login from the browser
   -  or `heroku login -i`, used to login from the CLI
4. From your local repo:
    - Link you local repo with heroku app:  `heroku git:remote -a app-name`
    - Push your code to Heroku: `git push heroku main`
5. Deploy your database: from Heroku app:
    - Go to "Resources" tab
    - Search for "Heroku Postgres" and add the free version
6. Add your config vars: from Heroku app:
    - Go to "Settings" tab
    - Click on "Reveal Config Vars"
    - Copy the value of "DATABASE_URL"
    - Add any other key, value you have in your `.env` file
7. Linking the schema to Heroku database:
    - In your terminal -> in the server folder -> `heroku pg:psql -f schema.sql --app HEROKU_APP_NAME_HERE`
    - You should see a similar message:
 ```
 --> Connecting to postgresql-transparent-07501
psql:schema.sql:1: NOTICE:  table "your table-name" does not exist, skipping
DROP TABLE
CREATE TABLE
 ```
 8. In your server file, replace the following code `const client = new pg.Client(process.env.DATABASE_URL)`, with:
 ```
 const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});
 ```

 9. Your server is ready, just click "Open app" 


## Resources:
* [Installing Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
* [Deploying with git](https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli)