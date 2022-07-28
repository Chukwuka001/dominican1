import React from 'react';


export const HymnPage = ({hymn, tittle, id}) => {
   return(
       <div>
       <h2>HYMN {id}</h2>
       <h2>{tittle}</h2>
       <br/>
       <p>{hymn}</p>
       </div>
   );
}

export default HymnPage;
