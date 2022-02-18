import { useEffect, useState } from 'react';
import GenerateOTP from './GenerateOTP';
import InputOTP from './InputOTP';
import './OTP.scss';

const OTP = () => {
    const [otpOriginalParent, setOtpOriginalParent] = useState('');
    const [otpComfirmParent, setOtpComfirmParent] = useState('');



    function handleComfirmOTP() {
        if (!otpOriginalParent) {
            alert('Please regenate an OTP...')
            return
        }
        if (!otpComfirmParent) {
            alert('Please comfirm OTP')
            return
        }
        if (otpOriginalParent == otpComfirmParent) {
            alert('Correct OTP');
        } else {
            alert('Wrong OTP!');
        }
    }


    return (
        <div className='otp-container'>
            <GenerateOTP
                setOtpOriginalParent={setOtpOriginalParent}
            />
            <InputOTP
                setOtpComfirmParent={setOtpComfirmParent}
                handleComfirmOTP={handleComfirmOTP}
            />
        </div>

    )
}

export default OTP;