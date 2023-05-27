import React from 'react';
import { useNavigate } from 'react-router-dom';

var Modal = function Modal(props) {
  var isOpen = props.isOpen;
  var navigate = useNavigate();
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

export { Modal };
//# sourceMappingURL=index.modern.js.map
