# BloggyApp

This is a blogging platform where users can create and publish blog posts. Implement features like user authentication, creating, editing, and deleting blog posts, and displaying a list of published posts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Functional overview
Let's break down the user journey for the blogging platform
1. User Registration and Authentication:
    * Users visit the website and are presented with a registration or login page.
    * New users can create an account by providing their email and password, and existing users can log in using their credentials.
    * Once authenticated, users are granted access to the platform's features.
2. Creating a Blog Post:
    * Authenticated users can navigate to a "Create Post" page or a dashboard where they can manage their posts.
    * On the "Create Post" page, users can enter a title, content, and any relevant metadata (e.g., tags, categories) for their blog post.
    * Users can also upload images or include media in their posts if desired.
    * After completing the post, users can click a "Publish" button to make their blog post visible to others.
3. Editing and Updating a Blog Post:
    * Authenticated users can access their published blog posts from their dashboard or a dedicated "Manage Posts" page.
    * From the list of their posts, users can select a specific post to edit.
    * Users are presented with a form pre-filled with the existing content of the selected post, allowing them to make changes.
    * Once the desired edits are made, users can save the updated post.
4. Deleting a Blog Post:
    * Authenticated users can navigate to their dashboard or "Manage Posts" page.
    * Users can select a specific post from their list of published posts.
    * Users are presented with an option to delete the selected post.
    * Upon confirmation, the post is permanently removed from the platform.
5. Viewing Published Blog Posts:
    * Visitors and authenticated users can browse the platform's homepage or a dedicated "Blog" page.
    * The page displays a list of published blog posts, usually in a chronological order with the latest posts at the top.
    * Each blog post entry typically includes the title, author, publication date, and a brief excerpt or preview of the content.
    * Clicking on a blog post entry allows users to view the full content of the post, including any media or comments.

Additionally, you can consider implementing features like:
* Commenting on blog posts: Users can leave comments on published posts to engage in discussions.
* User profiles: Users can have their own profiles, which display their published posts and other relevant information.
* Search functionality: Users can search for specific blog posts based on keywords, tags, or categories.
* Pagination: When there is a large number of blog posts, pagination can be implemented to display a limited number of posts per page.
Remember to handle appropriate authorization checks and validations to ensure that only the owner of a blog post can edit or delete it.

## Modular Structure of the application
Here's a suggested Angular app component and service structure for the blogging platform:
1. Components:
    * RegistrationComponent: Handles user registration functionality.
    * LoginComponent: Manages user login and authentication.
    * CreatePostComponent: Allows users to create new blog posts.
    * EditPostComponent: Enables users to edit existing blog posts.
    * PostListComponent: Displays a list of published blog posts.
    * PostDetailsComponent: Shows the full content of a selected blog post.
    * DashboardComponent: Provides a user dashboard for managing posts.
    * HeaderComponent: Contains the navigation menu and user authentication status.
    * FooterComponent: Displays the footer section of the application.
2. Services:
    * AuthService: Handles user authentication, registration, and login.
    * PostService: Manages the CRUD (Create, Read, Update, Delete) operations for blog posts.
    * UserService: Handles user-related operations, such as retrieving user profiles.
3. Routing:
    * Define routes in the AppRoutingModule to map different URLs to the corresponding components.
    * Example routes: '/register', '/login', '/create-post', '/edit-post/:id', '/posts', '/posts/:id', '/dashboard'.
4. API Integration:
    * If your application requires interaction with a backend server, create a separate service, such as ApiService, to handle API calls for user authentication, post creation, retrieval, updates, and deletions.
5. Guards:
    * Implement guards to protect routes that require authentication. For example, an AuthGuard can be used to prevent unauthorized access to the '/create-post' or '/dashboard' routes.
6. Models:
    * Define models, such as User and Post, to represent the data structures used in the application. These models can be used for type checking, data validation, and consistency.
    * Remember to organize your components, services, and models in separate directories and import them as needed in the relevant files. Use Angular's dependency injection to inject services into components where necessary.

Additionally, you may need to consider other supporting components, such as forms for user input, modals for confirmations, and error handling components for displaying error messages.

This structure provides a basic outline for building the blogging platform with user authentication, post creation, editing, and deletion functionalities. Feel free to adapt and expand upon this structure based on your specific project requirements.

## Folder structure overview
In the typical Angular project structure, the components, services, models, guards, and other related folders would be inside the src/app directory. The app directory is the root directory for your Angular application.

```css
src
└── app
    ├── components
    │   ├── registration
    │   │   ├── registration.component.ts
    │   │   ├── registration.component.html
    │   │   ├── registration.component.css
    │   │   └── ...
    │   ├── login
    │   │   ├── login.component.ts
    │   │   ├── login.component.html
    │   │   ├── login.component.css
    │   │   └── ...
    │   ├── posts
    │   │   ├── post-list
    │   │   │   ├── post-list.component.ts
    │   │   │   ├── post-list.component.html
    │   │   │   ├── post-list.component.css
    │   │   │   └── ...
    │   │   ├── post-details
    │   │   │   ├── post-details.component.ts
    │   │   │   ├── post-details.component.html
    │   │   │   ├── post-details.component.css
    │   │   │   └── ...
    │   │   └── ...
    │   ├── dashboard
    │   │   ├── dashboard.component.ts
    │   │   ├── dashboard.component.html
    │   │   ├── dashboard.component.css
    │   │   └── ...
    │   ├── shared
    │   │   ├── header
    │   │   │   ├── header.component.ts
    │   │   │   ├── header.component.html
    │   │   │   ├── header.component.css
    │   │   │   └── ...
    │   │   ├── footer
    │   │   │   ├── footer.component.ts
    │   │   │   ├── footer.component.html
    │   │   │   ├── footer.component.css
    │   │   │   └── ...
    │   │   └── ...
    │   └── ...
    ├── services
    │   ├── auth.service.ts
    │   ├── post.service.ts
    │   ├── user.service.ts
    │   ├── api.service.ts
    │   └── ...
    ├── models
    │   ├── user.model.ts
    │   ├── post.model.ts
    │   └── ...
    ├── guards
    │   ├── auth.guard.ts
    │   └── ...
    └── ...

```
## Style Guide -  Bootstrap
Step 1: Install Bootstrap Package
Run the following command in your Angular project's root directory to install Bootstrap:
```sh
npm install bootstrap
```
Step 2: Import Bootstrap Styles
Open the styles.scss file in the src directory and add the following line to import Bootstrap styles:
```css
@import '~bootstrap/dist/css/bootstrap.css';
```
This will import the compiled CSS file of Bootstrap into your application.

Step 3: Add Bootstrap JavaScript (Optional)
If you need to use Bootstrap's JavaScript components, such as modals or tooltips, you can add the Bootstrap JavaScript file to your application.

Open the angular.json file in the root directory of your Angular project. In the "scripts" section, add the Bootstrap JavaScript file path:
```json
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.js"
]
```
Step 4: Verify Bootstrap Integration
To verify that Bootstrap is correctly integrated into your application, you can add a Bootstrap component to one of your existing Angular components.

For example, open the app.component.html file and add a Bootstrap alert component:
```html
<div class="alert alert-primary" role="alert">
  This is a Bootstrap alert.
</div>
```
Run your Angular application with the ng serve command, and you should see the Bootstrap alert rendered with the appropriate styling.

That's it! Bootstrap is now added and ready to be used in your Angular application. You can explore the Bootstrap documentation and start incorporating Bootstrap components and styles into your Angular templates.

## Backend REST API endpoints
To support all the functionality of a blogging platform with user authentication, creating, editing, and deleting blog posts, and displaying a list of published posts, you would typically need the following REST endpoints on the backend:

1. User Registration:
    * **POST /api/register**: Register a new user by providing user details (e.g., username, email, password).
2. User Login:
    * **POST /api/login**: Authenticate the user by providing login credentials (e.g., username/email and password) and return an authentication token or session.
2. User Logout:
    * **POST /api/logout**: Invalidate the current user's authentication token or session.
3. Create Blog Post:
    * **POST /api/posts**: Create a new blog post by providing the post details (e.g., title, content) along with the authenticated user's credentials.
4. Get All Published Blog Posts:
    * **GET /api/posts**: Retrieve a list of all published blog posts.
5. Get Single Blog Post:
    * **GET /api/posts/:id**: Retrieve a single blog post by providing its unique identifier (e.g., post ID).
6. Update Blog Post:
    * **PUT /api/posts/:id**: Update an existing blog post by providing the post ID and updated details.
7. Delete Blog Post:
    * **DELETE /api/posts/:id**: Delete a blog post by providing its unique identifier.
These are just basic examples of REST endpoints that cover the essential functionality of a blogging platform. Depending on your specific requirements, you may need additional endpoints for features like user profile management, comment posting, search functionality, etc.

Note that the endpoints provided here are just placeholders and may need to be customized to match your backend implementation and route structure.

## Authentication Implementation
Let's deep dive into the user login functionality in a blogging platform. User login allows users to authenticate themselves with the application using their credentials (e.g., username/email and password) and gain access to the platform's features.

Here's an overview of the steps involved in the user login process:

* User Interface:
The login functionality is typically provided through a login form in the frontend application.
The form includes input fields for the username/email and password, as well as a submit button to initiate the login process.
* User Input:
When the user enters their username/email and password in the login form, the values are captured by the frontend application.
Frontend Validation:

The frontend application should perform basic validation on the user input, such as checking for empty fields or ensuring the input meets any required format criteria.
* API Request:
Once the user input is validated, the frontend application sends an HTTP request to the backend API endpoint responsible for user login (e.g., POST /api/login).
The request typically includes the username/email and password in the request body.
* Backend Authentication:
On the backend, the server receives the login request and validates the user credentials.
The backend verifies the provided username/email and password against the stored user data, such as in a database.
The backend may perform additional security measures, such as hashing the password and comparing it with the hashed version stored in the database.
* Authentication Token/Session:
If the user credentials are valid, the backend generates an authentication token or creates a session for the authenticated user.
The authentication token or session is associated with the user's identity and is used to maintain the user's authenticated state throughout their session.
* Response:
The backend sends a response to the frontend indicating the success or failure of the login attempt.
If the login is successful, the response typically includes the authentication token or session ID.
If the login fails, the response may include an error message to be displayed on the frontend.
* Frontend Handling:
The frontend application receives the login response from the backend.
If the login was successful, the frontend can store the authentication token or session ID in local storage or a cookie for subsequent requests.
If the login failed, the frontend can display an error message to the user, indicating that the login was unsuccessful.
* Redirect or Update UI:
Upon successful login, the frontend application can redirect the user to the desired page or update the UI to reflect the authenticated state.
This may include displaying user-specific information, providing access to protected features, or redirecting to the user's dashboard.
That's the general flow of the user login process. Remember that the implementation details may vary based on your specific application requirements and the backend authentication mechanism being used (e.g., tokens, sessions, JWT, etc.).

## Add json stub server to this app
To add a JSON stub server to your Angular app, you can use tools like json-server to create a mock backend that serves JSON data. This allows you to simulate API responses during development and testing. Here's how you can set it up:

Step 1: Install json-server
Run the following command in your project's root directory to install json-server:

```sh
npm install -g json-server
```
Step 2: Create a JSON file with mock data
Create a JSON file (e.g., db.json) in your project's root directory and populate it with sample data that represents the structure of your backend API.

Example db.json:
```json
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com", "password": "password123" }
  ],
  "posts": [
    { "id": 1, "title": "First Post", "content": "This is the content of the first post.", "userId": 1 }
  ]
}

```
Step 3: Start the JSON server
In your terminal, navigate to the project's root directory and run the following command:
```css
json-server --watch db.json
```
This will start the JSON server and load the db.json file as the data source.

Step 4: Test the API endpoints
The JSON server will create RESTful API endpoints based on the data in db.json. For example, using the sample data above, you can access the following endpoints:

* Users: GET /users, GET /users/{id}
* Posts: GET /posts, GET /posts/{id}
Make API requests to these endpoints using tools like cURL or Postman to verify that the JSON server is serving the data correctly.

Step 5: Integrate with your Angular app
In your Angular app, update the API URLs to point to the JSON server instead of the actual backend server. For example, if you were using http://localhost:3000 as the base URL for your backend API, update it to http://localhost:3000/users or http://localhost:3000/posts to fetch user or post data from the JSON server.

By using json-server as a mock backend, you can develop and test your Angular app using realistic API responses without relying on a live backend during the early stages of development.

Note: When you're ready to switch to a real backend, you will need to update the API URLs in your Angular app to point to the actual server.

it is possible to add json-server as part of the development process so that ng serve starts both your Angular app and the JSON server simultaneously. Here's how you can achieve that:

1. Install concurrently package:
Run the following command to install the concurrently package as a development dependency in your Angular project:
```sh
npm install --save-dev concurrently
```
2. Update the scripts section in package.json:
Modify the scripts section in your package.json file to include a new script that starts both ng serve and json-server. Here's an example:
```json
"scripts": {
  "start": "concurrently \"ng serve\" \"json-server --watch db.json\""
}
```
In the above configuration, concurrently is used to run two commands in parallel: ng serve for starting the Angular development server and json-server for running the JSON stub server.

3. Start the development server:
To start the development server along with the JSON server, run the following command:
```sh
npm start
```
This will execute the start script defined in the package.json file, which in turn will start both the Angular app and the JSON server concurrently.

Now, when you run npm start, it will start your Angular app using ng serve and also launch the JSON server using json-server. This allows you to develop and test your app while having the JSON stub server running in the background to simulate API responses.

Please note that you need to make sure the db.json file is present in your project's root directory and contains the necessary data for the JSON server to serve. Adjust the script or db.json path as needed based on your project structure.

Remember to use this setup only for development purposes, as the JSON stub server is not intended for production use.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Command references

### Guard Implementation References
* [CanActivate is deprecated. How to refactor](https://stackoverflow.com/questions/75816948/canactivate-is-deprecated-how-to-refactor)
* [Style - startbootstrap-blog-post](https://github.com/StartBootstrap/startbootstrap-blog-post)
* [Style - startbootstrap-blog-home](https://github.com/StartBootstrap/startbootstrap-blog-home)
