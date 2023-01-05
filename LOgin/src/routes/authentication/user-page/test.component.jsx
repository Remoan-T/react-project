import { useState , useEffect} from "react";
import axios from "axios";

const ShowData = () => {

const [state, setState] = useState('');
useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {console.log(response); setState(response.data) })



axios.post('https://jsonplaceholder.typicode.com/posts',{
    userId: '112',
    title:'newtitle',
    body:'newbody'
})
.then(response => {console.log(response); setState( response.data)})


},[])
  




  
    return (
<div><div>{state.title}</div></div>
);
    }

export default ShowData;