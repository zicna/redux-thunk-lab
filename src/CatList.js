// write your CatList component here
import React from 'react'

export default function CatList(props) {
    const renderCatsPics = () => {
        console.log(props.catPics)
        return props.catPics.map((picture , index)=> <img key={index}src={picture.url}/>)
    }
    
    return (
        <div>
            {renderCatsPics()}
        </div>
    )
}
