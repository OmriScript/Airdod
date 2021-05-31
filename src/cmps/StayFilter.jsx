import React, { Component } from 'react';
import { Popper } from '@material-ui/core';



export class StayFilter extends Component {

    state = {
        anchorEl: null,
        open: false
    }

    flipOpen = () => this.setState({ ...this.state, open: !this.state.open });

    handleClick = event => {
        this.state.anchorEl
            ? this.setState({ anchorEl: event.currentTarget })
            : this.setState({ anchorEl: null });
        this.flipOpen();
    };


    render() {
        // console.log(this.state.anchorEl);
        // console.log(this.state.open);
        const id = this.state.open ? "simple-popper" : null;

        return (
            <section className="stay-filter-2">
                <h2 className="filter-header">Filter Header</h2>
                <div className="btn-group">
                    <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Price</button>
                    <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Type of place</button>
                    <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Amenities</button>
                    <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Stay Rules</button>
                    {/* <DropdownFilter msg="Type a msg for display" /> */}
                    <Popper id={id} open={this.state.open} anchorEl={this.state.anchorEl} >
                        <div>Content
                        {/* <div className="dropdown-filter">Content */}
                            {/* {this.state.dropdownActive === 'price && <form>rrgrggrgrg</form>}
                            {this.state.dropdownActive === 'type && <form>rrgrggrgrg</form>}
                            {this.state.dropdownActive && <form>rrgrggrgrg</form>}
                            {this.state.dropdownActive && <form>rrgrggrgrg</form>} */}
                        </div>
                    </Popper>
                </div>
            </section>
        )
    }
}