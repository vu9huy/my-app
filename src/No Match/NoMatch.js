import './NoMatch.scss';
import notFound3 from '../assets/images/404_3.jpg';


const NoMatch = () => {
    return (
        <div className='not-found'>
            <img alt='404' src={notFound3} />
        </div>
    )
}

export default NoMatch;