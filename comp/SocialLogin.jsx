import Image from 'next/image'
import github from '../utils/github.svg'
import google from '../utils/google.svg'

const SocialLogin = () => {
    return (
        <div className="social">
            <button><Image src={github} alt="github" width="20" height="20" /><span>Github</span></button>
            <button><Image src={google} alt="google" width="20" height="20" /><span>Google</span></button>
        </div>
    )
}

export default SocialLogin