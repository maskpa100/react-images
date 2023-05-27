import {funOrientationsState, funOrientationsValue, funOptionState, funOptionValue} from "../../redux/search-reducer";
import Search from "./Search";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        searchPage: state.searchPage
    }
}


export default connect(mapStateToProps, {funOrientationsState, funOrientationsValue, funOptionState, funOptionValue})(Search);

