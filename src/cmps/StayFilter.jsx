import React, { Component } from 'react'
export class StayFilter extends Component {
    state = {
        node: React.createRef(),
        currentBtnId: null,
        data: [{ id: 0, name: "Price" }, { id: 1, name: "Type of place" }, { id: 2, name: "Amenities", }, { id: 3, name: "Stay Rules" }]
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeModal);
    }

    toggleModal = (id) => {
        const currentBtnId = id !== this.state.currentBtnId ? id : null
        this.setState({ currentBtnId })
    }

    closeModal = (ev) => {
        if (!this.node.contains(ev.target) || this.node === ev.target) {
            console.log('closeModal');
            this.setState({ currentBtnId: null })
        }
    }

    render() {
        return (
            <section className="stay-filter-2">
                <h2 className="filter-header">Filter Header</h2>
                <div className="btn-group flex" ref={node => this.node = node}>
                    {this.state.data.map((btn, idx) => {
                        return (
                            <>
                                <div key={idx} className="btn-container">
                                    <button className="btn" btnId={btn.id} onClick={() => this.toggleModal(btn.id)}>
                                        {btn.name}
                                    </button>
                                    {
                                        this.state.currentBtnId === btn.id ? (
                                            <div className="modal-container" >
                                                <Modal name={btn.name} id={btn.id} toggleModal={this.toggleModal} />
                                            </div>
                                        ) : null}
                                </div>
                            </>
                        );
                    })}
                </div>
            </section>
        );
    }
}
const Modal = ({ name, id, toggleModal, closeModal }) => (
    <>
        <div onClick={(ev) => { closeModal(ev) }}></div>
        <div className="filter-modal flex column" onClick={(ev) => { ev.stopPropagation(); console.log('stopprop') }} style={{ position: 'absolute', color: 'red', zIndex: '2' }}>
            <p>THIS IS {name} MODAL</p>
            <div className="btn-container">
                <button onClick={() => { toggleModal(id) }}>Close</button>
                <button onClick={() => { toggleModal(id) }}>Update</button>
            </div>
        </div>
    </>
)