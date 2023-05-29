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
