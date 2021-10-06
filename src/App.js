import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Products from "./components/Products";
import Cart from "./components/Cart";


const App = props => {
    console.log(props.booklist);
    return (
        <div className="App">
            <h1>
                Alışveriş Sepeti Yapımı
                <img
                    src="https://avatars3.githubusercontent.com/u/60869810?v=4"
                    alt="React Dersleri"
                />{" "}
                React Dersleri
            </h1>
            <Route exact path="/" component={Products}/>
            <Route path="/cart" component={Cart}/>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        booklist: state.booklist
    }
}
export default connect(mapStateToProps)(App);