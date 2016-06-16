import React from 'react';
import ReactDom from 'react-dom';
import Feedback from '../src';
import './style.scss';
import '../src/index.scss';

const literals = {
  footerTitle: 'This is an important notice',
  footerParagraf: 'This is more info about the notice',
  modalTitle: 'Feedback modal Title',
  modalContent: 'Insert here your important extended content inside your modal',
  buttonOk: 'OK'
};

ReactDom.render(
  <Feedback literals={literals} />,
  document.getElementById('main')
);
