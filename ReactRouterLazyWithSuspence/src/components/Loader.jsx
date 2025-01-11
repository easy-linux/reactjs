

const Loader = ({children}) => {
    return (
        <div className="loading">
            <span className="text">{children}</span>
            <div className="dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    )
}

export default Loader