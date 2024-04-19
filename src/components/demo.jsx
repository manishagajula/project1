// import { TestimonialData } from "../data/testimonialData";
// import React from "react";
// import Slider from "react-slick";

// export const Demo = () => {
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//           background: "black",
//           position: "absolute",
//           right: "2px",
//         }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//           background: "black",
//           position: "absolute",
//           right: "30px",
//           zIndex: 20,
//         }}
//         onClick={onClick}
//       />
//     );
//   }

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <div className=" relative">
//         <p className="text-4xl font-bold text-center mt-10">
//           What our users says{" "}
//         </p>
//         <p className="text-center pt-4">
//           Testimonials from our existing customers
//         </p>
//       </div>
//       <div>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//       {TestimonialData.getData.map(
//         ({ name, profession, review, image_url, testimonial_id }) => (
//           <div key={testimonial_id}>
//             <p>{name}</p>
//             <p>{profession}</p>
//             <p>{review}</p>
//             <p>{image_url}</p>
//             <p>{testimonial_id}</p>
//           </div>
//         )
//       )}
//     </div>
//   );
// };
