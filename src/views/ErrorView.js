function ErrorView(props) {
    return(
        <div>
            <h1>Error code: {props.error.apiStatusCode}</h1>
            <p>Error message: {props.error.apiError}</p>
        </div>
    )
}

export default ErrorView