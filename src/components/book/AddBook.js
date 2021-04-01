import React, {useRef, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addBook} from "../../actions/book/AddBookAction";

const AddBook = (props) => {
    const[author,setAuthor] = useState('');
    const[isbn,setIsbn] = useState('');
    const[title,setTitle] = useState('');
    const[publisher,setPublisher] = useState('');
    const authorRef = useRef();
    const authorArrayRef = useRef([]);
    const handleAdd = (e) => {
        e.preventDefault();
        if ((author || authorArrayRef.current.length !== 0) && isbn && title && publisher) {
            const data = {
                authors: author ? [...authorArrayRef.current, {name: author}] : authorArrayRef.current,
                isbn: isbn,
                title: title.trim(),
                publisher: publisher.trim()
            };
             props.addBook(data, [...props.booksList]);
            authorArrayRef.current = [];
        }
    };
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    };

    const handleIsbnChange = (e) => {
        setIsbn(e.target.value.trim())
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    };

    const handlePublisherChange = (e) => {
        setPublisher(e.target.value)
    };

    const handleOneMoreAuthor = (e) => {
        e.preventDefault();
        authorArrayRef.current = [...authorArrayRef.current, {name: author}];
        authorRef.current.value = '';
        setAuthor('')
    };

    return (
        <div className={'area'} style={{flexDirection: "column"}}>
            <label htmlFor={"authors"}>Add book</label>
            <form id={'authors'} onSubmit={handleOneMoreAuthor}>
                <label htmlFor={"author"}>Author</label>
                <input ref={authorRef}
                       id={'author'}
                       type="text"
                       value={author}
                       onChange={handleAuthorChange}/>
                       <button type={'submit'}>one more</button>
            </form>
                <label htmlFor={"add"}>Book data</label>
                <form id={'add'} onSubmit={handleAdd}>
                <label htmlFor={"isbn"}>Isbn</label>
                <input id={'isbn'}
                       type="text"
                       value={isbn}
                       onChange={handleIsbnChange}/>
                <label htmlFor={"title"}>Title</label>
                <input id={'title'}
                       type="text"
                       value={title}
                       onChange={handleTitleChange}/>
                <label htmlFor={"publisher"}>Publisher</label>
                <input id={'publisher'}
                       type="text"
                       value={publisher}
                       onChange={handlePublisherChange}/>
                <button type={'submit'}>Add book</button>
            </form>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBook
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        booksList: state.bookData.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);