const PlaceImg = ({place, index=0}) => {

    if(!place.photos?.length)
    {
        return("");
    }

    return(
            <img className="object-cover" src={`https://jqgfxdzd-5555.inc1.devtunnels.ms/uploads/`+place.photos[index]} alt={place.title}/> 
    );
}

export default PlaceImg;