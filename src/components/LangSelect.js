import React, {Component} from 'react';
import Select from "react-select";
import {connect} from "react-redux";
import {RECEIVE_LANGUAGES} from "../actions";
import {Api} from "../api";

const mapStateToProps = ({languages: {defaultLanguage, languages}}) => ({
    options: languages,
    defaultLanguage
});

const mapDispatchToProps = dispatch => ({
    onLanguagesLoad: languageSet => dispatch({type: RECEIVE_LANGUAGES, languageSet})
});

class LangSelector extends Component {
    componentDidMount() {
        Api.getLanguages().then(({defaultName, languages}) => {
            const mapped = languages.map(({name: value, alias: label}) => ({value, label}));
            const defaultLanguage = mapped.find(lang => lang.value === defaultName);
            this.props.onLanguagesLoad({languages: mapped, defaultLanguage});
        })
    }

    render() {
        const {onChange, options, value, defaultLanguage} = this.props;

        if (options.length > 0) {
            return <Select value={value || defaultLanguage} onChange={onChange} options={options}/>
        } else {
            return <Select isLoading={true} />;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector)