const StripesContainer = ({ children }) => {
    return (
        <div>
            <div className={"bg-primary-blue w-full h-7"}></div>
            <div className={"bg-primary-blue-dark w-full h-2"}></div>

            <div className={"bg-white w-full h-15"}>
                {children}
            </div>

            <div className={"bg-primary-red-dark w-full h-2"}></div>
            <div className={"bg-primary-red w-full h-7"}></div>
        </div>
    );
}

export default StripesContainer;