import { Component } from 'react';
import styles from '../styles.module.css';

export class Modal extends Component {
  closeOnPushEsc = ev => {
    if (ev.code === 'Escape') {  
      this.props.closeModal()
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnPushEsc);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.closeOnPushEsc);
  }

  render() {
    const {
      // closeModal,
      largeImage: { src, alt },
    } = this.props;
    return (
      <div  className={styles.Overlay}>
        <img  className={styles.Modal} src={src} alt={alt} />
        {/* <button type="button" onClick={closeModal}> */}
          {/* Close
        </button> */}
      </div>
    );
  }
}
