# MyPage

This is a basic Node.js web application that shows some information about me.  
The project now uses *Express.js* instead of the built-in HTTP module, and includes route chaining and multiple endpoints.



## Technologies Used

- *HTML* – for structuring the webpage (myPage.html)
- *CSS* – for styling the page (styles.css)
- *Node.js* – to run a lightweight server (server.js)
- *Built-in Node modules:*
  - http – to create the server
  - fs – to read and serve files
  - path – to resolve file paths safely
- Express.js - Framework for Node.js. Helps define routes, handling requests and responses, as well as serving files
- Javascript - used in the /date route for client-side behaviour. This is run in the browser, not on the server. It dynamically inserts the current date and time for that local device onto the page
- Routing - modularising routes into seperate a seperate file (routes/main.js). 
- git and .gitignore - ignored the node_modules folder as it is unnecessary to run the server




## How to Install and Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Marz-0/04_express_33788537
```

### 2. Install Node.js (if not installed already)

Download and install from nodejs.org

### 3. Run the server

```bash
node index.js 
```

### 4. Open your browser

Visit: http://localhost:8000 You should see my personal webpage with rendered styles applied, as well as clickable links under the info section.




## Where to find the public webpage:


Visit the following link on any device: home=https://www.doc.gold.ac.uk/usr/360/

This is running on the goldsmiths virtual servers. 

The links.txt file shows the web links to my website that can be accessed by any device. 



