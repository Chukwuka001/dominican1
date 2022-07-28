import React from 'react';
import Content from './Content';


const HymnList = ({hymns}) => {
  return (
       <div>
         {
           hymns.map((user, i) => {
       return(
         <Content 
           key={i} 
           id={hymns[i].id} 
           tittle={hymns[i].tittle} 
           hymn={hymns[i].hymn}/>
       );
    })
         }
       </div>
    );
}


export default HymnList;
