import Modal from 'react-modal';

import "./CustomModalStyle.css";

function CustomModal(props) {
    const { isOpen, setModal, modalInformation } = props;

    if (modalInformation) {
        return (
            <Modal isOpen={isOpen} onRequestClose={() => setModal(false)} overlayClassName="modalOverlay" className="customModal" ariaHideApp={false}>
                <div className="modalHeaderContainer">
                    <div className="modalTitleContainer">
                        <p className="modalTitleText">{modalInformation.positionTitle} - {modalInformation.location}</p>
                    </div>

                    <p className="closeIcon" onClick={() => setModal(false)}>✖</p>
                </div>

                <div className="modalDescriptionContainer" onWheel={(e) => e.stopPropagation()}>
                    <ul>
                        {modalInformation.description.map((item, index) => {
                            return (
                                <li className="modalDescriptionText" key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </Modal>
        )
    } else {
        return null;
    }
}

export default CustomModal;