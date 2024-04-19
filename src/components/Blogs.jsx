export const Blogs = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center gap-4 mt-10 mb-6">
          <button className="border-2 rounded-full border-violet-700 pr-6 pl-6 pt-1 pb-1 text-violet-700 font-bold">
            latest news
          </button>
          <h2 className="font-bold text-3xl"> Latest News & Blog </h2>
          <div className="flex items-center flex-col">
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but{" "}
            </p>
            <p className="text-gray-500">
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="w-[300px]">
          <img
            src="https://demo.ayroui.com/templates/business-template/assets/images/blog/1.jpg"
            alt="blog"
            className="rounded mb-4"
          />
          <h3 className="font-bold mb-4">
            Make your team a Design driven company
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
      </div>
    </div>
  );
};
