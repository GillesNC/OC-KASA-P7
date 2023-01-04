import React from "react";
import { useParams } from "react-router-dom";
import DataFlat from "../data/dataFlat.json";

function TagsHousing () {
    const {idUrl} = useParams();
    const flatExist = DataFlat.find((DataFlat) => DataFlat.id === idUrl);
    const tag = flatExist.tags.map (tags => {
        return <span key={tags}>{tags}</span>
    })
    console.log(tag);

    // const tag = flatExist.tags.forEach(function(item) {
    //     console.log(item);
    // });
    // console.log(tag);

    return (
        <article>
                <div className="housing__tag">
                    {tag}
                </div>    
        </article>
    )
}

export default TagsHousing;