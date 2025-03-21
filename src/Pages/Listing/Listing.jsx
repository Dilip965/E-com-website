import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Sidebar from "../../component/sidebar/index.jsx";
import Product from "../../component/product/index.jsx";
import Button from "@mui/material/Button";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Listing() {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    return (
        <div className="listing-container">
            <div className="listing-header">
                <div className="breadcrumb">
                    <h1>Snack</h1>
                    <ul className="list list-inline mb-0">
                        <li className="list-inline-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/snack">Snack</Link>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-3 sidewrapper">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 rightwrapper">
                        <div className="topStrip d-flex">
                            <p className="mb-0">
                                We found <span className="text-success">29</span> items for you!
                            </p>
                            <div className="d-flex thecontent">
                                <div>
                                    <Button className="btn" onClick={() => setShowDropdown1(!showDropdown1)}>
                                        <DashboardTwoToneIcon /> Show:50 <KeyboardArrowDownOutlinedIcon />
                                    </Button>
                                    {showDropdown1 && (
                                        <ul className="dropdownMenu1">
                                            <li><Button className="align-items-center btn1">50</Button></li>
                                            <li><Button className="align-items-center btn1">100</Button></li>
                                            <li><Button className="align-items-center btn1">150</Button></li>
                                            <li><Button className="align-items-center btn1">200</Button></li>
                                            <li><Button className="align-items-center btn1">All</Button></li>
                                        </ul>
                                    )}
                                </div>
                                <div>
                                    <Button className="btn" onClick={() => setShowDropdown2(!showDropdown2)}>
                                        <DashboardCustomizeOutlinedIcon /> Sort by: Featured <KeyboardArrowDownOutlinedIcon />
                                    </Button>
                                    {showDropdown2 && (
                                        <ul className="dropdownMenu1">
                                            <li><Button className=" btn1 ">Featured</Button></li>
                                            <li><Button className="btn1">Price: low to high</Button></li>
                                            <li><Button className=" btn1">Price: high to low</Button></li>
                                            <li><Button className="btn1">Releasing date</Button></li>
                                            <li><Button className=" btn1">Avg. rating</Button></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="grid-container">
                            <div className="grid-item"><Product tag="sale" /></div>
                            <div className="grid-item"><Product /></div>
                            <div className="grid-item"><Product tag="hot" /></div>
                            <div className="grid-item"><Product /></div>
                            <div className="grid-item"><Product tag="new" /></div>
                            <div className="grid-item"><Product tag="sale" /></div>
                            <div className="grid-item"><Product tag="sale" /></div>
                            <div className="grid-item"><Product /></div>
                            <div className="grid-item"><Product tag="hot" /></div>
                            <div className="grid-item"><Product /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listing;