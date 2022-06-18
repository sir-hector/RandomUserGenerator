import { useEffect } from "react"

function Person(person){
    return(
        <div className="peroson-info">
            <p>Name: {person.data.name.first}</p>
            <p>Gender: {person.data.gender}</p>
            <p>Cell: {person.data.cell}</p>
            <p>Email: {person.data.Email}</p>
            <p>Age: {person.data.dob.age}</p>
            <img src={person.data.picture.medium}></img>
         </div>
    )
}

export default Person