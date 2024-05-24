
# Champion

This website(project) basically sells the headphones , earbuds and speakers 

-->I have created this project from scratch and it took me 7 days to complete it
On Opening of this website You will land to the homepage

![Screenshot 2024-05-16 160048](https://github.com/itspayalsingh/champ/assets/112754449/e04e57c6-07b6-4f96-aa9b-7e3fa84c7d89)

These are all the products

![Screenshot 2024-05-16 164828](https://github.com/itspayalsingh/champ/assets/112754449/91a185db-586d-4320-af49-23b44347df45)

We can sort the products by price, either from low to high or high to low. Additionally, we can sort them by rating, from low to high or high to low. Furthermore, product categorization and alphabetical sorting are also available

## Features

- Authentication
- Authorization
- Visitors Session recording tool
- Sorting by price , rating , alphabatically
- Searching functionality
- customer can add to cart and buy now

 
 

## Session Recording Tool

<p align="center">
  <img src="https://github.com/itspayalsingh/champ/assets/112754449/1827d953-26a0-4f6d-abad-148b2b1bf792" />
</p>
   This session recording feature records all the mouse movement activities of any visitor who comes to your website. It records where the customer clicked, which pages they visited, and displays it all like a video.

#### Note :- 
“This is not a video; it’s simply a replay of customer interactions.” 🌟

## Sequelize Association
![Untitled-2024-05-21-0947](https://github.com/itspayalsingh/champ/assets/112754449/d2a6edad-2704-471a-92ec-b99bad0c92b3) 
 

## API endpoints
#### Admin Routes
- Register a new admin   ```  POST /admin ```  
- Log in as a admin  ```  POST /admin/login ```
- Get a admin by id ```  GET /admin/:id ```
- Update a admin by id ```  PATCH /admin/:id ```

#### Category Routes
- Create a new category: `POST /category`
- Get all categories: `GET /category`
- Update a category by ID: `PATCH /category/:id`
- Delete a category by ID: `DELETE /category/:id`

#### Product Routes  
- Get the products by admin username ```  GET /product?admin=${userName} ```
- Create a New product   ```  POST /product ```
- Update a product by id ```  PATCH /product/:id ```
- Delete a product by id ```  DELETE /product/:id ```
- Get all products ```  GET /product/all ```
- Sort all products price from low to high `GET  product/sort/lowToHighPrice `
- Sort all products price from high to low `GET  product/sort/highToLowPrice `
- Sort all products rating from low to high `GET  product/sort/lowToHighRating `
- Sort all products rating from high to low `GET  product/sort/highToLowRating `
- Sort all products alphabatically from AtoZ `GET  product/sort/AtoZ`
- Sort all products alphabatically from ZtoA `GET  product/sort/ZtoA`
- Get the all products by category id `GET  /product/category/:id`
- Sort category products by ascending order of price `GET /product/category/:id/price/asc `
- Sort category products by descending order of price `GET /product/category/:id/price/desc `
- Sort category products by ascending order of Rating `GET /product/category/:id/rste/asc `
- Sort category products by descending order of Rating `GET /product/category/:id/rste/desc `
- Sort category products alphabatically from AtoZ `GET /product/category/:id/sort/asc`
- Sort category products alphabatically from ZtoA `GET /product/category/:id/sort/desc`

#### Customer Routes
- Create a new customer `POST  /customer`
- login as a customer  `POST  /customer/login`

#### Add To Cart Routes
- Create a new add to cart `POST  /addToCart`
- Delete add to cart by id  `DELETE  /addToCart/:id`
- get add to cart by customer id `GET  /addToCart/just`

#### Order Routes
- Create a new order `POST  /order`

#### Visitor Routes
- Get all visitors `GET  /visitor`
- Delete all the visitors `DELETE  /visitor/tata/bye`

#### Event Routes
- Create a new event `POST /event`
- Get events by visitor id limit 2000 `GET /event/:id `
- To get latest timestamp and events length by particular visitor id `GET  event/count/:id`
- Get events `GET /event/limit?id=${visitorId}&&limit=${limit}&&offset=${offset}`



## Tech Stack

**Client:** HTML , CSS , Javascript 

**Server:** Node, Express

**Database:** Mysql, to store on cloud used cockrochDB


