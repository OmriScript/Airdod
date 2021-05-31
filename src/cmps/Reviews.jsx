import { Component } from 'react'
import { AvatarSymbol } from './AvatarSymbol.jsx'
import { StayRate } from './StayRate.jsx'

import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-modal'
Modal.setAppElement('#root')

export class Reviews extends Component {

    state = {
        modalIsOpen: false,
        review: {
            rate: '',
            summary: ''
        }
    }

    handleChange = ev => {
        const field = ev.target.name
        const value = ev.target.name === 'rate' ? +ev.target.value : ev.target.value
        this.setState({ review: { ...this.state.review, [field]: value } })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    render() {

        const { reviews, stay } = this.props
        const shortReviews = reviews.slice(0, 4)

        return (

            <div className="reviews-container">
                <StayRate
                    stay={stay}
                    isShowReviews={true}
                />
                <div>
                    {reviews && shortReviews.map((review, idx) => {
                        return <div key={idx} className="review-container flex column">
                            <div className="review-writer-container flex align-center">
                                <div>
                                    <AvatarSymbol url={review.by.imgUrl} />
                                </div>
                                <div className="review-writer flex column">
                                    <span>{review.by.fullname}</span>
                                    <span>15.02.21</span>
                                </div>
                            </div>
                            <div>
                                <p>{review.txt}</p>
                            </div>
                        </div>
                    })}
                </div>

                <button onClick={() => {
                    this.setState({ modalIsOpen: true })
                }}>Add review</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={this.closeModal}
                    className="review-modal"
                    overlayClassName="review-modal-overlay"
                >
                    <h2>Add review</h2>
                    <form>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating
                                name="rate"
                                value={this.state.review.rate}
                                onChange={this.handleChange}
                            />
                        </Box>
                        <div className="flex column">
                            <label htmlFor="review-textarea">Summary:</label>
                            <textarea
                                id="review-textarea"
                                onChange={this.handleChange}
                                type="text"
                                name="summary"
                                value={this.state.review.summary}
                                placeholder="Describe your expirience" />
                        </div>
                    </form>

                    <button onClick={this.closeModal} className="close-modal-btn">
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                </Modal>
            </div>
        )
    }
}