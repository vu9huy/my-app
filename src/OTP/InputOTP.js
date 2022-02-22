import { useState, useRef } from 'react';
import OtpInput from 'react-otp-input';
import CountdownAnimation from './CountdownAnimation';

const InputOTP = (props) => {
    const [otpComfirm, setOtpComfirm] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [otp, setOtp] = useState('');
    const generateBtnRef = useRef();

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

    function handleGenerateOTP() {
        let creatOTP = Math.floor(100000 + Math.random() * 900000);
        setOtp(creatOTP);
        props.setOtpOriginalParent(creatOTP);
        generateBtnRef.current.resetTimer();
        setIsDisabled(false)
    }
    return (
        <div className='otp-container'>
            <div className="generate-otp">
                <div className="display-otp">Your OTP is: {otp}</div>
                <button className="generate-otp-btn" onClick={() => handleGenerateOTP()}>Generate OTP</button>
            </div>

            <div className='input-otp-container'>
                <OtpInput
                    value={otpComfirm}
                    onChange={(otpComfirm) => handleChangeInputOTP(otpComfirm)}
                    numInputs={6}
                    separator={<span>-</span>}
                    inputStyle={'input-otp'}
                />
                <CountdownAnimation
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                    ref={generateBtnRef}
                />

                <div className='input-otp-action'>
                    <button onClick={() => handleClearInputOTP()} className='otp-clear-btn'>Clear</button>
                    <button className={isDisabled ? 'otp-comfirm-btn disabled-btn' : 'otp-comfirm-btn'} disabled={isDisabled} onClick={() => handleComfirmInputOTP()} >Comfirm</button>
                </div>
            </div>
        </div>
    )
}

export default InputOTP;