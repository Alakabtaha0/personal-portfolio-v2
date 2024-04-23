import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
	return (
		<div className='display-layout'>
			<header className='main-section'>
				<div className='header-display'>
					<h1>Taha Al-Asadi</h1>
					<h6>Full Stack Developer</h6>
					<p>Specialising in the front end</p>
				</div>
				<nav className='navbar'>
					<ul>
						<li><a href='#About'>About</a></li>
						<li><a href='#Experience'>Experience</a></li>
						<li><a href='#Projects'>Projects</a></li>
					</ul>
				</nav>
			</header>
			<main className='body-section'>
				<section id='About'>
					<p>Throughout my life, I have always been deeply committed to my professional development and have harbored a genuine passion for work. My journey in coding commenced at the age of 15 when I began learning Python with the ambition of developing video games. This initial foray into programming swiftly expanded into more complex endeavors, enabling me to integrate backend systems and develop the online presence for my first company by the age of 16. <br /> <br /> Upon completing high school, I had already secured a summer internship as a software engineer. This opportunity was followed by another internship, which eventually led to a position as a full-stack web developer. Motivated by a relentless drive to learn and grow, I continuously seek out opportunities to acquire new skills and enhance my expertise.
					</p>
				</section>
				<section id='Experience'>
					<Card date={'MAY 2023 - Present'}
						title={'Software Developer, Nano Group, London'}
						description={"Nano Group is a retail business in London specializing in mobile phones and vaping products, seamlessly integrating sales across online platforms like Amazon, eBay, and its own website. As a Software Developer since May 2023, I've spearheaded product integration and inventory management across these channels, developed custom software including POS and CMS tools to enhance operational efficiency, and maintained the company website on WordPress. I also integrated third-party APIs such as Deliveroo to optimize delivery options and used data analytics to monitor sales trends and inventory, ensuring excellent customer engagement and streamlined business operations."}
						skills={['Python', 'Django', 'AWS', 'React', 'JavaScript', 'WordPress']} />
					<Card date={'JUN 2020 - FEB 2023'}
						title={'Full-Stack Engineer, Debug Digital, London'}
						description={"Debug Digital is an independent web development firm based in London, specializing in crafting custom web solutions. As a Full-Stack Engineer from September 2020 to February 2023, I contributed to designing and implementing server-side infrastructure, developed and integrated various RESTful APIs, and created reusable components and front-ends for diverse products and services. My role also involved creating data pipelines to aggregate data from client systems and debugging broken functions and components. Additionally, I led a project team, guiding our efforts to deliver robust and scalable web applications tailored to meet specific client needs, thereby enhancing their digital presence and operational efficiency."}
						skills={['React', 'JavaScript', 'Node.JS', 'HTML/CSS', 'Python', 'Django', 'Express', 'MongoDB', 'PostgreSQL']} />
					<Card date={'MAR 2017 - JUL 2019'}
						title={'Back End Developer (Part-time), Nano Tech Systems LTD, London'}
						description={'Nano Tech is a small brick and mortar store in London that deals with vapes and mobile phones. I was in their back office as a teenager building their backend systems and developing their online presence in this part time role.'}
						skills={['Python', 'SEO', 'Google Analytics']} />
					<Card date={'2017 - Present'}
						title={'Director, VIP Mobile Numbers LTD, London'}
						description={"My side hustle where I sell custom mobile numbers. It's given me sales experience as well as experience running a company. Something you don't get as a software engineer"}
						skills={['Python', 'SEO', 'Google Analytics', 'Google Ads', 'Customer Sales', 'Customer Acquisition']} />
				</section>
				<section id='Projects'>
					<Card image={'https://cdn.solitairehut.com/img/game/9/9__t.jpg'}
						title={'Solitaire'}
						description={'I built a web based solitaire game using React. It was a fun project to work on and it game me an indepth look into react and how to use it to build games. As well as polishing code to make it run as smoothly as possible.'}
						skills={['React', 'JavaScript', 'HTML', 'CSS']} />
					<Card image={'https://miro.medium.com/v2/resize:fit:1133/1*cd9yqEWe-wfX8UT3vf5Wpw.png'}
						title={'Star Wars API'}
						description={'Built a star wars codex in less than 4 hours. Motivation to build it was for a interview but it turned out pretty nice.'}
						skills={['React', 'JavaScript', 'HTML', 'CSS', 'API']} />
				</section>
			</main>
		</div>
	);
}

export default App;
