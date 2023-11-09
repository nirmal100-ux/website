import {
  Button,
  Card,
  CardBody,
  Typography,

} from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div>
      <div className="flex py-5 bg-light-blue-800 ">
        <div className="px-36 py-40 ">
          <h1 className="font-bold  text-5xl text-white">
            Better Solutions For Your Business
          </h1>
          <div className="py-2">
            <h1 className="font-medium text-lg text-blue-100">
              We are team of talented designers
              making websites with Imagine Infotech
            </h1>
          </div>


        </div>

        <img className="h-[500px] w-[700px]" src="https://www.imagineinfosys.com/images/IMG-2262-removebg-preview.png" alt="" />






      </div>
      <div className=" bg-blue-gray-200">
        <div className="bg-blue-gray-300 py-8 text-center">
          <h1 className="text-4xl font-bold py-6 bg-blue-10 text-cyan-900">About Us</h1>
        </div>

        <div className=" grid grid-flow-col py-9 px-8 ">
          <div className="">
            <Card className="mt-6 w-96">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Imagine Infotech
                </Typography>
                <Typography>
                  Imagine Infotech is a leading IT company based in Kathmandu that specializes in website development, hosting, and domain registration services. Our team of experienced and skilled developers is committed to delivering top-notch services that exceed our clients' expectations.
                </Typography>
              </CardBody>

            </Card>
          </div>

          <div>
            <Card className="mt-6 h-[450px] w-[850px]">

              <h1 className="text-black space-x-5 py-8 text-justify px-5 ">
                When it comes to website development, we understand that every business is unique and has its own set of requirements. Therefore, we take a customized approach to website development that is tailored to meet our clients' specific needs. Our team works closely with clients to understand their business, their goals, and their target audience, ensuring that we deliver a website that is not only visually appealing but also functional and user-friendly. At Imagine infotech , we also offer reliable and affordable hosting services to ensure that our clients’ websites are always up and running. Our hosting plans are designed to meet the needs of businesses of all sizes, from small startups to large enterprises. We use the latest technologies and employ stringent security measures to ensure that our clients’ websites are always secure and protected. In addition to website development and hosting, we also offer domain registration services to help businesses establish their online presence. We can help clients register their domain name and manage their domain records, ensuring that their website is easily accessible to their target audience. In conclusion, at imagine infotech, we are passionate about helping businesses succeed online. Whether you need a new website, reliable hosting, or domain registration services, we have the expertise and experience to help you achieve your goals. Contact us today to learn more about our services and how we can help your business grow.
              </h1>
            </Card>
          </div>
        </div>


        {/* SERVICE */}
        <div className="bg-blue-gray-300">
          <div className="text-center py-20 bg-blue-gray-500">
            <h1 className="text-4xl font-bold text-black ">Our Service</h1>
            <div className="py-2">
              <p className="text-lg font-bold">Discover our comprehensive range of services tailored to <br /> meet your unique needs and drive your business forward.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 py-10 px-20 gap-10">

            <div className=" ">
              <Card className="h-[400px]  w-[350px] ">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/Domain-hosting-removebg-preview.png" alt="" />
                </div>

                <h1 className="text-center font-bold text-2xl text-blue-700">Apps Development</h1>
                <h1 className="text-center text-2xl py-3 "> We deliver native and cross-platform iOS and Android mobile solutions for business and consumer applications to bring your project to market.
                </h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>

            </div>

            <div>
              <Card className="h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/web-dev%20icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Web Development</h1>
                <h1 className="text-center text-2xl py-3 "> We carry more than just good coding skills. Our experience makes us stand out from other web development.
                </h1>
                <h1 className="text-center py-12 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>
            <div>
              <Card className="h-[400px]  w-[350px]">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] py-2 " src="https://www.imagineinfosys.com/images/news-portal-icon-removebg-preview.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Software Development</h1>
                <h1 className="text-center text-2xl py-3 ">We offer an efficient and effective software development service that manages the software assets with our expert software developers.</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Alpha Independent Consultant</h1>
                <h1 className="text-center text-2xl  py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>


            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Digital Marketing</h1>
                <h1 className="text-center text-2xl py-3 ">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Social Branding</h1>
                <h1 className="text-center text-2xl py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Alibaba Cloud Servers</h1>
                <h1 className="text-center text-2xl py-3 ">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Web Hosting</h1>
                <h1 className="text-center text-2xl  py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Domains Registration</h1>
                <h1 className="text-center text-2xl py-3 ">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Cloud Shared Hosting</h1>
                <h1 className="text-center text-2xl py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>
            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Reseller Hosting</h1>
                <h1 className="text-center text-2xl py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Google One Setup</h1>
                <h1 className="text-center text-2xl py-3 ">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">SSL Certificate</h1>
                <h1 className="text-center text-2xl py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">SEO</h1>
                <h1 className="text-center text-2xl py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>

            <div>
              <Card className=" h-[400px]  w-[350px] py-2">
                <div className="flex items-center justify-center">
                  <img className="h-[60px] w-[60px] " src="https://www.imagineinfosys.com/images/team-icon.png" alt="" />
                </div>
                <h1 className="text-center font-bold text-2xl text-blue-700">Bulk SMS</h1>
                <h1 className="text-center text-2xl py-3">Give yourself extra options and become better positioned to serve your world and position yourself for what the emerging global economy wants..</h1>
                <h1 className="text-center py-5 font-bold"> Learn More <i class="fa-solid fa-arrow-right"></i></h1>
              </Card>
            </div>


          </div>


          {/* PRICING */}



          <div className=" py-14">
            <div className="text-center">
              <h1 className="font-bold text-4xl  text-indigo-900 ">PRICING</h1>
            </div>
            <div className="grid grid-cols-3 px-20 py-20 gap-5">
              <div>
                <Card className="h-[450px]  w-[350px] bg-blue-gray-50">
                  <div className="py-2">
                    <div className="text-center">
                      <h1 className="font-bold text-2xl text-blue-400"  >BASIC PLAN</h1>
                    </div>
                    <div className="text-black px-16 py-3">
                      <p className="text-2xl">Rs 30,0000.00</p>
                      <div className="space-y-5 py-3">

                        <li className="">5GB Storage </li>
                        <li>50GB Bandwidth</li>
                        <li>Pre Made Themes</li>
                        <li>Free CDN</li>
                        <li>Renew Rs.250,000/year</li>

                      </div>
                    </div>
                  </div>
                  <div className="py-10 px-20">
                    <button className="bg-gray-700 text-black h-[50px] w-40  rounded-full">Order Now</button>
                  </div>

                </Card>
              </div>
              <div>
                <Card className="h-[450px]  w-[350px] bg-blue-gray-50">
                  <div className="py-2">
                    <div className="text-center">
                      <h1 className="font-bold text-2xl  text-blue-400"  >STANDARD PLAN</h1>
                    </div>
                    <div className="text-black px-16 py-3 ">
                      <p className="text-2xl">Rs 30,0000.00</p>
                      <div className="space-y-5 py-3">

                        <li className="">20GB Storage </li>
                        <li>300GB Bandwidth</li>
                        <li>Custom Themes</li>
                        <li>Free CDN</li>
                        <li>Renew Rs.350,000/year</li>

                      </div>
                    </div>
                  </div>
                  <div className="py-10 px-20">
                    <button className="bg-gray-700 text-black h-[50px] w-40  rounded-full">Order Now</button>
                  </div>

                </Card>
              </div>
              <div>
                <Card className="h-[450px]  w-[350px] bg-blue-gray-50">
                  <div className="py-2  ">
                    <div className="text-center">
                      <h1 className="font-bold text-2xl text-blue-400"  >PREMIUM PLAN</h1>
                    </div>
                    <div className="text-black px-16  py-3">
                      <p className="text-2xl">Rs 30,0000.00</p>
                      <div className="space-y-5 py-3">

                        <li className="">40GB Storage </li>
                        <li>400GB Bandwidth</li>
                        <li>Custom Theme</li>
                        <li>Daily Backup</li>
                        <li>Renew Rs.250,000/year</li>

                      </div>
                    </div>
                  </div>
                  <div className="py-10 px-20">
                    <button className="bg-gray-700 text-black h-[50px] w-40  rounded-full"> Order Now</button>
                  </div>

                </Card>
              </div>
            </div>
          </div>







        </div >



        {/* Our Recent Blog */}
        <div className="py-14">
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Our Recent Blog</h1>
          </div>
          <div className="text-center py-3">
            <h1 className="text-base font-bold">Discover our latest blog, packed with insights, trends, and <br /> expert perspectives on the cutting-edge of technology.</h1>
          </div>

          <div className=" grid grid-cols-3 px-10">
            <div className="px-9 py-5">
              <Card className="h-[450px]  w-[350px] ">
                <div>
                  <img src="https://alpharic.com/jufatchi/2023/07/digital-product-design.webp" alt="" />
                </div>

                <div className="text-center">
                  <h1 className="text-2xl font-bold text-indigo-900">Digital Product Design</h1>
                  <p className="text-justify text-sm px-10 py-3">Digital product design has become an essential aspect of business success in the technology industry. In today’s competitive market, companies need to create user-centric products that not only meet the</p>
                </div>
              </Card>
            </div>

            < div className="px-9 py-5">
              <Card className="h-[450px]  w-[350px] ">
                <div>
                  <img src="https://alpharic.com/jufatchi/2023/07/cloud-and-devops.webp" alt="" />
                </div>

                <div className="text-center">
                  <h1 className="text-2xl font-bold text-indigo-900">Cloud & DevOps</h1>
                  <p className="text-justify text-sm px-10 py-3">Digital product design has become an essential aspect of business success in the technology industry. In today’s competitive market, companies need to create user-centric products that not only meet the</p>
                </div>
              </Card>
            </div>

            <div className="px-9 py-5">
              <Card className="h-[450px]  w-[350px] ">
                <div>
                  <img src="	https://alpharic.com/jufatchi/2023/07/software-development.webp" alt="" />
                </div>

                <div className="text-center">
                  <h1 className="text-2xl font-bold text-indigo-900 px-2">How Software Development Can Transform Your Business</h1>
                  <p className="text-justify text-sm px-10 py-3">Digital product design has become an essential aspect of business success in the technology industry. In today’s competitive market, companies need to create user-centric products that not only meet the</p>
                </div>
              </Card>
            </div>

          </div>

        </div>

        {/* Our Clients */}



        <div className="bg-white px-10 py-10">
          <div className="py-5">
            <h1 className="text-center font-bold text-4xl">Our Clients</h1>
          </div>
          <div className="grid grid-cols-3">
            <div className="py-5">
              <div>
                <img className="h-[300px] w-[300px]" src="	https://reflexitsolution.com/wp-content/uploads/2023/01/12.png" alt="" />
              </div>
              <div>
                <img className="h-[300px] w-[300px]" src="https://reflexitsolution.com/wp-content/uploads/2023/01/13.png" alt="" />
              </div>

              <div>
                <img className="h-[300px] w-[300px]" src="https://reflexitsolution.com/wp-content/uploads/2023/01/14.png" alt="" />
              </div>
            </div>

            <div className="px-5">
              <div>
                <img className="h-[300px] w-[300px]" src="	https://reflexitsolution.com/wp-content/uploads/2023/01/15.png" alt="" />
              </div>

              <div>
                <img className="h-[300px] w-[300px]" src="https://reflexitsolution.com/wp-content/uploads/2023/01/21.png" alt="" />
              </div>
              <div>
                <img className="h-[300px] w-[300px]" src="https://reflexitsolution.com/wp-content/uploads/2023/01/23.png" alt="" />
              </div>

            </div>

            <div className="px-10 ">
              <div>
                <div>
                  <img className="h-[300px] w-[300px]" src="https://reflexitsolution.com/wp-content/uploads/2023/01/16.png" alt="" />
                </div>
                <div>
                  <img className="h-[300px] w-[300px]" src="	https://reflexitsolution.com/wp-content/uploads/2023/01/19.png" alt="" />
                </div>
                <div>
                  <img className="h-[300px] w-[300px]" src="https://reflexitsolution.com/wp-content/uploads/2023/01/20.png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* meet our team */}

        <div className="bg-blue-gray-800 py-14  ">
          <div className="py-9 text-center text-white ">
            <h1 className="text-4xl">Meet Our Team</h1>
          </div>
          <div className="text-white text-center ">
            <p className="text-lg px-20">Introducing our exceptional teams, driven by passion and expertise, ready to collaborate and <br /> bring your vision to life.</p>
          </div>
          <div className=" grid grid-cols-4 px-8 py-5">
            <div className="px-5 py-5">
              <Card className="h-[300px]  w-[250px] bg-blue-gray-500" >

                <div className="px-6 py-2">
                  <Card className="h-[200px]  w-[200px] ">
                    <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  </Card>
                </div>
                <div className="text-white text-center">
                  <h1>Ram Shrestha</h1>
                  <p>Senior Developer</p>
                </div>

              </Card>
            </div>

            <div className="px-5 py-5">
              <Card className="h-[300px]  w-[250px] bg-blue-gray-500" >

                <div className="px-6 py-2">
                  <Card className="h-[200px]  w-[200px]">
                    <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  </Card>
                </div>
                <div className="text-white text-center">
                  <h1>Ram Shrestha</h1>
                  <p>Senior Developer</p>
                </div>

              </Card>
            </div>
            <div className="px-5 py-5">
              <Card className="h-[300px]  w-[250px] bg-blue-gray-500" >

                <div className="px-6 py-2">
                  <Card className="h-[200px]  w-[200px]">
                    <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  </Card>
                </div>
                <div className="text-white text-center">
                  <h1>Ram Shrestha</h1>
                  <p>Senior Developer</p>
                </div>

              </Card>
            </div>
            <div className="px-5 py-5">
              <Card className="h-[300px]  w-[250px] bg-blue-gray-500" >

                <div className="px-6 py-2">
                  <Card className="h-[200px]  w-[200px]">
                    <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                  </Card>
                </div>
                <div className="text-white text-center">
                  <h1>Ram Shrestha</h1>
                  <p>Senior Developer</p>
                </div>

              </Card>
            </div>
          </div>




        </div>





      </div>






















    </div >



  )
}
export default HomePage