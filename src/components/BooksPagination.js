import React, {useEffect, useRef, useState} from 'react';
import {Pagination} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {findBookSwitcher} from "../const/Constant";
import {findBooksBy} from "../actions/book/FindBooksByAction";
import {switchActivePage} from "../actions/SwitchPageAction";
import {getPurchasedBooks} from "../actions/account/getPurchasedBooksAction";


const BooksPagination = (props) => {
    const[pagesNumber, setPagesNumber] = useState(0);
    const activePageRef = useRef(1);

    useEffect(()=>{
        props.page && setPagesNumber( props.page.pagesQuantity);
    },[props.page]);

    useEffect(() => {
        activePageRef.current = props.activePage;
        !props.isListPurchased ? findBookSwitcher(props.type, props.query, props.activePage, props.findBooksBy) :  props.user && props.getPurchasedBooks(props.user, props.activePage);
    },[props.activePage]);

    let items = [];
    if (pagesNumber !== 0) {
        for (let number = 1; number <= pagesNumber; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === props.activePage}
                    onClick={() => handlePageClick(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
    }

    const handlePageClick = (number) => {
        props.switchActivePage(number)

    };

    const handlePrev = () => {
        props.switchActivePage(activePageRef.current - 1 < 1 ? 1 : activePageRef.current - 1)
    };

    const handleNext = () => {
        props.switchActivePage(activePageRef.current + 1 > pagesNumber ? pagesNumber : activePageRef.current + 1)
    };

    const handleFirst = () => {
        props.switchActivePage(1)
    };

    const handleLast = () => {
        props.switchActivePage(pagesNumber)
    };

        return (
            <div className={'pagination'}>
                 {(pagesNumber > 1 && props.page) && <Pagination size="sm">
                    <Pagination.First onClick={handleFirst}/>
                    <Pagination.Prev onClick={handlePrev}/>
                    {items}
                    <Pagination.Next onClick={handleNext}/>
                    <Pagination.Last onClick={handleLast}/>
                </Pagination>}
            </div>
        );
    };


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        findBooksBy,
        switchActivePage,
        getPurchasedBooks
        }, dispatch
    );
}

function mapStateToProps(state) {
    return {
        page: state.bookData.paginationInfo,
        query: state.bookData.bookQuery,
        type: state.bookData.findType,
        activePage: state.bookData.active,
        isListPurchased: state.bookData.flagPurchase,
        user: state.accountData.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPagination);