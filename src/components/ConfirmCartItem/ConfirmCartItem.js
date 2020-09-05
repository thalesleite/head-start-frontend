import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

import './ConfirmCartItem.scss';

function ConfirmCartItem({ course, language }) {
  const text = language === 'EN' ? 'Added to cart' : 'Adicionado ao carrinho';
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="item-modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <h2 id="modal-title">{ text }</h2>
            <p id="modal-description">
              { course.name }
            </p>
            <CheckCircleOutlinedIcon className="icon"/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ConfirmCartItem;