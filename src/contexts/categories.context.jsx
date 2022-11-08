import {createContext , useState , useEffect} from 'react';
import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
categories: {},
});

export const CategoriesProvider =({children}) => {
const [categories , setcategories] = useState({});

useEffect(() => {
    const getCategories = async () => {
       const categoryMap = await getCategoriesAndDocuments();
       setcategories(categoryMap);
       console.log(categories);
    }
    getCategories();
},[])

const value = {categories};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}