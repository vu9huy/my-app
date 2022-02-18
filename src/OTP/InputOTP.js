import { useState } from 'react';
import OtpInput from 'react-otp-input';
import Countdown from './Countdown';

const InputOTP = (props) => {
    const [otpComfirm, setOtpComfirm] = useState('');
    const [isDisabled, setIsDissble] = useState(false);

    function handleChangeInputOTP(otpComfirm) {
        setOtpComfirm(otpComfirm);
        props.setOtpComfirmParent(otpComfirm)
    }
    function handleClearInputOTP() {
        setOtpComfirm('');

    }
    function handleComfirmInputOTP() {
        props.handleComfirmOTP();
    }

    return (
        <div className='input-otp-container'>
            <OtpInput
                value={otpComfirm}
                onChange={(otpComfirm) => handleChangeInputOTP(otpComfirm)}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={'input-otp'}
            />
            <Countdown
                isDisabled={isDisabled}
                setIsDissble={setIsDissble}
                isResetTimer={props.isResetTimer}
            />
            <div className='input-otp-action'>
                <button onClick={() => handleClearInputOTP()} className='otp-clear-btn'>Clear</button>
                <button className={isDisabled ? 'otp-comfirm-btn disabled-btn' : 'otp-comfirm-btn'} disabled={isDisabled} onClick={() => handleComfirmInputOTP()} >Comfirm</button>
            </div>

        </div>
    )
}

export default InputOTP;