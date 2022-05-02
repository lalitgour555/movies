const trending="https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=1"
const[data ,setData]=useState([])
// const filterResult=(catItem)=>{
//     const result=trending.filter((curData)=>{
//       return curData.Category===catItem;
//     })
    
//      }
     const fetchyoutube=(movieid)=>{
        fetch(youtube)
       .then((result)=>result.json())
         .then((resp)=>{
             setyoutubevideo(resp.results[0].key);
             console.log(data);
setData(resp.result)
            })
       }