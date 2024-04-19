import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Testimonial = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-center mt-10">
        What our users says{" "}
      </p>
      <p className="text-center pt-4">
        Testimonials from our existing customers
      </p>

      <div className="border border-red-500 slider-container w-[1120px] p-10">
        <Slider {...settings}>
          <div className="border rounded-2xl w-[500px]">
            <div className="flex flex-row">
              <img
                src="https://images.unsplash.com/photo-1527082395-e939b847da0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                alt="profilephoto"
                className="h-14 w-14 rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">Marko Denic</h3>
                <p>Software Engineer and Dev. Advocate</p>
              </div>
            </div>
            <p>
              UIdeck is my go-to source for downloading quality HTML and
              Tailwind CSS templates, I really love their design consistency and
              clear codes with detailed comments, highly recommended!
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1682705467773-634986d7d0fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              alt="profilephoto"
              className="h-14 w-14 rounded-full"
            />
            <h3>Fajar Siddiq</h3>
            <p>Serial Entrepreneur, Singapore</p>
            <p>
              I've seen templates everywhere online. Is hard for me to decide,
              some are costly and some are not clear. You made UIdeck possible,
              affordable for developers/designers. Complete with documentation
              and easy to use.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1582790824499-9a5acab895b1?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
              alt="profilephoto"
              className="h-14 w-14 rounded-full"
            />
            <h3>Teknosan</h3>
            <p>UI Designer</p>
            <p>
              I have bought Material Design Template recently and i loved it.
              Thank you so much UIdeck team for creating such awesome template.
            </p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="profilephoto"
              className="h-14 w-14 rounded-full"
            />
            <h3>Iain Mace</h3>
            <p>Founder, Mace Consulting</p>
            <p>
              Many thanks to UIdeck Team - that explained it perfectly. I added
              the following to the 'source' site and it worked!
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1614031690812-c20810796cb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJveXN8ZW58MHx8MHx8fDA%3D"
              alt="profilephoto"
              className="h-14 w-14 rounded-full"
            />
            <h3>Ben Alexander</h3>
            <p>Freelance Web Developer</p>
            <p>
              I am using your fusion (pro) template and love it, simple, clean
              design with well-documented code ...
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profilephoto"
              className="h-14 w-14 rounded-full"
            />
            <h3>Ernesto Evangelista</h3>
            <p>Tech Entrepreneur</p>
            <p>
              Great technical support! They fixed the problem immediately and
              give me a clear explanation. Highly recommended!
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
