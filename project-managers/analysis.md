# Features
Base on the requirements of the customer (Read more at requirements.txt), here we have some features in the web app, priority from top to bottom (most important on the top):

1. Create a Docker container that will run Next.js and MongoDB
2. Generate a shorten URL from a given URL
    - Make sure only support HTTP and HTTPS
3. Make sure the URL length must be less than 2000 characters
4. Make sure the shortened URL works by redirecting the user to the origin URL
5. Make sure each user can only create 5 shortened URLs a day
6. Make sure remove all unused shortened URLs after 3 days no use
7. UI: A place to allow the user enter the URL
8. UI: Allow the user to copy the newly created URL to the clipboard

# Technology
1. Docker
2. Nextjs framework - version - 14
3. Nodejs - version - lts/iron -> v20
4. MongoDB - version 7.0
5. Programming language: Typescript