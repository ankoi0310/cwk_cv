import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {
  BiAward,
  BiBook,
  BiBriefcaseAlt,
  BiCodeAlt,
  BiCycling,
  BiDownload,
  BiEnvelope,
  BiGridAlt,
  BiHeadphone,
  BiHome,
  BiMap,
  BiMoon,
  BiPhone,
  BiReceipt,
  BiSun,
  BiUpArrowAlt,
  BiUser,
} from 'react-icons/bi'
import {
  showMenu,
  linkAction,
  scrollActive,
  scrollTop,
  generateResume,
  scaleCV,
  removeScaleCV,
} from './utils/cv_utils'
import './App.css'
import avatar from './assets/images/avatar.png'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const resumeProgress = () => {
    // 1. Add scale-cv class to body
    scaleCV()

    // 2. Generate PDF
    generateResume()

    // 3. Remove scale-cv class from body after 500ms
    setTimeout(removeScaleCV, 1000)
  }

  useEffect(() => {
    const themeHandler = () => {
      document.body.classList.toggle('dark-theme')
      setDarkTheme(document.body.classList.contains('dark-theme'))
      localStorage.setItem('theme', darkTheme ? 'dark' : 'light')
    }

    window.addEventListener('scroll', scrollTop)
    window.addEventListener('scroll', scrollActive)

    const navLink = document.querySelectorAll<HTMLElement>('.nav__link')
    navLink.forEach(n => n.addEventListener('click', linkAction))

    setDarkTheme(document.body.classList.contains('dark-theme'))
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light')

    const themeButton = document.getElementById('theme-button')
    themeButton?.addEventListener('click', themeHandler)

    const resumeButton = document.getElementById('resume-button')
    resumeButton?.addEventListener('click', resumeProgress)

    return () => {
      showMenu()
      window.removeEventListener('scroll', scrollTop)
      window.removeEventListener('scroll', scrollActive)
      themeButton?.removeEventListener('click', themeHandler)
      navLink.forEach(n => n.removeEventListener('click', linkAction))
      resumeButton?.removeEventListener('click', resumeProgress)
    }
  }, [darkTheme])

  return (
    <>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <HashLink to={'#home'} className="nav__logo">
            KOI
          </HashLink>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <HashLink to={'#home'} className="nav__link active-link">
                  <BiHome className="nav__icon"/> Home
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#profile'} className="nav__link">
                  <BiUser className="nav__icon"/> Profile
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#education'} className="nav__link">
                  <BiBook className="nav__icon"/> Education
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#skills'} className="nav__link">
                  <BiReceipt className="nav__icon"/> Skills
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#project'} className="nav__link">
                  <BiBriefcaseAlt className="nav__icon"/> Project
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#certificates'} className="nav__link">
                  <BiAward className="nav__icon"/> Certificates
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <BiGridAlt/>
          </div>
        </nav>
      </header>

      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* HOME */}
            <section className="home" id="home">
              <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                  <img src={avatar} alt="avatar" className="home__img"/>

                  <h1 className="home__title">
                    <b>AN HUYNH VAN HUU</b>
                  </h1>
                  <h3 className="home__profession">Web Developer</h3>

                  {/* Download CV button */}
                  <div>
                    <a
                      download
                      href="/assets/pdf/resume.pdf"
                      className="home__button-movil">
                      Download
                    </a>
                  </div>
                </div>

                <div className="home__address bd-grid">
                  <span className="home__information">
                    <BiMap className="home__icon"/> Ho Chi Minh City, Vietnam
                  </span>
                  <span className="home__information">
                    <BiEnvelope className="home__icon"/>
                    huynhvahuuan3620@gmail.com
                  </span>
                  <span className="home__information">
                    <BiPhone className="home__icon"/> +84787782050
                  </span>
                </div>
              </div>

              {/* Theme change button */}
              {darkTheme ? (
                <BiMoon
                  className="change-theme"
                  title="Theme"
                  id="theme-button"
                />
              ) : (
                <BiSun
                  className="change-theme"
                  title="Theme"
                  id="theme-button"
                />
              )}

              {/* Button to generate and download the pdf file. */}
              <BiDownload
                className="generate-pdf"
                title="Generate PDF"
                id="resume-button"
              />
            </section>

            {/* SOCIAL */}
            <section className="social section">
              <h2 className="section-title">SOCIAL</h2>
              <div className="social__container bd-grid">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link">
                  <BsLinkedin className="social__icon"/> @ankoi0310
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link">
                  <BsFacebook className="social__icon"/> @KOI0310.IT
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link">
                  <BsInstagram className="social__icon"/> @ankoi.0310
                </a>
              </div>
            </section>

            {/* PROFILE */}
            <section className="profile section" id="profile">
              <h2 className="section-title">Profile</h2>

              <p className="profile__description">
                Aspiring and enthusiastic web developer specializing Web and
                Mobile Development. Always improve knowledge to become a
                fullstack developer.
              </p>
            </section>

            {/* EDUCATION */}
            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>

              <div className="education__container bd-grid">
                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      Advanced Diploma in Software Engineering
                    </h3>
                    <span className="education__studies">
                      APTECH Computer Education
                    </span>
                    <span>
                      Graduated with <b>Distinction</b>
                    </span>
                    <span className="education__year">2019 - 2022</span>
                  </div>
                </div>

                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    {/*<span className={cx(}'education__line"></span>*/}
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      Bachelor of Information Technology
                    </h3>
                    <span className="education__studies">
                      Nong Lam University Ho Chi Minh City
                    </span>
                    <span>
                      Current GPA: <b>3.0 / 4.0</b>
                    </span>
                    <span className="education__year">2019 - Now</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section className="skills section" id="skills">
              <h2 className="section-title mb-3">Skills</h2>

              <div className="skill__container bd-grid">
                <div>
                  <h3 className="skill__title">
                    Web Technologies & Frameworks
                  </h3>
                  <div className={'grid grid-cols-2'}>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> HTML5
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> Angular
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> ReactJS
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> Flutter
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> NodeJS
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> Redux
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> TailwindCSS
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="skill__title">Programming Languages</h3>
                  <div className={'grid grid-cols-2'}>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> Java
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> JavaScript
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> TypeScript
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> Dart
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="skill__title">Database Management</h3>
                  <div className={'grid grid-cols-2'}>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> MySQL
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> MSSQL Server
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> MongoDB
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> PostgreSQL
                    </span>
                    <span className={'skill__name'}>
                      <span className="skill__circle"></span> Firebase
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="resume__right">
            {/* PROJECTS */}
            <section className="project section" id="project">
              <h2 className="section-title">Project</h2>

              <div className="project__container bd-grid">
                <div className="project__content">
                  <div className="project__data bd-grid">
                    <div className={'grid grid-cols-12 items-center'}>
                      <h3 className="project__title">
                        CWK-NLU - Individual project
                      </h3>
                      <span className="project__time">June 2023 - Present</span>
                    </div>
                    <div className="project__description">
                      <ul className={''}>
                        <li>
                          <span>
                            - Build a website inspired by my university's course
                            registration website using ReactJS, TailwindCSS. Use
                            ExpressJS to handle the API already available
                            through the proxy.
                          </span>
                        </li>
                        <li>
                          <span>
                            - Responsibility:
                            <ul className={'project__responsibility_list'}>
                              <li>
                                <span>
                                  - Design the UI/UX to make users have better
                                  experience.
                                </span>
                              </li>
                              <li>
                                <span>
                                  - Learn about Redux to manage the state of the
                                  application.
                                </span>
                              </li>
                              <li>
                                <span>
                                  - Create an intermediate server to handle
                                  requests and responses.
                                </span>
                              </li>
                            </ul>
                          </span>
                        </li>
                        <li>
                          <span>
                            - Production:{' '}
                            <Link to={'https://nlu.huynhvanhuuan.id.vn'}>
                              https://nlu.huynhvanhuuan.id.vn
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            - Github:{' '}
                            <Link to={'https://github.com/ankoi0310/cwk_nlu'}>
                              https://github.com/ankoi0310/cwk_nlu
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="project__content">
                  <div className="project__data bd-grid">
                    <div className={'grid grid-cols-12 items-center'}>
                      <h3 className="project__title">
                        Movie Ticket Booking - Group project
                      </h3>
                      <span className="project__time">Feb 2023 - May 2023</span>
                    </div>
                    <div className="project__description">
                      <ul className={''}>
                        <li>
                          <span>
                            - Aiming to build a application that allows users to
                            book movie tickets online on multiple platforms
                            using Flutter, Spring Boot, PostgreSQL.
                          </span>
                        </li>
                        <li>
                          <span>
                            - Responsibility:
                            <ul className={'project__responsibility_list'}>
                              <li>
                                <span>
                                  - Join the team as a Full-stack developer.
                                </span>
                              </li>
                              <li>
                                <span>
                                  - Learn how to use Firebase to handle
                                  authentication and storage.
                                </span>
                              </li>
                              <li>
                                <span>
                                  - Integrate Momo payment gateway into the
                                  application.
                                </span>
                              </li>
                            </ul>
                          </span>
                        </li>
                        <li>
                          <span>
                            - Github:
                            <ul className={'project__link_list'}>
                              <li>
                                <Link
                                  to={
                                    'https://github.com/ankoi0310/movie_ticket_booking_client/tree/koi'
                                  }>
                                  -
                                  https://github.com/ankoi0310/movie_ticket_booking_client
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    'https://github.com/ankoi0310/movie_ticket_booking_admin/tree/funni'
                                  }>
                                  -
                                  https://github.com/ankoi0310/movie_ticket_booking_admin
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={
                                    'https://github.com/catabada/movie_ticket_booking_api/tree/funni'
                                  }>
                                  -
                                  https://github.com/catabada/movie_ticket_booking_api
                                </Link>
                              </li>
                            </ul>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="project__content">
                  <div className="project__data bd-grid">
                    <div className={'grid grid-cols-12 items-center'}>
                      <h3 className="project__title">
                        NLU - Individual project
                      </h3>
                      <span className="project__time">Dec 2022 - Feb 2023</span>
                    </div>
                    <div className="project__description">
                      <ul className={''}>
                        <span>
                          <li>
                            <span>
                              - The goal is to help students at NLU conveniently
                              view and manage their timetable through a mobile
                              application.
                            </span>
                          </li>
                          <li>
                            <span>
                              - Responsibility:
                              <ul className={'project__responsibility_list'}>
                                <li>
                                  <span>
                                    - Being study and research about Flutter and
                                    Dart to build a mobile application.
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    - Learn how to use Rive to create
                                    interactive UI for my app.
                                  </span>
                                </li>
                              </ul>
                            </span>
                          </li>
                          <li>
                            <span>
                              - Github:{' '}
                              <Link to={'https://github.com/ankoi0310/nlu'}>
                                https://github.com/ankoi0310/nlu
                              </Link>
                            </span>
                          </li>
                        </span>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="project__content">
                  <div className="project__data bd-grid">
                    <div className={'grid grid-cols-12 items-center'}>
                      <h3 className="project__title">
                        Selling Course Website - Group project
                      </h3>
                      <span className="project__time">Oct - Dec 2022</span>
                    </div>
                    <div className="project__description">
                      <ul className={''}>
                        <li>
                          <span>
                            - Aiming to build an intermediary website to sell a
                            variety of courses from reputable institutions using
                            ReactJS, Spring Boot and MySQL.
                          </span>
                        </li>
                        <li>
                          <span>
                            - Responsibility:
                            <ul className={'project__responsibility_list'}>
                              <li>
                                <span>
                                  - Join and develop the project as a Back-end
                                  Developer.
                                </span>
                              </li>
                              <li>
                                <span>
                                  - Integrate Momo and VNPay payment gateway
                                  into the application.
                                </span>
                              </li>
                              <li>
                                <span>
                                  - Managing team and lead them complete the
                                  project.
                                </span>
                              </li>
                            </ul>
                          </span>
                        </li>
                        <li>
                          <span>
                            - Github:
                            <ul className={'project__link_list'}>
                              <li>
                                <span>
                                  <Link
                                    to={
                                      'https://github.com/catabada/sales-course-fe'
                                    }>
                                    -
                                    https://github.com/catabada/sales-course-fe
                                  </Link>
                                </span>
                              </li>
                              <li>
                                <span>
                                  <Link
                                    to={
                                      'https://github.com/catabada/sales-course-api'
                                    }>
                                    -
                                    https://github.com/catabada/sales-course-api
                                  </Link>
                                </span>
                              </li>
                            </ul>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CERTIFICATES */}
            <section className="certificates section" id="certificates">
              <h2 className="section-title mb-2">Certificates</h2>

              <div className="certificates__container bd-grid mb-3">
                <div className="certificate__content">
                  <div className={'grid grid-cols-12 items-center'}>
                    <h3 className="certificate__title">
                      Software Development with Scrum Training Course
                    </h3>
                    <span className="certificate__time">Mar - May 2023</span>
                  </div>
                  <ul className={''}>
                    <li>
                      <span>
                        - Learn about Scrum, Agile Methodology and how to apply
                        them in software development.
                      </span>
                    </li>
                    <li>
                      <span>
                        - Link:{' '}
                        <Link
                          to={
                            'https://verified.sertifier.com/en/verify/80133323224853/'
                          }>
                          https://verified.sertifier.com/en/verify/80133323224853/
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="certificates__container bd-grid">
                <div className="certificate__content">
                  <div className={'w-full flex justify-between'}>
                    <h3 className="certificate__title">
                      Basic Training Course on AI
                    </h3>
                    <span className="certificate__time">Dec 2021</span>
                  </div>
                  <ul className={'pl-3  list-inside'}>
                    <li>
                      <span>
                        - Learn about the basic knowledge of AI, Machine
                        Learning and Deep Learning.
                      </span>
                    </li>
                    <li>
                      <span>
                        - Apply the knowledge to build a simple AI model using
                        Python.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* INTERESTS */}
            <section className="interests section">
              <h2 className="section-title">Interests</h2>

              <div className="interests__container bd-grid">
                <div className="interest__content">
                  <BiHeadphone className="interest__icon"/>
                  <span className="interest__name">Music</span>
                </div>
                <div className="interest__content">
                  <BiCycling className="interest__icon"/>
                  <span className="interest__name">Travel</span>
                </div>
                <div className="interest__content">
                  <BiBook className="interest__icon"/>
                  <span className="interest__name">Read</span>
                </div>
                <div className="interest__content">
                  <BiCodeAlt className="interest__icon"/>
                  <span className="interest__name">Code</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* SCROLL TOP */}
      <HashLink to={'#'} className="scroll-top" id="scroll-top">
        <BiUpArrowAlt className="scroll-top__icon"/>
      </HashLink>
    </>
  )
}

export default App
