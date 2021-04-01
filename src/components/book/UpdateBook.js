import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {updateBook} from "../../actions/book/UpdateBookAction";

const UpdateBook = (props) => {
    const[title,setTitle] = useState('');
    const handleUpdate = (e) => {
        e.preventDefault();
        if (props.isbn) {
            const data = {
                isbn: props.isbn,
                newTitle: title.trim()
            };
            title && props.updateBook(data, [...props.booksList]);
        }
    };
    const handleChange = (e) => {
        setTitle(e.target.value)
    };

    return (
        <div>
            <form id={'newTitle'} onSubmit={handleUpdate}>
                <input type="text"
                       value={title}
                       placeholder={'new title'}
                       onChange={handleChange}/>
                <button type={'submit'}>Update book</button>
            </form>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateBook
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        booksList: state.bookData.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBook);