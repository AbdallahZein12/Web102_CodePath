const BannedList = ({banList}) => {
    return (
        <>
        <div className="banListContainer">
            <div className="banList">
                {banList && banList.length > 0 ? (
                    banList.map((element, index) => (
                        <li key={index}>
                            {element}
                        </li>
                    )) 
                ) : (
                    <div>
                        <h3>Nothing here yet.</h3>
                    </div>
                )}
            </div>
            

        </div>
        </>
    )
}

export default BannedList;