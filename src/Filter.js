const Filter = ({ setFilltered, genre, setGenre, popular}) => {
    return (
        <div className="filter">
            <button onClick={() => set}>All</button>
            <button>Comedy</button>
            <button>Action</button>
        </div>
    );
}
 
export default Filter;