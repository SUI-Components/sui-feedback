import React from 'react';
import ReactDom from 'react-dom';
import Stickyfooter from '../src';
import './style.scss';
import '../src/index.scss';

const literals = {
  footerTitle: 'This is an important notice',
  footerParagraf: 'This is more info about the notice',
  modalTitle: 'My new brand modal',
  buttonOk: 'OK'
};

ReactDom.render(
  <Stickyfooter literals={literals} />,
  document.getElementById('main')
);
