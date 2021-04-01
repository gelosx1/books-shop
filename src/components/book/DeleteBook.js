import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteBook} from "../../actions/book/DeleteBookAction";

const DeleteBook = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        props.isbn && props.deleteBook(props.isbn,[...props.booksList]);
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteBook
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        booksList: state.bookData.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBook);