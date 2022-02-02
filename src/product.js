//import framework mysql2
const mysql = require('mysql2');

// const connection = mysql.createConnection({
// //see credentials life
// })

//create a query 

// const query = `SELECT * From Products`;

// connection.query(query,(err, results, fields) =>{
// //check to see if there is an erorr
// if(err){
//     console.log(err)
// }
// //if no error display results
// console.log(results)

// });

//now lets call the function
// i want to execute promise then query
// comes back as array bc i am asking through [err,results,fields] built into a []
const getAllProducts = async () => {
    const query = `SELECT * From Products`;
    const[ results, fields] = await connection.promise().query(query)


   
//return the results and console log it
console.log(results);

return results;
}

//write a function then method to create a product
const createProduct = async (product) => {

    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES('${product.description}', '${product.sku}', ${product.userId})`
    
    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)

    return results
}


//call the method to see what happens
// getAllProducts()


//create an object for the product
createProduct({
    description: "Danielles new Product",
    sku: "Danielle1234",
    userId: 1
});


//end the connection or control C
connection.end();


