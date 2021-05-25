const foods=[{
    id:1,
    name:"زرشک پلو",
    price:"35000",
   
},
{
    id:2,
    name:"کوبیده",
    price:"45000",
     
},
{
    id:3,
    name:"جوجه",
    price:"20000",
   
},
{
    id:4,
    name:"ماهی",
    price:"55000",
     
},
{
id:5,
name:"قیمه",
price:"35000",

}]

let bascket=[]

function food(id, name, price) {
    this.id=id
    this.name = name;
    this.price = price;
    this.number=1
    return this;
  }


function add_food_to_bascket(id, name, price) {
let find=0
let currrent_food;
  let temp = bascket.find(item => {
   if(item.id == id){
    item.number++
    find=1
    currrent_food=item
  }
  });
  
  if(find==0){
    const new_food = new food(id, name, price);
    bascket.push(new_food);
  
    currrent_food=new_food
    
  }
alert("غذا به لیست اضافه شد")
calcualte_basket_price(currrent_food,id)
  }

  function calcualte_basket_price(item,id){
    
  const pr=document.getElementById(`price${id}`).innerText= item.number*item.price
  sum_of_price()
  }

function sum_of_price(){
let sum_price=0
bascket.map(item=>{
sum_price+=item.price*item.number
})
document.getElementById("sum_of_order").innerText=sum_price
wage(sum_price)

}
function wage(sum_price){

  const wage= document.getElementById("wage").innerText=sum_price*0.05
final_price(wage, sum_price)

}

function final_price(wage, sum_price){

document.getElementById("final_price").innerText=wage+sum_price
}

  function delete_food_from_bascket(id){
      alert("غذا از لیست حذف شد")
let find=0;

let current_food;
      bascket = bascket.filter(item =>{
        if(item.id == id){

          if(item.number>=1){
  item.number--;
  current_food=item

return item
}
        }
        return item
        
        })
calcualte_basket_price(current_food,id)

  }

render()
function render(){
    const body =document.querySelector('#body');
    foods.map((item,index)=>{
    body.innerHTML+=`<div class="food${item.id} h-100 d-flex flex-row-reverse mt-4">

    <div class="col-8 d-flex flex-row-reverse align-items-center" id="food-data${item.id}">
      <div class="col-6"id="food-pic${item.id}"><img src="./1-11.jpg" width="150rem" class="img-fluid"></div>
      <div class="col-3 " id="food-info${item.id}">

        <div class="food-name${item.id}">${item.name}</div>
        <div class="food-price${item.id}">${item.price}</div>
        <div class="food-number${item.id}">
        <img src="./plus-svgrepo-com.svg" width="10rem" class="pic_cursor" onclick="add_food_to_bascket(${item.id},'${item.name}',${item.price})">
         <img src="./minus-svgrepo-com.svg" width="10rem" class="pic_cursor" onclick="delete_food_from_bascket(${item.id})"></div>
      </div>
    </div>
    <div class="col-2 d-flex justify-content-center align-items-center">تومان<div id="price${item.id}">0</div></div>
  </div>`

    }) 
}