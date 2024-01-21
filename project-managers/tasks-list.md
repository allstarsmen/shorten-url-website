# Tasks list

- [x] Create a development environment for the whole team.
    - Using Docker to create a development environment
    - It should have two docker containers:
        - Web app: contain the web app and should auto start development mode when docker container started
        - Database: contain the MongoDb
- [x] Generate a shorten URL from a given URL
    - [x] Make sure only support HTTP and HTTPS
    - [x] Make sure the URL length must be less than 2000 characters
    - [x] Make sure all characters in the shortened URL are URL friendly.
    - [x] Make sure the shortened Url must have 8 characters length
- [x] Make sure the shortened URL works by redirecting the user to the origin URL
- [ ] Make sure each user can only create 5 shortened URLs a day
- [ ] Make sure remove all unused shortened URLs after 3 days no use
- [x] UI: A place to allow the user enter the URL
- [x] UI: Allow the user to copy the newly created URL to the clipboard