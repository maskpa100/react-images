import {funOrientationsState, funOrientationsValue, funOptionState, funOptionValue, getImages, getWords} from "../../redux/search-reducer";
import React from 'react';
import Search from "./Search";
import {connect} from "react-redux";
import {searchAPI} from "../../api/api";


    let words = "";
class SearchContainer extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         optionValue: this.props.searchPage.optionValue,
         orientationsValue: this.props.searchPage.orientationsValue
      }
      
   };
    componentDidMount() {
      this.props.getImages(
        1,
        5,
        this.props.searchPage.words,
        this.props.searchPage.optionValue,
        this.props.searchPage.orientationsValue
      );
        
    }
    componentDidUpdate(newProps, newState) {
        //console.log(newProps.searchPage.optionValue) 
        //console.log(newState.optionValue)  
        //console.log(this.props.searchPage.optionValue)  
        if( 
            newProps.searchPage.optionValue !== this.props.searchPage.optionValue || 
            newProps.searchPage.orientationsValue !== this.props.searchPage.orientationsValue ||
            newProps.searchPage.words !== this.props.searchPage.words
            ){
            this.props.getImages(
              1,
              5,
              this.props.searchPage.words,
              this.props.searchPage.optionValue,
              this.props.searchPage.orientationsValue
            );
        }

    }




    render() {
        return <>
            <Search searchPage={this.props.searchPage}
                    funOrientationsState={this.props.funOrientationsState}
                    funOrientationsValue={this.props.funOrientationsValue}
                    funOptionState={this.props.funOptionState}
                    funOptionValue={this.props.funOptionValue}
                    getWords={this.props.getWords}
             />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        searchPage: state.searchPage
    }
}


export default connect(mapStateToProps, {funOrientationsState, funOrientationsValue, funOptionState, funOptionValue, getImages, getWords})(SearchContainer);

