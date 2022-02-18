import './DisplayProducts.scss';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import sneaker1 from '../assets/images/sneaker1.jpg';
import sneaker2 from '../assets/images/sneaker2.jpg';
import sneaker3 from '../assets/images/sneaker3.jpg';
import sneaker4 from '../assets/images/sneaker4.jpg';


const DisplayProducts = () => {
    const [quantily, setQuantily] = useState(1);
    const [currentImage, setCurrentImage] = useState(sneaker1);
    const images = [sneaker1, sneaker2, sneaker3, sneaker4];
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    function handleClickPreviewImage() {
        setIsOpen(true);
        setPhotoIndex(images.findIndex((image) => image === currentImage))
    }
    return (
        <div className='container'>
            <div className="display-products">
                <div className='content-left'>
                    <div className='large-image' >
                        <img src={currentImage} onClick={() => handleClickPreviewImage()}></img>
                    </div>
                    <div className='small-image ' >
                        <div className='small-image-1' >
                            <img src={sneaker1} onClick={() => setCurrentImage(sneaker1)}
                                className={currentImage === sneaker1 ? 'active' : ''}></img>
                        </div>
                        <div className='small-image-2'>
                            <img src={sneaker2} onClick={() => setCurrentImage(sneaker2)}
                                className={currentImage === sneaker2 ? 'active' : ''}></img>
                        </div>
                        <div className='small-image-3'>
                            <img src={sneaker3} onClick={() => setCurrentImage(sneaker3)}
                                className={currentImage === sneaker3 ? 'active' : ''}></img>
                        </div>
                        <div className='small-image-4' >
                            <img src={sneaker4} onClick={() => setCurrentImage(sneaker4)}
                                className={currentImage === sneaker4 ? 'active' : ''}></img>
                        </div>
                    </div>

                </div>
                <div className='content-right'>
                    <h2 className='name-product'>Giày chạy bộ nam New Balance Cushioning - M880F11</h2>
                    <span className='price-product'>1.598.000 ₫</span>
                    <span className='size-product'>Size: 32</span>
                    <div className='quantily'>
                        <span>Số lượng: </span>
                        <div className='change-quantily'>
                            <button onClick={() => setQuantily(quantily - 1)}>-</button>
                            <input value={quantily} type="text" onChange={(e) => setQuantily(e.target.value)}></input>
                            <button onClick={() => setQuantily(quantily + 1)}>+</button>
                        </div>
                    </div>
                    <button className='buy'>Chọn mua</button>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>
    )
}

export default DisplayProducts