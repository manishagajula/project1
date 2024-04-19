import { FaRegCheckCircle } from "react-icons/fa";

export const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center lg:ml-40 mt-10">
        <button className="border-2 rounded-full border-violet-700 pr-6 pl-6 pt-1 pb-1 text-center text-violet-700 font-bold">
          Pricing
        </button>
        <h2 className="text-3xl font-bold ">Pricing & Plans</h2>
        <p className="text-center">
          {" "}
          There are many variations of passages of Lorem Ipsum available, but
          <p>the majority have suffered alteration in some form.</p>
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-24 flex flex-col justify-center items-center w-[1000px] ml-72">
        <div className="w-full lg:w-[300px] flex flex-col items-center h-[60vh] border rounded-lg scale-x-110 hover:scale-x-125 pt-4 pb-4 pr-6 pl-6 lg:ml-14 mt-10">
          <div className="flex flex-row items-center justify-center pt-10 pb-6">
            <button className="border-2 rounded-full border-violet-700 pr-6 pl-6 pt-1 pb-1 text-violet-700 font-bold">
              {" "}
              Starter
            </button>
          </div>
          <div className="flex flex-row items-center justify-center pb-6">
            <p className="text-center">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and industry.
            </p>
          </div>
          <div className="text-center pb-6">
            <p className="text-gray-500 text-2xl ">
              $<span className="text-black text-5xl">0</span>/mo
            </p>
          </div>
          <div className="flex flex-row items-center justify-center pb-6">
            <button className="border-2 rounded border-violet-700 pr-6 pl-6 pt-1 pb-1 text-violet-700 font-bold">
              {" "}
              START FREE TRIAL
            </button>
          </div>
          <div className="flex flex-col items-start justify-center ">
            <div className="flex flex-row items-center justify-center gap-2">
              <span>
                <FaRegCheckCircle />
              </span>
              <p>Cras justo odio.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <span>
                <FaRegCheckCircle />
              </span>
              <p>Dapibus ac facilisis in.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <span>
                <FaRegCheckCircle />
              </span>
              <p>Morbi leo risus.</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <span>
                <FaRegCheckCircle />
              </span>
              <p>Excepteur sint occaecat velit.</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[300px] flex flex-col items-center h-[60vh] border rounded-lg scale-x-110	hover:scale-x-125 pt-4 pb-4 pr-6 pl-6 lg:ml-14 mt-10">
          <div>
            <div className="flex flex-row items-center justify-center pt-10 pb-6">
              <button className="border rounded-full bg-violet-700 pr-6 pl-6 pt-1 pb-1 text-white font-bold">
                {" "}
                Exclusive
              </button>
            </div>
            <div className="flex flex-row items-center justify-center pb-6">
              <p className="text-center">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and industry.
              </p>
            </div>
            <div className="text-center pb-6">
              <p className="text-gray-500 text-2xl ">
                $<span className="text-black text-5xl">99</span>/mo
              </p>
            </div>
            <div className="flex flex-row items-center justify-center pb-6">
              <button className="border rounded bg-violet-700 pr-6 pl-6 pt-2 pb-2 text-white font-bold">
                {" "}
                START FREE TRIAL
              </button>
            </div>
            <div className="flex flex-col items-start justify-center ">
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Cras justo odio.</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Dapibus ac facilisis in.</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Morbi leo risus.</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Excepteur sint occaecat velit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[300px] flex flex-col items-center h-[60vh] border rounded-lg scale-x-110 hover:scale-x-125 pt-4 pb-4 pr-6 pl-6 lg:ml-14 mt-10">
          <div>
            <div className="flex flex-row items-center justify-center pt-10 pb-6">
              <button className="border-2 rounded-full border-violet-700 pr-6 pl-6 pt-1 pb-1 text-violet-700 font-bold">
                {" "}
                Premium
              </button>
            </div>
            <div className="flex flex-row items-center justify-center pb-6">
              <p className="text-center">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and industry.
              </p>
            </div>
            <div className="text-center pb-6">
              <p className="text-gray-500 text-2xl ">
                $<span className="text-black text-5xl">150</span>/mo
              </p>
            </div>
            <div className="flex flex-row items-center justify-center pb-6">
              <button className="border-2 rounded border-violet-700 pr-6 pl-6 pt-1 pb-1 text-violet-700 font-bold">
                {" "}
                START FREE TRIAL
              </button>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Cras justo odio.</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Dapibus ac facilisis in.</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Morbi leo risus.</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p>Excepteur sint occaecat velit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
