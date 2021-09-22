const Home = () => {

    const name = "Watson";
    const hobby = "Coding & Gaming";
    const languages = "Python & JavaScript";

    const getDetails = () => {
        return <div>
            <h1>Name : {name}</h1>
            <h2>Hobby : {hobby}</h2>
            <h2>Languages : {languages}</h2>
        </div>
    }

    return (
        <div>
            <h1>Hello from Home</h1>
            <h1>Another Tag</h1>
            <h2>My Name is {name}</h2>
            {getDetails()}
        </div>
 
    )
}

export default Home;