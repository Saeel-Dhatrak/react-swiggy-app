import { Outlet } from "react-router-dom";

const AboutUsComponent = () => {
    return(
        <>
        <h1>This is About Us Component </h1>
        <Outlet/>
        </>
    )
}

export default AboutUsComponent;