import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {updateBook} from "../../actions/book/UpdateBookAction";
import {Button} from "react-bootstrap";

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
            <form  onSubmit={handleUpdate}>
                <input type="text"
                       value={title}
                       placeholder={'new title'}
                       onChange={handleChange}/>
                <Button variant={'info'} type={'submit'}>Update</Button>
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