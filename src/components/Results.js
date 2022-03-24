import React from 'react'
import ImageResults from './ImageResults'
import TextResults from './TextResults'
function Results(props) {

  if( props.searchType === 'search'){
    console.log(props.searchType === 'search')
    return (
      <TextResults results = {props.results}/>
    )
  }else{
    return(
      <ImageResults results = {props.results} />
    )
  }
}

export default Results