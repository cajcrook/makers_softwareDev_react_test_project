
const ClickListener = () => {

  const handleClick = (event) => {
      console.log(event);
    };
    return (
      <>
        <button onClick={handleClick}>Click to see event logged in console!</button>
      </>
    );
  };
  
  export default ClickListener