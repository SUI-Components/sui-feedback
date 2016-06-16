import React from 'react';
import cx from 'classnames';
import Modal from '@schibstedspain/sui-modal';

class Feedback extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hideSurvey: false,
      openModal: false
    };
  }

  static get propTypes() {
    return {
      hideSurvey: React.PropTypes.bool,
      literals: React.PropTypes.object,
      actions: React.PropTypes.array
    };
  }

  static get defaultProps() {
    return {
      hideSurvey: false
    };
  }

  handleClose(){
    this.setState({
      hideSurvey: true,
      openModal: false
    });
  }

  handleOpenModal(event){
    event.preventDefault();
    this.setState({
      openModal: true
    });
  }

  render() {
    const hideSurvey = cx('sui-Feedback', {
      'sui-Feedback--hidden': this.state.hideSurvey
    });

    return (
      <div>
        <div>
          <Modal
            open={this.state.openModal}
            verticallyCentered
            closeOnOutsideClick
            header={
              <strong>{this.props.literals.modalTitle}</strong>
            }
            content={
              <div>
                <p>{this.props.literals.modalContent}</p>
              </div>
            }
          />
        </div>
        <div className={hideSurvey}>
          <button
            className='sui-Feedback-close'
            onClick={this.handleClose.bind(this)}>
          </button>
          <div className='sui-Feedback-wrapper'>
            <div className='sui-Feedback-content'>
              <h4 className='sui-Feedback-title'>{this.props.literals.footerTitle}</h4>
              <p className='sui-Feedback-description'>{this.props.literals.footerParagraf}</p>
              <button
                  onClick={this.handleOpenModal.bind(this)} className='sui-Feedback-cta'>{this.props.literals.buttonOk}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
