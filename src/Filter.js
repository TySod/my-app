const Filter = ({ setFilltered, genre, setGenre, popular}) => {
    return (
        <div className="filter">
            <button>All</button>
            <button>Comedy</button>
            <button>Action</button>
        </div>
    );
}
 
export default Filter;