import React  from 'react';
import { bgColor } from '../../utils/classNames';
import { useStoreActions ,useStoreState } from 'easy-peasy';
import './index.css';

const InvetoryDialog = ({ header, body, actions}) => {
  const { modalState } = useStoreState(store => store.gameUi)
  const setModal = useStoreActions(actions => actions.gameUi.setModal)
  
    return(
    <div style={{animationDuration: '0.2s'}} className={`dialog_root animated  ${modalState.isOpen? 'fadeIn': 'not_active fadeOut'}`}>
        <div className='backDrop' onClick={() => setModal(!modalState)}></div>
            <div className={`dialog_container`}>
            <div className='dialog_paper'>
                <div className="dialog-title">
                {header}
            </div>
            <div className='dialog_content_root'>
            {body}
          </div>
          <div className='dialog_actions_root'>
          {actions}
          </div>
          </div>
            </div>
    </div>
    )
}

export default InvetoryDialog;