import React from 'react'

export const LoadFileImageComponent = (props) => {
	const handleClick = () => console.log("clicked");
	return (
	  <div id = "loadimage">
	  загрузить фото
	    {React.cloneElement(props.children,{onClick: handleClick})}
	  </div>
	)
}