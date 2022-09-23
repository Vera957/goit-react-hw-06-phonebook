import { Component } from "react";
import { StyledInputTwo } from "style/style";

export class Field2 extends Component {
    render() {
        return (<>
            <h2>Search by name</h2>
            <form>
                <StyledInputTwo
                    type="text"
                    placeholder="Search"
                    name="filter"
                    id='searchName'
                    onChange={(e) => this.props.onChange(e.target.value)}
                />
            </form>
        </>)
    }
}