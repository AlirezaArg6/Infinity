import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" className="border-t-4 border-gray-300 py-5 ">
      <div className="section-container grid gap-8 lg:grid-cols-4 md:grid-cols-2">
        {/* footer item 1 */}
        <div className="mx-auto">
          <h3 className="font-bold text-lg text-mainColor mb-7">اینفینیتی</h3>
          <p className="text-justify text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        {/* footer item 2 */}
        <div className="mx-auto">
          <h3 className="font-bold text-lg text-mainColor mb-7">
            بخش های سایت
          </h3>
          <ul>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">صقحه اصلی</a>
            </li>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">دوره های آموزشی</a>
            </li>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">مقالات</a>
            </li>
          </ul>
        </div>
        {/* footer item 3 */}
        <div className="mx-auto">
          <h3 className="font-bold text-lg text-mainColor mb-7">
            دوره های آموزشی
          </h3>{" "}
          <ul>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">آموزش html</a>
            </li>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">اموزش css</a>
            </li>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">جاوا اسکریپت</a>
            </li>
            <li className="text-sm py-2 duration-300 hover:text-blue-500 ">
              <a href="">پایتون</a>
            </li>
          </ul>
        </div>
        {/* footer item 4 */}
        <div className="mx-auto">
          <div className="mx-auto">
            <img src="/assets/images/1.svg" alt="zarin pal" />
          </div>
        </div>
      </div>
    </footer>
  );
};
