import type { FormEvent, FormEventHandler } from 'react';
import axios from 'axios';
import '../styles/index.css';

const skills = [
  {
    img: {
      src: '/react.png',
      className: 'mt--2',
    },
    title: 'React Web Apps',
    description: 'I can build interactive and user-friendly web interfaces using React, making sure both websites and apps provide a smooth experience for users.',
  },
  {
    img: {
      src: '/nodejs.svg',
      className: 'mt--2',
    },
    title: 'Node-based Microservices & APIs',
    description: 'I have the skills to develop efficient and scalable backend systems using Node.js. This means applications can handle a large number of users without slowing down. I can also design and develop tailored APIs that meet specific needs. Whether it\'s managing data or creating secure endpoints, I can build powerful APIs to support any application.',
  },
  {
    img: {
      src: '/integration.png',
      className: 'rounded-50 mt--2',
    },
    title: 'Third Party Integrations',
    description: 'I can seamlessly incorporate services like payment gateways or social media platforms into existing applications, making them more versatile and connected.',
  },
  {
    img: {
      src: '/git.png',
      className: 'rounded-50 mt--2',
    },
    title: 'Git-based Version Control',
    description: 'I am proficient in using Git, a tool that ensures efficient collaboration and code management. This means teams can track changes, work together seamlessly, and hold one another accountable.',
  },
];

const portfolio = [
  {
    img: {
      src: 'https://avatars.githubusercontent.com/u/114275056?v=4',
      className: 'rounded-50 mt--2',
    },
    title: 'Crit Fumble Gaming',
    description: 'Some projects I\'m working on for an online gaming club, including a Discord Bot with OpenAI integration. You can find all of the source code, written in JavaScript, on GitHub',
    cta: {
      label: 'View on Github',
      url: 'https://github.com/Crit-Fumble',
    },
  },
  {
    img: {
      src: 'https://avatars.githubusercontent.com/u/81780877?&v=4',
      className: 'rounded-50 bg-#AABBCC',
    },
    title: 'Playitec Games',
    description: 'I\'ve tinkered with some different game engines such as Unity and Microsoft\'s XNA framework. You can find the source code for those projects, most of it written in C#,  here.',
    cta: {
      label: 'View on GitHub',
      url: 'https://github.com/Playitec-Games',
    },
  },
  {
    img: {
      src: '/github.png',
      className: 'rounded-50 mt--2 pb-0.7 bg-white',
    },
    title: 'Personal Github',
    description: 'A few random projects I have for personal use. A lot of these are old, but there\'s a good mix of programming languages I\'ve worked in.',
    cta: {
      label: 'View on Github',
      url: 'https://github.com/the0bob',
    },
  },
  {
    img: {
      src: '/resume.png',
      className: 'rounded-50 mt--2 bg-white',
    },
    title: 'Resume',
    description: 'More information about my work history and education.',
    cta: {
      label: 'View Resume',
      url: 'https://drive.proton.me/urls/ZXTZQSH4P8#29No79h00r9b',
    },
  },
];

export default function Index() {
  // see https://github.com/lxy-yz/vitesse-lite-react/blob/main/src/pages/index.tsx for usage example
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const commentsRef = useRef<HTMLTextAreaElement>(null)
  const [formLoading, setFormLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setFormLoading(true);
    const response = await axios({
      url: 'https://hooks.zapier.com/hooks/catch/2516557/8m2iei/',
      method: 'POST',
      data: {
        name: nameRef?.current?.value,
        email: emailRef?.current?.value,
        phone: phoneRef?.current?.value,
        comments: commentsRef?.current?.value,
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).catch(console.error);

    // TODO: user messaging
    if (response?.data?.status === 'success') {
      nameRef.current && (nameRef.current.value = '');
      emailRef.current && (emailRef.current.value = '');
      phoneRef.current && (phoneRef.current.value = '');
      commentsRef.current && (commentsRef.current.value = '');
      setFormSent(true);
    }

    setFormLoading(false);
    return response?.data as FormEventHandler<HTMLFormElement>;
  }

  return (
    <div className="container-fluid">
      <header className={'header'}>
        <div className={'header-content'}>
          <div className={'profile-photo'}>
            <img className="rounded-50" src="https://avatars.githubusercontent.com/u/13439002?&v=4" alt="Bob Palmer" />
          </div>
          <h1 className={'heading'}>Bob Palmer</h1>
          <h4 className={'subheading'}>
            <em>
              Software Developer skilled in Web Apps, APIs, and Data Structures.
            </em>
          </h4>
        </div>
      </header>

      <section className={'about clear-both'}>
        <p>
          As an experienced full stack JavaScript developer, I specialize in creating outstanding web applications. With a degree in Computer Science, industry experience, and a lifelong passion for programming and technology, I have the expertise to bring ideas to life.
        </p>
        <p>
          I am committed to delivering high-quality work and maintaining clear communication throughout the project. My goal is to provide technical solutions that not only meet the needs of my clients, but also create a great experience for their users. If a client is unsure of what they need, I can help them figure out the technical details. During the lifecycle of a project, I value open, honest, and transparent communication. The result will be quality work, meeting project requirements, delivered on time.
        </p>
      </section>

      <div className={'spacer'} />

      <section className={'skills'}>
        <h3 className="text-center mb-5">Skills</h3>
        <hr/>
        {skills.map((skill, idx) => {
          return (
            <div key={skill.title} className="clear-both p-10">
              <img className={`item-img-${idx % 2 ? 'right' : 'left'} ${skill?.img?.className}`} src={skill?.img?.src} alt={skill.title} />
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          );
        })}

        {/* <p>
          I have six years under my belt developing web-based software professionally, formal education including a Bachelor&apos;s in Computer Science from Park University, and have been a programming / DIY / PC enthusiast my whole life. I&apos;ve built web-based software and apps from the ground up, updated existing systems and websites, written code in a dozen languages, and have integrated with more cloud services and APIs than I care to list here. Most of my experience is in a full stack role, working with various front end frameworks (React, Vue, Angular), back end languages (Java, C#, Node, PHP), database systems (Postgres, Mongo, MySql, MSSQL), and AWS (S3, Route 53, EC2, Redshift, EFS, etc). After tinkering with game concepts most of my life, I&apos;ve recently been learning Unity, brushing up on my C#, and educating myself on every step of the game development process. I have a few skills in graphic design, photo editing, technical writing, team leadership, and basic business accounting as well.
        </p>
        <p>
          In addition to building solutions from the ground up, I also have experience implementing requested features for legacy systems, fixing bugs, integrating 3rd party products, maintaining proprietary systems, and optimizing code. My work involves a variety of programming languages, data formats, and back-end systems. In addition to UX, APIs, and Game Design, I am also interested in working with Expert Systems, Simulations, or Artificial Intelligence applications.
        </p> */}
        <div className="clear-both pb-10" />
      </section>

      <div className={'spacer'} />

      <section className={'portfolio'}>
        <h3 className="text-center mb-5">Portfolio</h3>
        <hr/>
        {portfolio.map((item, idx) => {
          return (
            <div key={item.title} className="clear-both p-10">
              <img width="256"className={`item-img-${idx % 2 ? 'right' : 'left'} ${item?.img?.className}`} src={item?.img?.src} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href={item.cta.url} target="_blank" rel="noreferrer">
                <div className={'cta-button'}>
                  {item.cta.label}
                </div>
              </a>
            </div>
          );
        })}
        <div className="clear-both pb-10" />
      </section>

      <div className={'spacer'} />

      <section className={'contact text-center'}>
        <h3 className="text-center mb-5">{formSent ? 'Thank You!' : 'Contact Me'}</h3>
        <hr/>
        {formSent
          ? <div className={'py-5 px-10'}>
              <p>Your message has been sent!</p>
              <button className="cta-button" onClick={() => setFormSent(false)}>
                Send Another Message
              </button>
            </div>
          : formLoading
            ? <div className={'py-5 px-10 transition-all'}>
                <em>Loading...</em>
              </div>
            : <div className={'transition-all'}>
                <div className={'py-5 px-10'}>
                  <p>
                    Reach out today to discuss your project requirements and goals. We&apos;ll collaborate to bring your ideas to life in a way that is both scalable and sustainable.
                  </p>
                  <form className={'contact-form flex flex-col justify-center gap-1'} onSubmit={submit}>
                    <input
                      ref={nameRef}
                      className={'contact-input'}
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      ref={emailRef}
                      className={'contact-input'}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      ref={phoneRef}
                      className={'contact-input'}
                      type="phone"
                      name="phone"
                      placeholder="Phone (optional)"
                    />
                    <textarea
                      ref={commentsRef}
                      className={'contact-input'}
                      name="comments"
                      rows={4}
                      placeholder="What's on your mind?"
                      required
                    />
                    <button className={'cta-button mt-4 mx-16'} type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            }
      </section>

      <div className={'spacer'} />
    </div>
  )
}
