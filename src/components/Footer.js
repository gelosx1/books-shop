import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {clientRequest} from "../actions/StandartRequestActions";
import {bindActionCreators} from "redux";

function Footer(props) {

    useEffect(() => {
        if (props.info !== 'pending...') {
            const timer = setTimeout(() => {
                props.footerInfo('')
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [props, props.info]);

    const renderSpin = () => {
        return (
            <div className={'fixed-bottom'}>
                <img style={{width: 3 + 'rem'}} src={`${process.env.PUBLIC_URL}/spin.gif`} alt={'pending...'}/>
            </div>
        );
    };

    const renderMessage = () => {
        return (
            <div className={'fixed-bottom'}>
                <h4 className={'mb-5'}>{props.info}</h4>
            </div>
        );
    };

    return props.info === 'pending...' ? renderSpin() : renderMessage();

}

function mapStateToProps(state) {
    return {
        info: state.userLogin.info
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        footerInfo: clientRequest
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);