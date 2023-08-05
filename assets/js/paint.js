    function configureListeners(){
    
    let images = document.querySelectorAll('img');
    console.log(images);
    
    // iterate over images and add mouseover event listeners
     for (let i = 0; i < images.length; i++) {    
            console.log(i)    
         images[i].addEventListener("mouseover", (event) => {
            addOpacity(event, images);
            //  console.log(event.target.id)
            });
            images[i].addEventListener("mouseout", (event) => {
                removeOpacity(event)
                
            })
        };
    };

    
    function addOpacity(event, images) {
        // add appropriate CSS class
        images.forEach(image => {
            image.classList.remove('dim');
        });
    event.target.classList.add('dim');
    
    getProductInfo(event.target.id);
};

function removeOpacity(event) {
    //remove appropriate CSS class
    event.target.classList.remove('dim');
    
    let element = document.getElementById('color-price');
    element.textContent = '';
    
    let color = document.getElementById('color-name');
    color.textContent = ''; 
    
};

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
        // set variables for price and color name and invoke a function to update the price
         price = '$14.99'
         colorName = "Lime Green"
         updatePrice(colorName, price);     
        break;           
        case 'pn2':
        // set variables for price and color name and invoke a function to update the price    
        price = '$11.14'
        colorName = 'Medium Brown'
        updatePrice(colorName, price);
        break;            
        case 'pn3':
        // set variables for price and color name and invoke a function to update the price  
        price = '$22.99'
        colorName = 'Royal Blue'
        updatePrice(colorName, price);
        break;   
        case 'pn4':
        // set variables for price and color name and invoke a function to update the price  
        price = '$4.99'
        colorName = 'Solid Black'
        updatePrice(colorName, price);
        break;   
        case 'pn5':
        // set variables for price and color name and invoke a function to update the price    
        price = '$8.22'
        colorName = 'Solid Cyan'   
        updatePrice(colorName, price);
        break;   
        case 'pn6':
        // set variables for price and color name and invoke a function to update the price
        price = '$11.99'
        colorName = 'Solid Puple'     
        updatePrice(colorName, price);   
        break;   
        case 'pn7': 
        // set variables for price and color name and invoke a function to update the price
        price = '$13.42'
        colorName = 'Solid Red' 
        updatePrice(colorName, price);
        break;   
        case 'pn8':
        // set variables for price and color name and invoke a function to update the price
        price = '$21.98'
        colorName = 'Solid White'   
        updatePrice(colorName, price);
        break;   
        case 'pn9':
        // set variables for price and color name and invoke a function to update the price
        price = '$14.99'
        colorName = 'Solid Yellow' 
        updatePrice(colorName, price);
        break;   
        default:              
        }
}
                    
function updatePrice(colorName, price){       
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = price;

    let color = document.getElementById('color-name');
    color.textContent = colorName;
    
};


                                
                                
                                // The problem to solve here is how do I get the mouseover event to interect with this function so that when the mouseover event is triggered, this will then trigger the addOpacity function, and will have the box apply a css feature that will add opacity.
                                // Goal of Coding This:
                                // Looking at the instructions:
                                // - We have 9 boxes, with id's for each box, and we want to change the opacity on the box each time the mouse hovers over the boxes.
                                // - We have two functions
                                // addOpacity & removeOpacity that we need to have them operate correctly.
                                // We want to add the Product Info to the box as you hover over them (My thought of the design)
                                // We have the function getProductInfo(paintColor) so that I'm assuming, when you hover over the item, it changes opacity, and shows the price and colorname on the box item... and in this function, you have a switch case... and it would make sense that the switch case... when the id of the mouseover method connects with the correct id, will show the correct colorName and colorPrice. And the switch statement will be ran 
                                
                                // As I'm reading the code... for the removeOpacity(event) function, we have two variables already defined for us. We have
                                
                                // let element = document.getElementById('color-price');
// element.textContent = '(Inside these quotes, we want the event.target.id to show up, tat displays the color-price and the color and they want this automatically, on loading of the page... for the price and color name to already be displayed on the boxes on load.)';

// On the function updatePrice(colorName, price), I'm assuming this is a function to where if we ever did need to update the set values for the price of the color... then we can change it by adding it in with this function. And then also if we wanted to add a new color, it would add it to the color array that we're using right now... Which we would need to add a new img, a new color, a new id, and then we would also have to add the height, width and alt to = the color name. 