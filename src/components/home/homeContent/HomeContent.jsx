
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const HomeContent = () => {
    return (
        <div>
            <Carousel
            className='z-40'
            autoPlay={true} // Auto play the carousel
            infiniteLoop={true} // Loop through the slides continuously
            showArrows={true} // Display navigation arrows
            showStatus={false} // Hide the status indicator
            showThumbs={false} // Hide the thumbnail images
            >
                <div>
                    <img className='h-60 lg:h-screen' src="https://i.ibb.co/5r0NzG3/pexels-pixabay-38544-e1644344402518-1580x549.jpg" alt="Image 1" />
                </div>
                <div>
                    <img className='h-60 lg:h-screen' src="https://www.wipo.int/export/sites/www/shared/images/eo_845.jpg" alt="Image 2" />
                </div>
            </Carousel>
        </div>
    );
};

export default HomeContent;