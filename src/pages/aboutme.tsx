import sam from "/public/images/samimg.webp"

const Aboutme = () => {
  return (
    <div className="pb-16">
      <h1 className="title">About Sam</h1>
      <p className="psm mt-2 mb-12">
        Hi, I’m Sam, a curious tech enthusiast from a small fishing village near Pondicherry. I graduated with a Bachelor’s degree in Information Technology from Dhanalakshmi Srinivasan College in Mamallapuram. My college experience was largely shaped by the COVID-19 pandemic, during which I spent a lot of time exploring and learning new things on my own
      </p>
      <div>
        <img src={sam} alt="sam.js image" title="samjs"  className="w-full max-w-[400px] mb-8 rounded-[6px] "/>
      </div>
      <p className="psm mt-2 ">
        With a government-provided laptop and internet access, I began blogging about technology and learning programming languages like C and Java. My initial goal was to earn enough through blogging to buy a better laptop for coding. However, by my final year, I realized that blogging alone wouldn’t suffice. This led me to discover freeCodeCamp, where I immersed myself in frontend development, particularly enjoying the process of learning React.
      </p>
      <p className="psm mt-2 ">
        To gain practical experience, I interned as a frontend developer at a startup, where I honed my skills in JavaScript, working with vanilla CSS, JS, and frameworks like Laravel and Django. This experience solidified my JavaScript knowledge and gave me a strong foundation.
        After securing a full-time role, I had the opportunity to work with React and Next.js. I thrived in the startup environment, collaborating closely with SEO, marketing, and design teams. I also excelled at mentoring freshers and leading frontend projects.
      </p>
      <p className="psm mt-2 ">
        Eventually, I advanced to a frontend developer lead role, where I was involved in both frontend and backend development, collaborating with backend teams, deciding on tech stacks, and making key architectural decisions.
      </p>
      <p className="psm mt-2 ">
        In May 2024, I decided to leave my position to embark on a new journey. With 2.5 years of startup experience, I now specialize in frontend development, constantly trying out new things, and eagerly seeking new opportunities to grow and contribute.
      </p>
    </div>
  )
}

export default Aboutme
