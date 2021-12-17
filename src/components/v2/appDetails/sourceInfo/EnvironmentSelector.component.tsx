import React, { useState } from 'react'
import Select, { components } from 'react-select';
import { multiSelectStyles, SingleSelectOption as Option, } from '../../../common'
import ScalePodModalComponent from './ScalePodModal.component';
import './sourceInfo.css';
import { ReactComponent as CodeCompare } from '../../assets/icons/ic-code-compare.svg'
import IndexStore from '../index.store';

function EnvironmentSelectorComponent() {
    const [showhiberbateConfirmationModal, setshowHibernateConfirmationModal] = useState(false);
     const appDetails =IndexStore.getAppDetails()

    return (
        <div className="flexbox flex-justify pl-20 pr-20 pt-16 pb-16">
            <div>
                <div className="flexbox">
                    <div style={{ width: 'clamp( 100px, 30%, 200px )', height: '100%', position: 'relative' }}>
                        <svg
                            viewBox="0 0 200 40"
                            preserveAspectRatio="none"
                            style={{ width: '100%', height: '100%', display: 'flex' }}
                        >
                            <path d="M0 20 L200 20 Z" strokeWidth="1" stroke="#0066cc" />
                            <path d="M0 10 L0, 30" strokeWidth="2" stroke="#0066cc" />
                        </svg>
                        <div
                            className="bcb-5 br-10 cn-0 pl-8 pr-8"
                            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        >
                            ENV
                </div>
                    </div>
                    <div style={{ width: '200px' }} className="eb-5 br-4 fw-6 fs-14 cb-5 bw-1 bcn-0 flex left pl-12 pr-12">
                     <div>{appDetails.environmentName}</div>
                    </div>
                </div>
            </div>
            <div >
                {/* <button className="scale-pod__btn flex left cta cancel pb-6 pt-6 pl-12 pr-12" onClick={() => setshowHibernateConfirmationModal(true)}>
                    <CodeCompare className="mr-4" /> Scale objects
            </button> */}
            </div>
            {showhiberbateConfirmationModal && <ScalePodModalComponent onClose={() => setshowHibernateConfirmationModal(false)} />}
        </div>
    )
}

export default EnvironmentSelectorComponent