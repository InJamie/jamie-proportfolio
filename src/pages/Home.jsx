import pictureMyself from '../assets/WechatIMG5905.jpg'


const Home = ()=>{
    return <>
    <div className="gap-x-10 space-x-10 space-y-10">
              <h1>Jamie`s Website </h1>
              <div className="flex grid-cols-2 gap-4">
                  <div className="w-1/2 bg-red-100">
                      <p className="font-bold">Hello! I'm Ada Lee, a multidisciplinary designer based in San
                          Francisco.</p>
                      With over 8 years of experience, I thrive at the intersection of digital design, UX/UI, and brand
                      identity. My passion lies in crafting seamless user experiences and visually compelling designs
                      that resonate with audiences and drive engagement.
                  </div>
                  <img src={pictureMyself} alt="自拍照"
                       className="w-1/2"
                  />
              </div>

              <div>
                  <h2 className="font-bold text-2xl pb-4"> 🌈 About Me</h2>
                  I'm a creative thinker, a problem solver, and an avid learner, always exploring new trends and
                  techniques in design. When I'm not pushing pixels, you can find me with a sketchbook, capturing the
                  world or lost in the pages of a good design book.
              </div>

              <div>
                  <h2 className="font-bold text-2xl pb-4"> 💼 Experience</h2>
                  <h3 className="font-bold text-xl">Senior UX/UI Designer - Creative Minds Inc. | June 2018 - Present
                  </h3>
                  <ul className="list-disc pl-5 pb-4">
                      <li>- Lead the design of intuitive user interfaces for mobile and web applications, enhancing user
                          satisfaction and engagement.
                      </li>
                      <li>- Collaborate with cross-functional teams to create cohesive brand experiences across all
                          platforms.
                      </li>
                      <li>- Mentor junior designers, fostering a collaborative and innovative design culture.</li>
                  </ul>

                  <h3 className="font-bold text-xl">Graphic Designer - BrandWorks Agency | Jan 2014 - May 2018</h3>
                  <ul className="list-disc pl-5">
                      <li>- Developed brand identities, including logos, typography, and color schemes, for over 30
                          clients.
                      </li>
                      <li>- Produced marketing materials, digital ads, and promotional content, resulting in a 25%
                          increase
                          in client engagement for key accounts.
                      </li>
                  </ul>
              </div>

              <div>
                  <h2 className="font-bold text-2xl pb-4"> 🎓 Education</h2>
                  <h3 className="font-bold text-xl">Master of Fine Arts in Design - Rhode Island School of Design |
                      2013</h3>

                  <ul className="list-disc pl-5 pb-4">
                      <li>- Specialized in Digital + Media</li>
                      <li>- Thesis: "Interactivity and User Engagement in Digital Platforms"</li>
                  </ul>
                  <h3 className="font-bold text-xl"> Bachelor of Arts in Graphic Design - University of California,
                      Berkeley | 2011</h3>
                  <ul className="list-disc pl-5">
                      <li>- Graduated with Honors</li>
                      <li>- Relevant coursework: Typography, Web Design, Digital Photography</li>
                  </ul>


              </div>
              <div>
                  <h2 className="font-bold text-2xl pb-4">🚀 Projects</h2>
                  <h3 className="font-bold text-xl">"EcoLife" Mobile App</h3>


                  <ul className="list-disc pl-5 pb-4">
                      <li>- An environmentally-focused app designed to encourage sustainable living through daily
                          challenges,
                          tips, and community engagement.
                      </li>
                      <li>- Role: Lead Designer</li>
                      <li>- Tools: Sketch, InVision, Adobe Creative Suite</li>
                  </ul>

                  <h3 className="font-bold text-xl">"Brand Reimagined" - Cafe Fresco</h3>
                  <ul className="list-disc pl-5">
                      <li> - A complete rebranding project for a local café, including logo redesign, packaging, and
                          in-store
                          visuals, resulting in a 40% increase in foot traffic.
                      </li>
                      <li>- Role: Brand Strategist & Designer</li>
                      <li>- Tools: Illustrator, Photoshop, Procreate</li>
                  </ul>

              </div>
              <div>
                  <h2 className="font-bold text-2xl pb-4">🔨 Skills</h2>

                  <ul className="list-disc pl-5">
                      <li>- User Experience (UX) Design</li>
                      <li>- User Interface (UI) Design</li>
                      <li>- Branding & Visual Identity</li>
                      <li>- Adobe Creative Suite</li>
                      <li>- Sketch & InVision</li>
                      <li>- Prototyping & Wireframing</li>
                  </ul>

              </div>

              <div>
                  <h2 className="font-bold text-2xl pb-4"> 📬 Contact</h2>

                  Let's create something amazing together! Reach out to me at:
                  <ul className="list-disc pl-5">
                      <li>- Email: [ada@yourdomain.com](mailto:ada@yourdomain.com) <a href="ada@yourdomain.com"></a>
                      </li>
                      <li>- LinkedIn: [linkedin.com/in/adalee](https://www.linkedin.com/in/adalee) <a
                          href="https://www.linkedin.com/in/adalee"></a></li>
                      <li>- Portfolio: [adaleedesigns.com](http://adaleedesigns.com/) <a
                          href="http://adaleedesigns.com"></a></li>
                  </ul>


                  Thanks for stopping by my corner of the internet! 💫
              </div>
          </div>
    </>
    };

export default Home;