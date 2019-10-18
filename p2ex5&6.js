const inventory = [

    {
    
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },]

// vao object 1 trong mang 
var inventoryX = new Object()

for (x=0; x< inventory.length; x++)
{
    propBrand = inventory[x].brand; //tao HP
    if (inventoryX[propBrand] == null) //
    {
        let itemList = []
        inventoryX[propBrand] = itemList;
        itemList.push(inventory[x]);
    } 
    else
    {
        inventoryX[propBrand].push(inventory[x]);
    }

    // let itemList = []
    // inventoryX[propBrand] = itemList;
    // itemList.push(inventory[x]);
    // console.log(inventoryX); 
    // console.log(itemList);
    // 

}
console.log(inventoryX);


// let input = prompt('Enter a brand name');

// if (inventoryX[input] != null)
// {
//     let generation = inventoryX[input].length;
//     alert('The number of generation of ' + input + ' is ' + generation);
//     for (m = 0; m < inventoryX[input].length; m++)
//     {
//         alert(inventoryX[input][m].name);
//     }

// }
// else
// {
//     alert('Not found');

// }

let input = prompt('Enter a brand name');

if (inventoryX[input] != null)
{
    let generation = inventoryX[input].length;
    alert('The number of generation of ' + input + ' is ' + generation);
    var y = []
    var z = []
    for (x=0; x < generation; x++)
    {
        y.push(inventoryX[input][x].name); 
        z.push((inventoryX[input][x].price)*(inventoryX[input][x].quantity));
    }    
    alert(y);
    
    sumZ = (a, b) => a + b; // https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    alert('with total of ' + z.reduce(sumZ)); // https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
}
else
{
    alert('Not found');

}

