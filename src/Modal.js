import React from 'react'

const Modal = (props) => {
  if (props.isOpen === false) {
    return null
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    background: '#fff',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  }

  const backdropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndex: '9998',
    background: 'rgba(0, 0, 0, 0.3)'
  }

  const close = (e) => {
    e.preventDefault()

    if (props.onClose) {
      props.onClose()
    }
  }

  return (
    <div>
      <div style={modalStyle}>{props.children}</div>
      <div style={backdropStyle} onClick={e => close(e)}/>
    </div>
  )
}

Modal.propTypes = {
  children: React.PropTypes.array,
  isOpen: React.PropTypes.bool,
  onClose: React.PropTypes.func
}

export default Modal;
