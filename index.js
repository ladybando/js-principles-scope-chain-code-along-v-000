/* Your code goes here */
var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}


function setBestCustomer(){
  bestCustomer = 'not `${customerName}`';
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function leastFavorite(){
  leastFavorite = 'maybe bob';
}

function reassignLeastFavorite(){
  leastFavorite = 'definitely bob'
}