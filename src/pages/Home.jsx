import HomeCard from "../components/HomeCard";

function Home(){
    return(
        <>
        <div className="main">
          <HomeCard url={"about"}/>     
          <HomeCard url={"contact"}/>        


        </div>
        </>
    )
}


export default Home;