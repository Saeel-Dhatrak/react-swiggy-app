import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    return(
        <>
        <h1>Oops !!!!1</h1>
        <h2>Something went wrong</h2>
        <h2>{status + " : " + statusText} </h2>
        </>
    )
}

export default ErrorComponent;

