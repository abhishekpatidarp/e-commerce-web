import { createSlice } from "@reduxjs/toolkit";

const productslice=createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    reducers:{
        add(state,action){
            console.log(action.payload);
            
            state.products.push(action.payload);
            const products =JSON.parse(localStorage.getItem("products"));
          
            if(products && products.length > 0){
                products.push(action.payload);
                const convertedproducts=JSON.stringify(products);
                localStorage.setItem("products",convertedproducts);
            }else{
                let products =[];
                products.push(action.payload);
                products = JSON.stringify(products);
                localStorage.setItem("products",products);
            }

        },

        productdelete:(state,action)=>{
            let products = JSON.parse(localStorage.getItem("products"));
            products= products.filter(product => product.id !== action.payload);

            state.products = products;
            localStorage.setItem("products",JSON.stringify(products));
        }
    }
})

export const {add}=productslice.actions;
export default productslice.reducer;
export const {productdelete}=productslice.actions;