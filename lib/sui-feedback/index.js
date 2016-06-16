'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _suiModal = require('@schibstedspain/sui-modal');

var _suiModal2 = _interopRequireDefault(_suiModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = function (_React$Component) {
  _inherits(Feedback, _React$Component);

  function Feedback(props) {
    _classCallCheck(this, Feedback);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Feedback).call(this, props));

    _this.state = {
      hideSurvey: false,
      openModal: false
    };
    return _this;
  }

  _createClass(Feedback, [{
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        hideSurvey: true,
        openModal: false
      });
    }
  }, {
    key: 'handleOpenModal',
    value: function handleOpenModal(event) {
      event.preventDefault();
      this.setState({
        openModal: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var hideSurvey = (0, _classnames2.default)('sui-Feedback', {
        'sui-Feedback--hidden': this.state.hideSurvey
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_suiModal2.default, {
            open: this.state.openModal,
            verticallyCentered: true,
            closeOnOutsideClick: true,
            header: _react2.default.createElement(
              'strong',
              null,
              this.props.literals.modalTitle
            ),
            content: _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                this.props.literals.modalContent
              )
            )
          })
        ),
        _react2.default.createElement(
          'div',
          { className: hideSurvey },
          _react2.default.createElement('button', {
            className: 'sui-Feedback-close',
            onClick: this.handleClose.bind(this) }),
          _react2.default.createElement(
            'div',
            { className: 'sui-Feedback-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'sui-Feedback-content' },
              _react2.default.createElement(
                'h4',
                { className: 'sui-Feedback-title' },
                this.props.literals.footerTitle
              ),
              _react2.default.createElement(
                'p',
                { className: 'sui-Feedback-description' },
                this.props.literals.footerParagraf
              ),
              _react2.default.createElement(
                'button',
                {
                  onClick: this.handleOpenModal.bind(this), className: 'sui-Feedback-cta' },
                this.props.literals.buttonOk
              )
            )
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        hideSurvey: _react2.default.PropTypes.bool,
        literals: _react2.default.PropTypes.object,
        actions: _react2.default.PropTypes.array
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        hideSurvey: false
      };
    }
  }]);

  return Feedback;
}(_react2.default.Component);

exports.default = Feedback;