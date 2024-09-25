const Profile = (props) => {
    return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.job}</p>
        <p>{props.birthdate}</p>
    </div>
    );
};

export default Profile;

