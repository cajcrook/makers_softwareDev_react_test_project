const Recipe = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.type}</p>
            <p>{props.duration}</p>
        </div>
    );
};


export default Recipe;