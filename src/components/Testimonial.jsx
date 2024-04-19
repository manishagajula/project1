import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#3437eb",
        color: "#3437eb",
        position: "absolute",
        right: "2px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#3437eb",
        color: "#3437eb",
        position: "absolute",
        left: "4px",
        zIndex: 20,
      }}
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
  nextArrow: <SampleNextArrow className="text-violet-700" />,
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
    <div className=" relative">
      <div className="mb-10">
        <p className="text-4xl font-bold text-center mt-10">
          What our users says{" "}
        </p>
        <p className="text-center pt-4">
          Testimonials from our existing customers
        </p>
      </div>
      <div className=" slider-container w-[1200px] h-[300px]">
        <Slider {...settings}>
          <div className="border rounded-2xl w-[600px] pt-4 flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start ml-6">
              <div className="mt-2">
                <img
                  src="https://images.unsplash.com/photo-1527082395-e939b847da0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                  alt="profilephoto"
                  className="h-12 w-14 rounded-full "
                />
              </div>

              <div className="flex flex-col p-2">
                <h3 className="font-bold">Marko Denic</h3>
                <p className="text-sm text-slate-500">
                  Software Engineer and Dev. Advocate
                </p>
              </div>
            </div>
            <div className="text-start p-4">
              <p>
                UIdeck is my go-to source for downloading quality HTML and
                Tailwind CSS templates, I really love their design consistency
                and clear codes with detailed comments, highly recommended!
              </p>
            </div>
          </div>

          <div className="border rounded-2xl w-[600px] pt-4 flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-center ml-4">
              <div className="mt-2">
                <img
                  src="https://images.unsplash.com/photo-1682705467773-634986d7d0fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                  alt="profilephoto"
                  className="h-14 w-14 rounded-full"
                />
              </div>

              <div className="flex flex-col p-2">
                <h3 className="font-bold">Fajar Siddiq</h3>
                <p className="text-sm text-slate-500">
                  Serial Entrepreneur, Singapore
                </p>
              </div>
            </div>
            <div className="text-start p-4">
              <p>
                I've seen templates everywhere online. Is hard for me to decide,
                some are costly and some are not clear. You made UIdeck
                possible, affordable for developers/designers. Complete with
                documentation and easy to use.
              </p>
            </div>
          </div>

          <div className="border rounded-2xl w-[600px] pt-4 flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start ml-6">
              <div className="mt-2">
                <img
                  src="https://images.unsplash.com/photo-1582790824499-9a5acab895b1?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                  alt="profilephoto"
                  className="h-14 w-14 rounded-full"
                />
              </div>
              <div className="flex flex-col p-2">
                <h3 className="font-bold">Teknosan</h3>
                <p className="text-sm text-slate-500">UI Designer</p>
              </div>
            </div>
            <div className="text-start p-4">
              <p>
                I have bought Material Design Template recently and i loved it.
                Thank you so much UIdeck team for creating such awesome
                template.
              </p>
            </div>
          </div>

          <div className="border rounded-2xl w-[600px] pt-4 flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start ml-6">
              <div className="mt-2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="profilephoto"
                  className="h-14 w-14 rounded-full"
                />
              </div>

              <div className="flex flex-col p-2">
                <h3 className="font-bold">Iain Mace</h3>
                <p className="text-sm text-slate-500">
                  Founder, Mace Consulting
                </p>
              </div>
            </div>
            <div className="text-start p-4">
              <p>
                Many thanks to UIdeck Team - that explained it perfectly. I
                added the following to the 'source' site and it worked!
              </p>
            </div>
          </div>

          <div className="border rounded-2xl w-[600px] pt-4 flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start ml-6">
              <div className="mt-2">
                <img
                  src="https://images.unsplash.com/photo-1614031690812-c20810796cb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGJveXN8ZW58MHx8MHx8fDA%3D"
                  alt="profilephoto"
                  className="h-14 w-14 rounded-full"
                />
              </div>

              <div className="flex flex-col p-2">
                <h3 className="font-bold">Ben Alexander</h3>
                <p className="text-sm text-slate-500">
                  Freelance Web Developer
                </p>
              </div>
            </div>
            <div className="text-start p-4">
              <p>
                I am using your fusion (pro) template and love it, simple, clean
                design with well-documented code ...
              </p>
            </div>
          </div>

          <div className="border rounded-2xl w-[600px] pt-4 flex flex-col items-center justify-center">
            <div className="flex flex-row items-start justify-start ml-6">
              <div className="mt-2">
                <img
                  src="https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profilephoto"
                  className="h-14 w-14 rounded-full"
                />
              </div>

              <div className="flex flex-col p-2">
                <h3 className="font-bold">Ernesto Evangelista</h3>
                <p className="text-sm text-slate-500">Tech Entrepreneur</p>
              </div>
            </div>
            <div className="text-start p-4">
              <p>
                Great technical support! They fixed the problem immediately and
                give me a clear explanation. Highly recommended!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
