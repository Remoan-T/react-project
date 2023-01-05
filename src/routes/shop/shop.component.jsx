import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setcategories } from '../../store/categories/category.action';
import { Route ,Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


const Shop = () => {

const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
       const categoryMap = await getCategoriesAndDocuments();
       dispatch(setcategories(categoryMap));
    }
    getCategories();
},[])


  return(
 
  <Routes>
   <Route index element={<CategoriesPreview />} />
   <Route path=":category" element={<Category />} />
  </Routes>
   


)}

export default Shop;