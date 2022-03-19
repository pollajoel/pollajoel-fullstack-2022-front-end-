const handleClick = (e) =>  {
    console.log('Free pizza!');
    console.log(e);
}

const AddToCart = () => (

    <div>
        <button onClick={handleClick}>Add</button>
    </div>

)

export default AddToCart;