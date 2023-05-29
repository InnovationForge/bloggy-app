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
