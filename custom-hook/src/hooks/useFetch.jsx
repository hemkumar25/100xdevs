import { useEffect, useState } from "react";

export function usePostTitle(){
    const [post, setPost] = useState({});

async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    setPost(data);
} 

 useEffect(()=>{
  getPost();
 },[url])

return  post.title;
}

export function useFetch(url){
    const [finalData, setfinalData] = useState({});
    const [Loading, setLoading] = useState(true);
    
    async function getData(){
        setLoading(true);
        const response = await fetch(url)
        const data = await response.json();
        setfinalData(data);
        setLoading(false);
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        setInterval(getData, 10*1000)
    },[])

    return {
        finalData,
        Loading
    }

}