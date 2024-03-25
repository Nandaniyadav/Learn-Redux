import React from 'react';
import './HomeStyle.css';

const Home = () => {
    return (
        <>
           <div className='head'> <h1><u>Learn redux</u></h1></div>
            <div className='addtoCart'>
                <img className='cart' src='https://banner2.cleanpng.com/20180711/qrb/kisspng-computer-icons-shopping-cart-clip-art-add-to-cart-5b45e8502bae06.3190623015313081121789.jpg' alt='Cart' />
            </div>
            <div className='card-rapper'>
                <div className='img-rapper'>
                    <img className='img' src="https://w7.pngwing.com/pngs/445/184/png-transparent-telephone-red-phone-photography-phone-icon-mobile-phone.png" alt='phone' />
                </div>
                <div className='aboutitem'>
                    <span className='itemNmae'>I-Phone</span>
                    <span className='itemPrice'>Price : $10000.00</span>
                </div>
                <div className='button-rapper'>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>
       
        </>
    )
}

export default Home