'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stickyfooter = function (_React$Component) {
  _inherits(Stickyfooter, _React$Component);

  function Stickyfooter(props) {
    _classCallCheck(this, Stickyfooter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Stickyfooter).call(this, props));

    _this.state = {
      hideSurvey: false
    };
    return _this;
  }

  _createClass(Stickyfooter, [{
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        hideSurvey: true
      });
    }
  }, {
    key: 'handleOpenModal',
    value: function handleOpenModal(event) {
      event.preventDefault();
      this.props.openModal();
    }
  }, {
    key: 'handleMVP',
    value: function handleMVP(event) {
      event.preventDefault();
      this.props.enableMVP();
    }
  }, {
    key: 'render',
    value: function render() {
      var hideSurvey = (0, _classnames2.default)('sui-Stickyfooter', {
        'sui-Stickyfooter--hidden': this.state.hideSurvey
      });

      return _react2.default.createElement(
        'div',
        { className: hideSurvey },
        _react2.default.createElement('button', {
          className: 'sui-Stickyfooter-close',
          onClick: this.handleClose.bind(this) }),
        _react2.default.createElement(
          'div',
          { className: 'sui-Stickyfooter-wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'sui-Stickyfooter-content' },
            _react2.default.createElement(
              'h4',
              { className: 'sui-Stickyfooter-title' },
              'Este es un listado de resultados en fase de pruebas'
            ),
            _react2.default.createElement(
              'p',
              { className: 'sui-Stickyfooter-description' },
              'Si lo prefieres puedes acceder a la versión clásica'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.handleOpenModal.bind(this), className: 'sui-Stickyfooter-cta' },
              'Llévame al listado clásico'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.handleMVP.bind(this), className: 'sui-Stickyfooter-cta' },
              'Me quedo aquí'
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
        openModal: _react2.default.PropTypes.func,
        enableMVP: _react2.default.PropTypes.func
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

  return Stickyfooter;
}(_react2.default.Component);

exports.default = Stickyfooter;