import { useState } from "react";


const GenerateOTP = (props) => {
    const [otp, setOtp] = useState('')

    function handleGenerateOTP() {
        let creatOTP = Math.floor(100000 + Math.random() * 900000);
        setOtp(creatOTP);
        props.setOtpOriginalParent(creatOTP);
    }

    return (
        <div className="generate-otp">
            <div className="display-otp">Your OTP is: {otp}</div>
            <button className="generate-otp-btn" onClick={() => handleGenerateOTP()}>Generate OTP</button>
        </div>

    )
}

export default GenerateOTP;