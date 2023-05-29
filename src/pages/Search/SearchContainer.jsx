import {funOrientationsState, funOrientationsValue, funOptionState, funOptionValue, getImages} from "../../redux/search-reducer";
import React from 'react';
import Search from "./Search";
import {connect} from "react-redux";
import {searchAPI} from "../../api/api";

class SearchContainer extends React.Component {
    componentDidMount() {
        this.props.getImages(1,5);
    }

    onPageChanged = (pageNumber) => {
        this.props.getImages(1,5);
    }

    render() {
        return <>
            <Search searchPage={this.props.searchPage}
                    funOrientationsState={this.props.funOrientationsState}
                    funOrientationsValue={this.props.funOrientationsValue}
                    funOptionState={this.props.funOptionState}
                    funOptionValue={this.props.funOptionValue}
             />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        searchPage: state.searchPage
    }
}


export default connect(mapStateToProps, {funOrientationsState, funOrientationsValue, funOptionState, funOptionValue, getImages})(SearchContainer);

