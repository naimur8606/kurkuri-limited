import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carosel = () => {
    return (
        <Carousel
            className='z-40'
            autoPlay={true} // Auto play the carousel
            infiniteLoop={true} // Loop through the slides continuously
            showArrows={true} // Display navigation arrows
            showStatus={false} // Hide the status indicator
            showThumbs={false} // Hide the thumbnail images
            >
                <div className='h-[200px] bg-blend-overlay bg-black bg-opacity-10 lg:h-[500px] pl-[10%] lg:pl-[15%] bg-cover bg-[url("https://i.ibb.co/5r0NzG3/pexels-pixabay-38544-e1644344402518-1580x549.jpg")]'>
                    <div className='w-40 lg:w-64'>
                        <img className='w-[100%]' src="https://i.ibb.co/3mYMtyR/kurkuri-removebg-preview.png" alt="" />
                    </div>
                    <h2 className='text-left lg:mt-[10%] text-3xl lg:text-7xl font-bold text-[#fffdfdf9] text-shadow'>We have a great teem. <br /> Happy coding</h2>
                </div>
                <div className='h-[200px] lg:h-[500px] bg-cover bg-[url("https://i.ibb.co/f45G508/c-e959e5c1779eb475bcd630f49de80d79-dd6071211e9698a2f9718d7e8b7cd884.jpg")]'>
                    
                </div>
            </Carousel>
    );
};

export default Carosel;