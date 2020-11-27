import React, {Fragment, useEffect, useState} from 'react';
import './EditCategory.css';

function EditCategory(props) {

    return (
        <div className="category">
            <div className="row">
                <header className="lg-col-span-12 category-header">
                    <h2>Add Category</h2>
                    <div className="clear"></div>
                    <div className="category-header-divider"></div>
                </header>
            </div>
            <div className="row">
                <form className="category-form lg-col-span-12" id="formAdd">
                    <input type="text" className="category-form-control" />
                </form>
            </div>
            <div className="row">
                <footer className="category-footer lg-col-span-12">
                    <div className="clear"></div>
                    <button className="category-footer-btn pull-right" type="submit" form="formAdd" value="Submit">SAVE</button>
                    <button className="category-footer-btn pull-right">CANCEL</button>
                    <div className="clear"></div>
                </footer>
            </div>
        </div>);
}

export default EditCategory;
