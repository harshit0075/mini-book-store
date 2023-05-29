## React Redux Book Store

### Maximum Marks: 30

```
✅ Able to make submission: - 1 Mark
✅ Check Initial Redux Store Structure for Authentication: - 1 Mark
✅ Check Initial Redux Store Structure for Books: - 1 Mark
✅ Get request should be made for books when home page loads: - 2 Mark
✅ isLoading should update accordingly while making request: - 1 Mark
✅ Book state in store should update when books loads on homepage: - 2 Marks
✅ All books should be displayed on home page: - 1 Mark
✅ On checking filter url should be updated accordingly: - 2 Marks
✅ On checking sorting order url should be updated accordingly: - 2 Marks
✅ On checking filter and sorting together url should be updated accordingly: - 2 Marks
✅ On loading url with initial params should update the filter and sorting checkboxes accordingly: - 2 Marks
✅ On filtering books, the data on BookList component should change accordingly: - 1 Mark
✅ On sorting books, the data on BookList component should change accordingly: - 1 Mark
✅ On filtering, store state should update: - 2 Marks
✅ On sorting, store state should update: - 2 Marks
✅ On Login the store authReducer state should update accordingly: - 2 Marks
✅ user is redirected to login page while visiting /edit-book/:id, without authentication and should be redirected back to /edit-book/:id after login: - 2 Marks
✅ Name, Author and Number of pages data should be prefilled in input boxes : - 1 Mark
✅ On changing the data and clicking update button PATCH request should be made: - 2 Mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the json-server

npm run server
```

- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── BookCard.jsx
│    └── BookList.jsx
│    └── SideBar.jsx
├── >Pages
│    └── HomePage.jsx (Route:- "/")
│    └── LogIn.jsx (Route:- "/login")
│    └── EditBook.jsx (Private Route:- "/edit-book/:id")
│    └── MainRoutes.jsx (Add all Routes here)
└── >Redux
│    └── >AuthReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >BookReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── store.js
└── App.js
```

## Problem Statement

Create a Book Store, where user can see list of books on homepage. They can apply sort `(based on release_year)` and filter `(based on category)` on the list. They should be able to edit book details only if logged in.

### Step:- 1 Redux

- Create redux store, and use thunk middleware
- Create separate reducer as `authReducer` and `bookReducer` for authentication and books respectively.
- Use combineReducer
- All the API request will be made in `action.js`
- Initial state for `authReducer` should be

```
{
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
```

- Initial state for `bookReducer` should be

```
{
  isLoading: false,
  isError: false,
  books: [],
}
```

### Step:- 2 BookList

- Complete the `BookList` component.
- Update the store with the book data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of books in grid format inside div with `data-testid = "book-list"`.
- Use the `BookCard` component for showing book details, with the below constraints
- Every book card will have class `book-card`
  **Provide an edit button on every card with class `edit-book`**

```
- Show Image in image tag with class `book-image`
- Show Book name with class `book-name`
- Show Author with class `book-author`
- Show Category with class `book-category`
- Show Release year with class `book-year`
- Show Number of chapters with class `book-chapter`
* Do not add any extra text, See the Image provided to know what needs to be displayed *
```

**Provide a link to "/edit-book/:id" on a button with class `edit-book`**

<img width="1717" alt="Screenshot 2023-04-21 at 9 31 58 AM" src="https://user-images.githubusercontent.com/74458714/233820343-03ea04b6-a3bc-4ed2-a605-f85bd4b98e64.png">

### Step:- 3 Sorting and Filtering

**Sidebar UI is provided you have to write the logic**

- While checking or unchecking the filtering and sorting checkboxes the url should update accordingly
- Example url:-

```
- http://localhost:3000/?category=Novel&category=Thriller
- http://localhost:3000/?order=asc
- http://localhost:3000/?category=Science_Fiction&category=Thriller&order=asc
```

- Reverse should also be true, i.e. the checkboxes should be checked as per the initial params in the url
- Update the redux store as well with the sorted and filtered data
- The sorted and filtered data should be reflected on DOM as well
- The sorting and filtering should work together

### Step:- 4 Authentication and Edit

- Use `reqres.in` for login functionality
- Complete the `login` page.
- On successfull login update the redux store accordingly with isAuth and token.
- If the user is not authenticated and tries to visit `/edit-book/:id`, redirect him to `login` page
- On successfull log-in he should be redirected back to `/edit-book/:id`, where he was trying to visit, not any other page.
- Complete the `EditBook` page (UI is provided complete the functionality);
- User can visit the `EditBook` page by clicking edit button on `BookCard`.
- User can edit `book name`, `author` and `number of chapters`.
- The existing data should be prefilled in the input boxes
- Make PATCH request to update the server on clicking update button

<img width="1726" alt="Screenshot 2023-04-21 at 9 32 07 AM" src="https://user-images.githubusercontent.com/74458714/233820352-20368e45-fcd3-454d-ad5a-47a12a92eecc.png">
<img width="1725" alt="Screenshot 2023-04-21 at 9 32 44 AM" src="https://user-images.githubusercontent.com/74458714/233820357-51250d80-142c-48ba-ae7c-6c2a66994555.png">

### General Instructions:

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
