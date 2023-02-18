import React from "react";
import { FaTwitter, FaTelegram, FaFacebook } from "react-icons/fa";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionTitle } from "../components/SectionTitle";
import { Topbar } from "../components/Topbar";

export const CourseInfo = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <section id="course-info">
        <div className="section-container">
          {/* video and decsription */}
          <div className="grid grid-cols-12 gap-6  shadow-medium p-6">
            {/* decription */}
            <div className="space-y-8 col-span-full lg:col-span-6">
              <span className="bg-blue-500 p-2 rounded text-white text-xs">
                آموزش برنامه نویسی فرانت اند
              </span>
              {/* socials */}
              <div className="flex items-center">
                <FaTwitter className="text-2xl duration-300 hover:text-blue-500" />
                <FaTelegram className="text-2xl duration-300 mx-3 hover:text-blue-500" />
                <FaFacebook className="text-2xl duration-300 hover:text-blue-500" />
              </div>
              <p className="">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            {/* video */}
            <div className="col-span-full lg:col-span-6">
              <video
                src
                controls
                poster="/assets/images/bootstrap.webp"
                className="w-full rounded  "
              ></video>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-5  p-6 relative">
            {/* rigght side */}
            {/* statuses */}
            <div className="col-span-full lg:col-span-8">
              <div className="col-span-full lg:col-span-8 ">
                <div className="grid grid-cols-12 gap-4 shadow-medium ">
                  {" "}
                  {/* status 1 */}
                  <div className="flex items-center justify-center md:justify-start  col-span-full md:col-span-4 rounded p-4 shadow-medium">
                    <FaGraduationCap className="text-5xl text-blue-500 ml-4" />
                    <div>
                      <span className="md:block ml-2 md:ml-0 text-sm ">
                        وضعیت دوره:
                      </span>
                      <span className="md:block  text-sm mt-2">
                        در حال برگزاری
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start col-span-full md:col-span-4 rounded p-4 shadow-medium">
                    <FaGraduationCap className="text-5xl text-blue-500 ml-4" />
                    <div>
                      <span className="md:block ml-2 md:ml-0 text-sm ">
                        وضعیت دوره:
                      </span>
                      <span className="md:block  text-sm mt-2">
                        در حال برگزاری
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start col-span-full md:col-span-4 rounded p-4 shadow-medium">
                    <FaGraduationCap className="text-5xl text-blue-500 ml-4" />
                    <div>
                      <span className="md:block ml-2 md:ml-0 text-sm ">
                        وضعیت دوره:
                      </span>
                      <span className="md:block  text-sm mt-2">
                        در حال برگزاری
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* html article text */}
              <div className="mt-5 p-4 shadow-medium">
                <SectionTitle title="آموزش 20 کتابخانه جاوااسکریپت" />
                <p className="mt-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <img
                  src="/assets/images/bootstrap.webp"
                  className="mb-4 rounded"
                  alt=""
                />
                <SectionTitle title="آموزش 20 کتابخانه جاوااسکریپت" />
                <p className="mt-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
                <SectionTitle title="آموزش 20 کتابخانه جاوااسکریپت" />
                <p className="mt-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
              {/* teacher */}
              <div className="p-4 mt-5 shadow-medium">
                <div className="flex items-center">
                  <img
                    src="/assets/images/bootstrap.webp"
                    alt=""
                    className="rounded-full h-14 w-14 ml-4"
                  />
                  <span className="text-sm">Front-end Developer</span>
                </div>
                <p className="mt-3 ">
                  اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به 2 سال
                  با زبان جاوا اندروید کار میکردم .بعد تصمیم گرفتم در زمینه وب
                  فعالیت داشته باشم.و..
                </p>
              </div>
            </div>
            {/* left side */}
            <div className="col-span-full lg:col-span-4 ">
              {" "}
              {/* paticipate */}
              <div className="col-span-full lg:col-span-4 shadow-medium p-4  text-white">
                <div className="flex bg-blue-500 px-6 py-2  items-center justify-center rounded">
                  <FaGraduationCap className="text-5xl text-white ml-4" />
                  ثبت نام
                </div>
              </div>
              {/* students */}
              <div className="p-4 shadow-medium ">
                <div className="flex justify-center items-center  font-iranSansWeb ">
                  <FaUserGraduate className="text-4xl text-blue-500 ml-2" />
                  تعداد دانشجو :{" "}
                  <span className="inline-flex items-center justify-center mr-2 w-8 h-8 bg-blue-500 text-white rounded-lg">
                    212
                  </span>
                </div>
              </div>
              {/* related courses */}
              <div className="shadow-medium mt-5 p-4 space-y-5">
                {/* course 1 */}
                <div className="flex items-center">
                  <img
                    src="/assets/images/bootstrap.webp"
                    alt=""
                    className="w-28 h-12 ml-2"
                  />
                  <span>آموزش vuejs</span>
                </div>
                {/* course 2 */}
                <div className="flex items-center">
                  <img
                    src="/assets/images/bootstrap.webp"
                    alt=""
                    className="w-28 h-12 ml-2"
                  />
                  <span>آموزش vuejs</span>
                </div>
                {/* course 3 */}
                <div className="flex items-center">
                  <img
                    src="/assets/images/bootstrap.webp"
                    alt=""
                    className="w-28 h-12 ml-2"
                  />
                  <span>آموزش vuejs</span>
                </div>
                {/* course 4 */}
                <div className="flex items-center">
                  <img
                    src="/assets/images/bootstrap.webp"
                    alt=""
                    className="w-28 h-12 ml-2"
                  />
                  <span>آموزش vuejs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
