import React from 'react';


const MegaMenu = () => {
    return (
        <div className="mega-menu">
            <ul className="menu">
                <li className="menu-item">
                    <a href="#">Category 1</a>
                    <div className="sub-menu">
                        <ul>
                            <li><a href="#">Subcategory 1</a></li>
                            <li><a href="#">Subcategory 2</a></li>
                            <li><a href="#">Subcategory 3</a></li>
                        </ul>
                    </div>
                </li>
                <li className="menu-item">
                    <a href="#">Category 2</a>
                    <div className="sub-menu">
                        <ul>
                            <li><a href="#">Subcategory 1</a></li>
                            <li><a href="#">Subcategory 2</a></li>
                            <li><a href="#">Subcategory 3</a></li>
                        </ul>
                    </div>
                </li>
                <li className="menu-item">
                    <a href="#">Category 3</a>
                    <div className="sub-menu">
                        <ul>
                            <li><a href="#">Subcategory 1</a></li>
                            <li><a href="#">Subcategory 2</a></li>
                            <li><a href="#">Subcategory 3</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
          
        </div>
    );
};

export default MegaMenu;