"use client";

export default function Home() {
  const print = () => {
    const pdfUrl =
      "https://doc-0c-2g-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/1v94evg5hau035sdm717ae70gpr4lf54/m2na40m88ham5it90eb44vdpvv7lg936/1740134025000/3/113352862252478147070/APznzaanitsrl_OC7dw1orpO8HtBCsuC4csAc1vXOyk3368yeyA-oEdbcdogf3Q7v4cMXq0UbfrTXfn1kE2oOelTICGzY48z6DRkPd4TqJCrir8xMHw9vWXWec5aOnIi6xt-2pPVBCrIP_8eYlBOYE2JQFCaeoLmZEFWsD19pFXgw75iWJ4vsc2x6USMWah1AhSFGhcK5iDNvM5YBUwlKrMorROUJhqqAT66I5mues9PlyVb5tzvodkMPS7N8qr_OwxKv0Tws2koubzN-P9s6_avdeTxoZ0D0RUJB565L80D7HQCKK_G-EQhs4ZATRDj7heGeJjM1_5j8iCavswha53Zmab1dl1hNwaJuwWBONtkcAGIPSVRJBHjA-mIJhJhnzWPzFjyjq7o-0lV4iL9zctrdRjfHk8pQA==?authuser=0&nonce=si9s3ihq1a8nu&user=113352862252478147070&hash=p9s9o451dfd1qmc8u363bc2900l16cg0";
    window.open(pdfUrl);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* <nav className="flex items-center p-4 justify-between  sticky top-0 z-50">
        <span></span>
        <div className="flex gap-4">
          <a
            href="#home"
            className={
              activeSection === "home"
                ? "p-2 rounded-full border-2 border-[#73818C] bg-[#73818C] text-black"
                : "p-2 rounded-full border-2 border-[#73818C] text-[#73818C]"
            }
          >
            HOME
          </a>
          <a
            href="#projects"
            className={
              activeSection === "projects"
                ? "p-2 rounded-full border-2 border-[#73818C] bg-[#73818C] text-black"
                : "p-2 rounded-full border-2 border-[#73818C] text-[#73818C]"
            }
          >
            MY WORK
          </a>
          <a
            href="#contact"
            className={
              activeSection === "contact"
                ? "p-2 rounded-full border-2 border-[#73818C] bg-[#73818C] text-black"
                : "p-2 rounded-full border-2 border-[#73818C] text-[#73818C]"
            }
          >
            CONTACT
          </a>
        </div>
      </nav> */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen gap-8 p-12 overflow-auto"
      >
        <div className="items-center justify-center flex flex-col">
          <h1 className="text-8xl font-bold">Hi! I'm Gian</h1>
          <p className="text-xl text-[#73818C]">
            I'm a Philippine based Software Developer.
          </p>
          <p className="text-xl text-[#73818C]">
            I love finding simple solutions to complex problems.
          </p>
        </div>
        <a
          href="#projects"
          className="p-4 rounded-full border-2 border-[#73818C] text-[#73818C] hover:bg-[#73818C] hover:text-black drop-shadow-dark"
        >
          MY WORK
        </a>
      </section>
      <section
        id="projects"
        className="flex flex-col items-center min-h-screen gap-4 p-12"
      >
        <h1 className="text-6xl font-bold text-[#33CCFF] drop-shadow-dark">
          Projects
        </h1>
        <p className="text-xl text-[#73818C]">
          Here are some projects I've worked on.
        </p>

        <div className="flex flex-1 w-full grid lg:grid-cols-3 gap-4 self-stretch">
          <a
            href="/todo"
            target="_blank"
            className="bg-[#0A0A0A] rounded-xl drop-shadow-dark p-12 items-center justify-center gap-6 hover:bg-[#101820]"
          >
            <h1 className="text-3xl font-bold drop-shadow-dark">
              Kanban To-Do App
            </h1>
            <p className="pt-12 text-[#73818C]">
              A Kanban To-Do App is a task management system that visually
              organizes tasks into columns based on their status.
            </p>
          </a>
          <a
            href="#"
            className="bg-[#0A0A0A] rounded-xl drop-shadow-dark p-12 items-center justify-center gap-6 hover:bg-[#101820]"
          >
            <h1 className="text-3xl font-bold drop-shadow-dark">
              Sample Project 2
            </h1>
            <p className="pt-12 text-[#73818C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              turpis enim, scelerisque vitae semper at, interdum malesuada
              purus. Integer volutpat, neque in fringilla tempus, quam enim
              porttitor enim, ut vulputate eros odio accumsan mi. Donec eget
              urna mattis, luctus quam sit amet, condimentum est. Aenean at
              massa sem. Praesent sed lobortis dui. Cras sit amet ipsum ac arcu
              faucibus hendrerit. Nulla lobortis vitae nunc id suscipit. Etiam
              vitae sollicitudin metus, non cursus est. Phasellus vitae tellus
              augue. Sed vulputate lacinia enim id fringilla. Curabitur nisl
              justo, porttitor eget iaculis ultricies, gravida at nunc.
            </p>
          </a>
          <a
            href="#"
            className="bg-[#0A0A0A] rounded-xl drop-shadow-dark p-12 items-center justify-center gap-6 hover:bg-[#101820]"
          >
            <h1 className="text-3xl font-bold drop-shadow-dark">
              Sample Project 3
            </h1>
            <p className="pt-12 text-[#73818C]">
              Aliquam eu ipsum eu eros consequat dapibus. Donec nec velit vitae
              nulla placerat tristique in maximus ipsum. Quisque sit amet
              pulvinar magna, viverra hendrerit risus. Nam tincidunt dapibus
              tincidunt. Aenean sit amet orci in diam venenatis feugiat a sit
              amet enim. Pellentesque lobortis, metus ut tempus pulvinar, neque
              libero placerat odio, sed volutpat eros justo nec augue. Praesent
              convallis ornare nunc non maximus. Nulla rutrum molestie quam
              tristique bibendum. Cras eget magna sapien. Nullam iaculis, tortor
              non cursus pellentesque, mauris nibh auctor nulla, a ornare sem
              felis eu purus. Fusce nec iaculis dui, eget accumsan tellus. Nam
              lobortis mi ac nulla tincidunt, in finibus leo gravida. Phasellus
              suscipit ante eu eleifend dignissim.
            </p>
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-center min-h-screen p-12 gap-8"
      >
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#33CCFF] drop-shadow-dark">
              Hire Me
            </h1>
            <p className="text-xl ">
              Let's collaborate on to something amazing!
            </p>
          </div>
          <p className="text-xl text-[#73818C]">
            I am a problem-solver at heart, driven by the challenge of building
            efficient and scalable solutions. With expertise in NodeJS,
            ExpressJS, ReactJS, React Native, and TypeScript, I bring full-stack
            development skills that enable me to create seamless web and mobile
            applications.
            <br />
            My experience across multiple roles has strengthened my JavaScript
            proficiency, allowing me to write clean, maintainable, and
            high-performing code. I thrive in fast-paced environments, quickly
            adapting to new technologies and optimizing workflows to improve
            development efficiency.
            <br />
            Beyond technical skills, I am a strong team player who values
            collaboration and continuous learning. My ability to tackle complex
            problems, combined with my passion for innovation, makes me a
            valuable asset to any team.
            <br />
            Hiring me means gaining a dedicated developer who is not only
            technically skilled but also committed to driving meaningful impact.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold drop-shadow-dark">
            Contact Information
          </h1>
          <div className="">
            <p className="text-xl text-[#73818C]">
              Email:{" "}
              <a
                href="mailto:gzsarmiento024@gmail.com"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                gzsarmiento024@gmail.com
              </a>
            </p>
            <p className="text-xl text-[#73818C]">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/gian-zairus-sarmiento-55b070200/"
                target="_blank"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                https://www.linkedin.com/in/gian-zairus-sarmiento-55b070200/
              </a>
            </p>
            <p className="text-xl text-[#73818C]">
              GitHub:{" "}
              <a
                href="https://github.com/GiANZAiRUS"
                target="_blank"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                https://github.com/GiANZAiRUS
              </a>
            </p>
            <p className="text-xl text-[#73818C]">
              Phone:{" "}
              <a
                href="tel:09172433992"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                09172433992
              </a>
            </p>
          </div>
        </div>

        <button
          onClick={print}
          className="p-4 lg:w-[250px] w-full rounded-full border-2 border-[#73818C] text-[#73818C] hover:bg-[#73818C] hover:text-black drop-shadow-dark"
        >
          PRINT CV
        </button>
      </section>
    </div>
  );
}
