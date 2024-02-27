# tech-trendz-news

# SheldonNews A HackerNews client that shows a list of trending posts from YCombinator. 

## Screens ### 
Home Page Displays a list of trending posts from HackerNews. Add dark mode functionality.
- **Behavior:** Fetches and updates the posts from the HackerNews API. On tap, triggers the `PostList` to refresh the posts.
 - **Layout:** Contains a 'Header', a 'Teaser', a 'SearchField', a 'PostList', an 'EmailOptin', a 'Footer' and 'Cookie Consent'. Content max-width: 940 px. Add appropriate white space between sections to improve readability.

#Header#
Layout: 
	- Header should have two rows: main-header, multicolored line, sub-header with teaser-text.
	- Main-header: Dark background color in both white- and darkmode. Align blog title to the left, dark mode and refresh icons to the right. Icons have to be white in both dark and white mode, have no button background color and slightly darker icon color on click and on hover.
	- Multicolored line: A border line with multiple colors (5-6) to  make layout interesting. 
	- Sub-header: Add teaser text: "Discover the future of technology today and be part of the conversation that shapes our tomorrow."

#Teaser
Add teaser text: "Stay ahead of the curve with the latesttech buzz!⚡". Center text.

#SearchField
Make searchfield color background in white mode light grey. Field max width: 60%, center search field. Implement frontend logic to search for blog posts.

#Post List
3 row card layout. Make layout look modern (cards). 

#PostItem
	- Layout: First row image, second row title, third row publish date, category, likes.
	- Likes: Display scores as likes with a heart icon. Allow users to like a post by clicking on the heart. Increase or decrease like count on click.
	- Images: Fetch a matching image from unsplash by searching for a keyword from the title. In case of error response use keyword "technology" or "space". Make absolutely sure loading time for full content is below 2 seconds, so optimize!

 #EmailOptin
Create a title and subtext. Add email field and sign up button in the third row.  Email optin background: #005ce6. Button background and text color: white. Position email optin below first three blog posts.

#Footer
Add two rows: 
First row: "Created by 🤖 and proud of it!"
"© [this year] Spectactulr News. All rights reserved." Layout: Make background color the same as header. Show footer always at the bottom.

#CookieConsent
Make website GDPR complaint. Add cookie consent. Make consent button background color same as email optin background.

#Refactoring
Refactor your code to follow best practice and super fast loading times.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tech-trendz-news.git
cd tech-trendz-news
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
