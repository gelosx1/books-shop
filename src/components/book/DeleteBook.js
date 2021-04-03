import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteBook} from "../../actions/book/DeleteBookAction";
import {Button} from "react-bootstrap";

const DeleteBook = (props) => {

    const handleDelete = (e) => {
        e.preventDefault();
        props.isbn && props.deleteBook(props.isbn,[...props.booksList]);
    };

    return (
        <div>
            <Button variant={'danger'} onClick={handleDelete}>Delete</Button>
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