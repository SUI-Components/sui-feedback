import React from 'react';
import cx from 'classnames';
import Modal from '@schibstedspain/sui-modal';

class Stickyfooter extends React.Component {
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
    const hideSurvey = cx('sui-Stickyfooter', {
      'sui-Stickyfooter--hidden': this.state.hideSurvey
    });

    return (
      <div>
        <div>
          {console.log(this.state.openModal)}
          <Modal
            open={this.state.openModal}
            verticallyCentered
            closeOnOutsideClick
            header={
              <strong>{this.props.literals.modalTitle}</strong>
            }
            content={
              <div>
                <p>Cras vitae consectetur dui. Nullam quis arcu id ligula rhoncus faucibus et eget odio. Etiam vulputate fringilla nibh sed sodales. Phasellus facilisis dignissim aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque feugiat vehicula odio at venenatis. Integer rhoncus tortor sed auctor laoreet. Aliquam ac vulputate urna. Suspendisse felis eros, maximus eget urna vitae, pellentesque pretium odio. Duis mi arcu, laoreet sit amet pulvinar ac, congue quis turpis. Cras rutrum leo ac massa malesuada, quis vestibulum lorem convallis. Fusce eget tellus euismod, fringilla nulla ornare, blandit purus. Nam orci lacus, faucibus at nisi id, auctor molestie nunc. Nulla a porta quam. Donec vel iaculis nibh.</p>
                <p>Ut maximus fermentum mollis. Phasellus tincidunt nunc sem, eu efficitur nunc porta ut. Suspendisse aliquam odio ex, in facilisis turpis dictum quis. Morbi a venenatis ante, at imperdiet neque. Nullam eu risus dignissim, semper nunc in, sodales nibh. Sed tempus sapien id libero vulputate, at vestibulum tellus tempor. Aenean ornare massa et semper porta.</p>
              </div>
            }
          />
        </div>
        <div className={hideSurvey}>
          <button
            className='sui-Stickyfooter-close'
            onClick={this.handleClose.bind(this)}>
          </button>
          <div className='sui-Stickyfooter-wrapper'>
            <div className='sui-Stickyfooter-content'>
              <h4 className='sui-Stickyfooter-title'>{this.props.literals.footerTitle}</h4>
              <p className='sui-Stickyfooter-description'>{this.props.literals.footerParagraf}</p>
              <button
                  onClick={this.handleOpenModal.bind(this)} className='sui-Stickyfooter-cta'>{this.props.literals.buttonOk}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stickyfooter;
