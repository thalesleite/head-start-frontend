import React, { useState } from 'react';

import { connect } from 'react-redux';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactCountryFlag from 'react-country-flag';

import { setLanguage } from '../../redux/language/language.actions';

import './ChooseLanguage.scss';

function ChooseLanguage(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLanguage = ( languageChose ) => {
    const { setLanguage } = props;

    setLanguage(languageChose);
    handleClose();
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
            <h2 id="modal-title">Select Language</h2>
            <div id="modal-description">
              <ReactCountryFlag 
                className="item-flag"
                countryCode="GB" 
                style={{
                    fontSize: '6em',
                    lineHeight: '6em',
                }}
                svg
                onClick={() => { handleLanguage('EN') }}
              />
              <ReactCountryFlag
                className="item-flag"
                countryCode="BR"
                style={{
                    fontSize: '6em',
                    lineHeight: '6em',
                }}
                svg
                onClick={() => { handleLanguage('BR') }}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  language: state.language,

});

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: language => dispatch(setLanguage(language)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);