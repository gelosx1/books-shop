import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {findBooksBy} from "../../actions/book/FindBooksByAction";
import {all, authorRadio, findBookSwitcher, isbnRadio, publisherRadio} from "../../const/Constant";
import {findBookType, searchBookQuery, switchActivePage} from "../../actions/SwitchPageAction";
import {Alert, Button} from "react-bootstrap";

const FindBook = (props) => {
    const[searchQuery,setSearchQuery] = useState('');
    const[radio,setRadio] = useState(all);
    const handleFindBook = (e) => {
        e.preventDefault();
        if(searchQuery || radio === all){
            findBookSwitcher(radio, searchQuery, 1, props.findBooksBy)
                    props.findBookType(radio);
                    props.searchBookQuery(searchQuery);
                    props.switchActivePage(1);
            }
    };
    const handleChange = (e) => {
        setSearchQuery(e.target.value.trim())
    };

    const handleRadioChange = (e) => {
        setRadio(e.target.id)
    };

    return (
        <div className={'area'}>
            <form id={'search'}  onSubmit={handleFindBook}>
                <Alert  variant="secondary"> <label htmlFor={"search"}>Search book by : </label></Alert>
                <div className={'radio-toolbar'}><label htmlFor={isbnRadio}>isbn</label>
                    <input id={isbnRadio}
                           type="radio"
                           value={radio}
                           checked={radio === isbnRadio}
                           onChange={handleRadioChange}
                    />
                    <label htmlFor={authorRadio}>author</label>
                    <input id={authorRadio}
                           type="radio"
                           value={radio}
                           checked={radio === authorRadio}
                           onChange={handleRadioChange}
                    />
                    <label htmlFor={publisherRadio}>publisher</label>
                    <input id={publisherRadio}
                           type="radio"
                           value={radio}
                           checked={radio === publisherRadio}
                           onChange={handleRadioChange}
                    />
                    <label htmlFor={all}>all</label>
                    <input id={all}
                           type="radio"
                           value={radio}
                           checked={radio === all}
                           onChange={handleRadioChange}
                    /></div>
                <div className={'find-submit'}><input type="text"
                          value={searchQuery}
                          onChange={handleChange}/>
                    <Button variant={'primary'} type={'submit'}>Find book</Button>
                </div>
            </form>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        findBooksBy,
        findBookType,
        searchBookQuery,
        switchActivePage
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindBook);