
import React from 'react';
import './Search.css';
import {ModalContext} from "../context/modalContext";
import SearchIcon from "../icons/SearchIcon";

function Search() {
    let { handleModal } = React.useContext(ModalContext);
    return (
        <form className="modal-content animate" method="post">
            <div className="imgcontainer">
                <span onClick={() => handleModal('')} className="close" title="Close Modal">&times;</span>
            </div>
            <div className="search-container">
                <div className="input-wrap">
                    <input className="search-input" type="text" placeholder="Search..." required />
                    <button type="submit" className="search-btn">
                            <SearchIcon
                                width={'2rem'}
                                height={'2rem'}
                                offset={'.1rem'}
                            />
                    </button>
                </div>

            </div>
        </form>
    );
}

export default Search;
