import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {findBook} from "../../actions/book/FindBookAction";
import {findBooksBy} from "../../actions/book/FindBooksByAction";
import {all, authorRadio, isbnRadio, publisherRadio, urlApiAccount} from "../../const/Constant";

const FindBook = (props) => {
    const[searchQuery,setSearchQuery] = useState('');
    const[radio,setRadio] = useState(all);
    const handlePurchase = (e) => {
        e.preventDefault();
        if(searchQuery && radio !== all){
            switch (radio) {
                case isbnRadio:
                    props.findBook(searchQuery);
                    break;
                case authorRadio:
                    props.findBooksBy(`${urlApiAccount}/book/author/${searchQuery}`);
                    break;
                case publisherRadio:
                    props.findBooksBy(`${urlApiAccount}/book/publisher/${searchQuery}`);
                    break;
                default: props.findBook(searchQuery);
            }
        }else{
            props.findBooksBy(`${urlApiAccount}/book/all`);
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
            <form id={'search'} onSubmit={handlePurchase}>
                <label htmlFor={"search"}>Search book by : </label>
                <label htmlFor={isbnRadio}>isbn</label>
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
                />
                <div><input type="text"
                          value={searchQuery}
                          onChange={handleChange}/>
                    <button type={'submit'}>Find book</button>
                </div>
            </form>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        findBook,
        findBooksBy
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindBook);