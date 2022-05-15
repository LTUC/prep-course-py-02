import { useParams } from "react-router-dom";
let data = require("../data/data.json");
export default function PetDetails() {
  //1.getting pet id
    let { id} = useParams();
    //2.filtering for the wanted data
    let result = data.filter(data => data.id === id)
    console.log(result);
    //3/render its data 
    return (
      <>
        <div key={result[0].id}>
          <img src={result[0].url} alt={result[0].name} />
          <ul>
            <li> Name :{result[0].name} </li>
            <li>Age : {result[0].life_span}</li>
          </ul>
        </div>
      </>
    );

  
}
