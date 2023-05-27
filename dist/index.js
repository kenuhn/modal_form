function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactRouterDom = require('react-router-dom');

var Modal = function Modal(props) {
  var isOpen = props.isOpen;
  var navigate = reactRouterDom.useNavigate();
  if (isOpen) console.log("salut");
  return /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      display: isOpen ? 'flex' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "modal-header"
  }, "HRNET"), /*#__PURE__*/React.createElement("p", {
    className: ""
  }, " Nouvelle utilisateur cr\xE9e !! "), /*#__PURE__*/React.createElement("button", {
    className: "modal-button",
    onClick: function onClick() {
      navigate('./Employe');
    }
  }, " ok ")));
};

exports.Modal = Modal;
//# sourceMappingURL=index.js.map
