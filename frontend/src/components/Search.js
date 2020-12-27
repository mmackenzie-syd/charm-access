
import React, {useState} from 'react';
import './Search.css';
import {ModalContext} from "../context/modalContext";
import SearchIcon from "../icons/SearchIcon";

function Search() {
    let { handleModal } = React.useContext(ModalContext);
    const [searchTxt, setSearchTxt] = useState('');

    const handleSearch = () => {
        console.log('handle search', searchTxt);
    }
    return (
        <form className="modal-content animate" onSubmit={handleSearch}>
            <div className="search-container">
                <span onClick={() => handleModal('')} className="close-modal" title="Close Modal">&times;</span>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search..."
                    required
                    value={searchTxt}
                    onChange={e => setSearchTxt(e.target.value)}
                />
            </div>
        </form>
    );
}

export default Search;
