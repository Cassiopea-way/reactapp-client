import React from 'react'

export const LoadFileComponent = (props) => {
	const handleClick = () => console.log("clicked");
	return (
	  <div id = "upload">
	    {React.cloneElement(props.children,{onClick: handleClick})}
	  </div>
	)
}