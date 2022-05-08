//---             Title:   INF272 Homework Assignment 2  ---//
//---            Author:   Kieser, M                     ---//
//---     Last revision:   08/05/2022                    ---//
//----------------------------------------------------------//

//Declaring movies object array
let movies =[
    {
        id: 0,
        title: 'string',
        director: 'string',
        runtime: 'string',
        release_year: 0,
        description: 'string',
        poster_url: 'string',
        cinema_number: 0,
        ticket_price: 0,
        tickets_in_cart: 0
    }
];
//Declaring cart object array
let cart =[
    {
        id: 0,
        title: 'string',
        cost: 0,
        quantity: 0,
        line_total: 0
    }
];

//Declaring movies
const starwars =
{
    id: 1,
    title: 'Star Wars: Episode VII - The Force Awakens',
    director: 'J.J. Abrams',
    runtime: '2h 18m',
    release_year: 2015,
    description: 'As a new threat to the galaxy rises, Rey, a desert scavenger, ' + 
                    'and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to ' +
                    'search for the one hope of restoring peace.',
    poster_url: 'images/star-wars.jpg',
    cinema_number: 1,
    ticket_price: 55,
    tickets_in_cart: 0,
}
const thor =
{
    id: 2,
    title: 'Thor: The Dark World',
    director: 'Alan Taylor',
    runtime: '1h 52m',
    release_year: 2013,
    description: 'When the Dark Elves attempt to plunge the universe into darkness, ' +
                    'Thor must embark on a perilous and personal journey that will ' +
                    'reunite him with doctor Jane Foster.',
    poster_url: 'images/thor.jpg',
    cinema_number: 2,
    ticket_price: 39,
    tickets_in_cart: 0,
}
const bohemian =
{
    id: 3,
    title: 'Bohemian Rhapsody',
    director: 'Bryan Singer',
    runtime: '2h 14m',
    release_year: 2018,
    description: 'The story of the legendary British rock band Queen and lead singer ' + 
                    ' Freddie Mercury, leading up to their famous performance at ' + 
                    'Live Aid (1985).',
    poster_url: 'images/bohemian-rhapsody.jpg',
    cinema_number: 3,
    ticket_price: 50,
    tickets_in_cart: 0,
}
const hobbit =
{
    id: 4,
    title: 'The Hobbit: An Unexpected Journey',
    director: 'Peter Jackson',
    runtime: '2h 49m',
    release_year: 2012,
    description: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain ' + 
                    'with a spirited group of dwarves to reclaim their mountain home, and ' + 
                    'the gold within it from the dragon Smaug.',
    poster_url: 'images/hobbit.jpg',
    cinema_number: 4,
    ticket_price: 60,
    tickets_in_cart: 0,
}
const wick =
{
    id: 5,
    title: 'John Wick',
    director: 'Chad Stahelski, David Leitch',
    runtime: '1h 41m',
    release_year: 2014,
    description: 'An ex-hit-man comes out of retirement to track down the gangsters that ' + 
                    'killed his dog and took everything from him.',
    poster_url: 'images/john-wick.jpg',
    cinema_number: 5,
    ticket_price: 43,
    tickets_in_cart: 0,
}
const max =
{
    id: 6,
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    runtime: '2h',
    release_year: 2015,
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler ' + 
                    'in search for her homeland with the aid of a group of female prisoners, a ' + 
                    'psychotic worshiper, and a drifter named Max.',
    poster_url: 'images/mad-max.jpg',
    cinema_number: 6,
    ticket_price: 70,
    tickets_in_cart: 0,
}
const out =
{
    id: 7,
    title: 'Get Out',
    director: 'Jordan Peele',
    runtime: '1h 44m',
    release_year: 2017,
    description: 'A young African-American visits his white girlfriend\'s parents for the weekend, ' + 
                    'where his simmering uneasiness about their reception of him eventually reaches ' + 
                    'a boiling point.',
    poster_url: 'images/get-out.jpg',
    cinema_number: 7,
    ticket_price: 62,
    tickets_in_cart: 0,
}
const hikers =
{
    id: 8,
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    director: 'Garth Jennings',
    runtime: '1h 49m',
    release_year: 2005,
    description: 'Mere seconds before the Earth is to be demolished by an alien construction crew, ' + 
                    'journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a ' + 
                    'researcher penning a new edition of \"The Hitchhiker\'s Guide to the Galaxy.\"',
    poster_url: 'images/hitchhikers.jpg',
    cinema_number: 8,
    ticket_price: 53,
    tickets_in_cart: 0,
}

//Pushing movies to movies array
movies.push(starwars)
movies.push(thor)
movies.push(bohemian)
movies.push(hobbit)
movies.push(wick)
movies.push(max)
movies.push(out)
movies.push(hikers)

//This function creates and inserts all of the movie cards with their relevant info
//into the home page.
var first_row = document.getElementById("first-row");
var second_row = document.getElementById("second-row");
var cardHolder = document.getElementById("movie-card-holder");
function fill_cards()
{
    movies.forEach(foreach_movie);
    function foreach_movie(current_movie)
    {
        //This if skips the first movie object in the movies array, as
        // it is already initialized with irrelevant info.
        if(current_movie.id == 0)
        {
            return;
        }
        else
        {
            cardHolder.innerHTML +=
            "<div class=\"col\">"+
            "<div class=\"card h-100\">"+
                "<div class=\"card-header\"> Cinema "+
                    current_movie.cinema_number+
                "</div>"+
                "<img src=\"" + current_movie.poster_url + "\" class=\"card-img-top\" alt=\"...\">"+
                "<div class=\"card-body\">"+
                    "<h5 class=\"card-title\">" + current_movie.title + "</h5>"+
                    "<p class=\"card-text\">" + current_movie.description + "</p>"+
                "</div>"+
                "<h5 class=\"fw-bold text-end align-text-bottom me-2\">R" + current_movie.ticket_price + ",00</h5>"+
                "<div class=\"card-footer\">"+
                    "<button id=\"" + current_movie.id + "\"type=\"button\" class=\"btn btn-outline-info m-1\" data-bs-toggle=\"modal\" data-bs-target=\"#info-modal\" onClick=\"addInfo(this.id)\">Show Details</btn>"+
                    "<button id=\"" + current_movie.id + "\" type=\"button\" class=\"btn btn-dark m-1\" onClick=\"addToCart(this.id)\">BOOK TICKET</btn>"+
                "</div>"+
            "</div>"+
            "</div>"
        }        
    }
}


//This function adds the movies info to the modal ------------------//
//Their isn't a modal for every movie, only one modal that is updated
//depending on the movie
function addInfo(movie_id)
{
    //Retrieving the html span objects that will hold the movie
    //info in the modal
    var info_title = document.getElementById("info-title");
    var modal_title = document.getElementById("modal-title");
    var modal_direct = document.getElementById("modal-direct");
    var modal_year = document.getElementById("modal-year");
    var modal_time = document.getElementById("modal-time");

    //Finding the movie object in the movies array in order to
    //find its information to add to the modal elements
    //This is done by using the show info button id, which is 
    //the same as it's movie id
    movies.forEach(foreach_movie);
    function foreach_movie(current_movie)
    {
        if(movie_id == current_movie.id)
        {
            info_title.innerHTML = current_movie.title;
            modal_title.innerHTML = current_movie.title;
            modal_direct.innerHTML = current_movie.director;
            modal_year.innerHTML = current_movie.release_year;
            modal_time.innerHTML = current_movie.runtime;
        }
        else
        {
            return;
        }
    }
}


//Function for adding movie to cart---------------------------------//
function addToCart(movie_id)
{
    var id_holder = movie_id;
    //Find which movie object to add from the movies object array
    //using the movie id, which is also the book button id

    //Function to find movies in cart array in order to not add duplicate objects
    //and instead update the movie quantity.
    movies.forEach(foreach_movie);
    function foreach_movie(current_movie)
    {
        var curr_movie_obj = current_movie;

        //Outer if statement tests the ID of the booking button that is clicked
        // to see which movie it belongs to.
        //Booking button id for a given movie = that movie's id.
        if(curr_movie_obj.id == id_holder)
        {
            curr_movie_obj.tickets_in_cart += 1;
            var tickets_in_cart = curr_movie_obj.tickets_in_cart;
            //console.log(curr_movie_obj.title + " has " + curr_movie_obj.tickets_in_cart + " in cart.")

            //Inner if statement tests if movie being added to cart has been added before.
                //--> If movie is already in cart - simply update quantity of that movie.
                //--> IF movie is not in cart - add movie to cart object array
            if(tickets_in_cart > 1)
            {
                //This foreach searches through the cart array to find the movie that is being added
                    //--> cart_movie is the 'selected' movie object in the cart array.
                cart.forEach(foreach_cart);
                function foreach_cart(cart_movie)
                {
                    //Here I update the movie's quantity and line total
                    if(cart_movie.id == curr_movie_obj.id)
                    {
                        cart_movie.quantity += 1;
                        cart_movie.line_total = (cart_movie.cost * cart_movie.quantity);
                    }
                    else
                    {
                        return;
                    }
                    
                }
                
                //console.table(movies);
            }
            else
            {
                //Adding a movie to the cart array, that is not yet in the cart
                cart.push({
                    id: curr_movie_obj.id,
                    title: curr_movie_obj.title,
                    cost: curr_movie_obj.ticket_price,
                    quantity: curr_movie_obj.tickets_in_cart,
                    line_total: (curr_movie_obj.ticket_price * curr_movie_obj.tickets_in_cart)
                })
            }
        }
        else
        {
            return;
        }

        storeTotal();
    }

    //Updates number next to the cart icon idicating number of movies in cart. 
    var counter_obj = document.getElementById("cart-num");
    var counter_value = Number(document.getElementById("cart-num").innerHTML);
    counter_value += 1;
    counter_obj.innerHTML = counter_value;
    //Stores the latest cart array in localstorage
    storeCart();
}
//------------------------------------------------------------------//


//Local storage functions-------------------------------------------//
//Function that stores cart array in local storage
function storeCart()
{
    //Storing cart array
    const cartString = JSON.stringify(cart);
    localStorage.setItem("moviesInCart", cartString);
    
    //Storing cart number total
    storeCartnum();
    storeTotal();

    console.log("Cart stored");
}

//Function to retrieve stringified cart from localstorage
function retrieveCart()
{
    //First test if there is a cart in localstorage
    var local_cart_tester = localStorage.getItem("moviesInCart");
    if(local_cart_tester)
    {
        let cartString = localStorage.getItem("moviesInCart");
        let retrievedCart = JSON.parse(cartString);
    
        cart = retrievedCart;
        console.table(cart)

        retrieveCartnum();

        console.log("Cart retrieved");
    }
    else
    {
        console.log("No local cart");
    }
}

//Function to remove movie from localstorage/cart, via the table button
function removeCart(cartID)
{
    var index = 0;
    cart.forEach(foreach_cart);
    function foreach_cart(cart_movie)
    {
        if(cart_movie.id == cartID)
        {
            cart.splice(index, 1);
            let counter_obj = document.getElementById("cart-num");
            counter_obj.innerHTML -= cart_movie.quantity;
        }
        else
        {
            index += 1;
        }
    }

    console.table(cart);

    //Update local storage cart to new cart
        //--> storeCart() function also stores cartNum.
    localStorage.clear();
    console.log("Local storage reset");
    storeCart();

    //Update table
    populateTable();
}
//------------------------------------------------------------------//


//Function to populate cart table on cart page
function populateTable()
{
    var totalHolder = Number(retrieveTotal());
    let emptyMessage = document.getElementById("empty-msg");
    let cartTable = document.getElementById("cart-table");
    let tableFoot = document.getElementById("cart-table-foot");
    let cartNum = Number(localStorage.getItem("numberInCart"));
    cartTable.innerHTML = "";

    if(cartNum == 0)
    {
        emptyMessage.innerHTML = "No movies in your cart.";
        tableFoot.innerHTML = "";
        return;
    }
    else
    {
        cart.forEach(foreach_cart);
        function foreach_cart(cart_movie)
        {
            if (cart_movie.id == 0)
            {
                return;
            }
            else
            {
                emptyMessage.innerHTML = "";

                cartTable.innerHTML += "<tr>" +
                    "<td>" + "<button id=\"" + cart_movie.id + "\" type=\"button\" class=\"btn\" onClick=removeCart(this.id)><i class=\"fa fa-remove\"></i></button>" + cart_movie.title + "</td>" +
                    "<td>" + cart_movie.cost + "</td>" +
                    "<td>" + "<button id=\"decrease_" + cart_movie.id + "\" type=\"button\" class=\"btn\" onClick=decreaseQuantity(this.id)><i class=\"fa fa-arrow-circle-left\"></i></button>" + cart_movie.quantity +
                    "<button id=\"increase_" + cart_movie.id + "\" type=\"button\" class=\"btn\" onClick=increaseQuantity(this.id)><i class=\"fa fa-arrow-circle-right\"></button></td>" +
                    "<td>R" + cart_movie.line_total + ",00</td>" +
                    "</tr>";

                tableFoot.innerHTML = "<tr>" +
                    "<td></td>" +
                    "<td></td>" +
                    "<td class = \"fw-bold\">Total:</td>" +
                    "<td>R" + totalHolder + ",00</td>" +
                    "</tr>";
            }
        }
    }
}
//------------------------------------------------------------------//


//Function for retrieving and storing number of tickets in cart to localstorage
function storeCartnum()
{
    var cart_value = Number(document.getElementById("cart-num").innerHTML);
    console.log("Current cart num = ", cart_value);
    localStorage.setItem("numberInCart", cart_value);
}

function retrieveCartnum()
{
    let cartNum = Number(localStorage.getItem("numberInCart"));
    let counter_obj = document.getElementById("cart-num");
    counter_obj.innerHTML = cartNum;
    console.log(cartNum + " in cart");
}
//------------------------------------------------------------------//


//Functions for storing and retrieving the total cost of the cart
function storeTotal()
{
    var total = 0;

    cart.forEach(foreach_cart);
    function foreach_cart(cart_movie)
    {
        total += cart_movie.line_total;
    }

    localStorage.setItem("totalCost", total);
}

function retrieveTotal()
{
    var total = localStorage.getItem("totalCost");
    return total;
}
//------------------------------------------------------------------//


//Functions for increasing and decreasing movie quantity in cart table
function decreaseQuantity(movie_id)
{
    var id_holder = movie_id;
    var cartMovieID = Number(id_holder.substr(9, 1));
    console.log(cartMovieID);

    cart.forEach(foreach_cart);
    function foreach_cart(cart_movie)
    {
        if(cart_movie.id == cartMovieID)
        {
            if(cart_movie.quantity == 1)
            {
                removeCart(cart_movie.id);
                return;
            }
            else
            {
                var currentQuantity = cart_movie.quantity;
                currentQuantity -= 1;
                cart_movie.quantity = currentQuantity;

                var currentTotal = cart_movie.line_total;
                currentTotal = currentTotal - cart_movie.cost;
                cart_movie.line_total = currentTotal;
            }

        }
        else
        {
            return;
        }

        let counter_obj = document.getElementById("cart-num");
        counter_obj.innerHTML -= 1;
    
        localStorage.clear();
        console.log("Local storage reset");
        storeCart();
        storeTotal();
    
        //Update table
        populateTable();
    }
}

function increaseQuantity(movie_id)
{
    var id_holder = movie_id;
    var cartMovieID = id_holder.substr(9, 1);

    cart.forEach(foreach_cart);
    function foreach_cart(cart_movie)
    {
        if(cart_movie.id == cartMovieID)
        {
            var currentQuantity = cart_movie.quantity;
            currentQuantity += 1;
            cart_movie.quantity = currentQuantity;

            var currentTotal = cart_movie.line_total;
            currentTotal = currentTotal + cart_movie.cost;
            cart_movie.line_total = currentTotal;
        }
        else
        {
            return;
        }
    }

    let counter_obj = document.getElementById("cart-num");
    let counter_value = Number(counter_obj.innerHTML) + 1;
    counter_obj.innerHTML = counter_value;

    localStorage.clear();
    console.log("Local storage reset");
    storeCart();

    //Update table
    populateTable();
}
//------------------------------------------------------------------//
