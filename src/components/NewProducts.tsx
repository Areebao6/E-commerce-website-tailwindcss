
import React from 'react'
import ProductCard from './ProductCard';

     const productsData =  [
{   img:"/skirt.jpg",
    title:" Classy Suit",
    desc:"Soft and Comfortale Suit With Animal Print Shirt ",
    rating:4,
    price:"199",
},
{
    img:"/men1.jpg",
    title:"coat",
    desc:"Coat For Winter",
    rating:4.5,
    price:"259",
},

{
    img:"/card2.jpg",
    title:"Jacket",
    desc:"Jacket For Girls",
    rating:4.5,
    price:"199",
},
{
    img:"/card3.jpg",
    title:"jeans",
    desc:"casual clothing",
    rating:4.5,
    price:"259",
},


{
    img:"/bag.jpg",
    title:"stylish bag ",
    desc:"fashionable bag ",
    rating:4.5,
    price:"130",
},
{
    img:"/wallet.jpg",
    title:"leather wallet",
    desc:"100% pure leather",
    rating:4.5,
    price:"259",
},
];
const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">
              New Products
            </h2>
 <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
 lg:grid-col-3 xl:grid-col-4 gap-10 xl:gap-x-20 xl:gap-y-10">


{productsData.map((item ) => ( 
    <ProductCard
    key={item.title} 
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              />
))}


 </div>
</div>
</div>

    
  )
}

export default NewProducts;
