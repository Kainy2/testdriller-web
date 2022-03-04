import React, { useEffect, useState } from 'react'
import Cards from '../Components/Card'
import Hero from '../Components/Hero'
import know from '../Assets/do-you-know.jpg'
import landscape from '../Assets/testdriller-landscape.jpg'
import intro from '../Assets/testdriller-intro.jpg'
import testimonial from '../Assets/testdriller-testimonial.jpg'
import fourColumns from '../Assets/testdriller-four-columns.jpg'
import threeColumns from '../Assets/testdriller-three-columns.jpg'
import { ButtonHero } from '../Components/Button'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const Home = () => {

    const products = [
        { title: ' TestDriller UTME', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.testdriller ' },
        { title: 'TestDriller Post UTME', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.postjamb' },
        { title: 'TestDriller BECE', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.bece ' },
        { title: 'Testdriller Law MCQ', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.lawmcq' },
        { title: 'TestDriller National Common Entrance Examination', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.ncee ' },
        { title: 'TestDriller Cowbellpedia', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.cowbellpedia' },
        { title: 'TestDriller IJMB', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.ijmb ' },
        { title: 'TestDriller ICAN', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.ican.skills ' },
        { title: 'TestDriller ICAN Professional', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.ican.pro' },
        { title: 'TestDriller WAEC/NECO', link: 'https://play.google.com/store/apps/details?id=com.iafsawii.waec.ssce' },
        { title: 'TestDriller SSCE' },
        { title: 'TestDriller Unilag Foundation' },
        { title: 'TestDriller NDA' },
        { title: 'EnglishKit' },
        { title: 'TestCentre' },
        { title: 'MathSolver' },
        { title: 'TestDriller Scholarship' },
        { title: ' School Exam Management System.' },

    ]
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let mth = 4
        let difference = +new Date(`0${mth}/5/${year}`) - +new Date();

        let timeLeft = {};

        if (difference < 0) {
            difference = difference + 3000000000
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {

            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);

    });






    return (
        <div>
            <section>
                <Hero />
            </section>
            <section className='md:w-[80%] p-5 mx-auto'>
                <h3 className='font-montserrat font-extrabold text-gray-900 md:text-4xl text-2xl text-center w-[80%] mx-auto py-20 '>REVEALED: The Simplest, Easiest and Quickest Way To Pass Even the Toughest Examination</h3>
                <div className='md:w-full mx-auto'>

                    <p>
                        Even if you've failed 99 times, been shamed by friends and family, spatted on by the people you're suppose to be ahead of and have given up on life, schooling and education.
                        <br />
                        <br />
                        Every student desires to smash their exams in one sitting especially the tough nuts and Destiny Determiners like WAEC, JAMB, Common Entrance, etc.
                        <br />
                        <br />

                        But..
                        <br />
                        <br />

                        All good things don't come easy... Or Do they?
                        <br />
                        <br />

                        Some people have to write their exams until they are able to spell their names with the exam count before passing them.
                        <br />
                        <br />

                        The frustration, the anger, the good-for-nothing feeling from your self and even the people you call family..
                        <br />
                        <br />
                        It isn't there fault after all... No one wants to keep planting in a soil that looks fertile but doesn't produce anything year after year..
                        <br />
                        <br />

                        And even if they are people like that, not in this part of our world..
                        <br />
                        <br />

                        But why go through all this stress when you've got TestDriller.
                        <br />
                        <br />

                        Like why should you?
                        <br />
                        <br />
                    </p>
                </div>
            </section>
            <section id='about' className='p-5 bg-slate-100 py-32'>

                <div className=' md:w-[70%] mx-auto '>
                    <h6 className='font-bold text-gray-900 font-montserrat text-4xl mb-10 pb-5'> What is it about Testdriller...</h6>
                    <div className="md:flex justify-between items-center  space-x-5  ">
                        <div className='w-full'>


                            TestDriller is a Computer-Based Testing and Learning Application that enables students challenge their exam preparedness up to 99%
                            <br />
                            <br />

                            With the TestDriller CBT software, you can practise different topics of a subject to gain mastery.
                            <br />
                            <br />
                            The TestDriller Software also comes with a Practice Mode, Study Mode and Mock Mode to enable you prepare better and more efficiently giving you a 99% edge over your counterparts..
                            <br />
                            <br />

                            Oh yes!, you read that right.
                            <br />

                            And you may probably be wondering how we do all these right?
                            <br />

                            <br />
                        </div>

                        <div className='w-11/12 p-2'>
                            <img className=' ' src={know} alt="do you know" />
                        </div>

                    </div>
                </div>
            </section>

            <section className=' py-28'>
                <div className='flex justify-between md:justify-center space-x-5 md:space-x-10 h-40 md:h-52 my-20 mx-3 overflow-auto cursor-all-scroll'>
                    <img className='w-10/12 md:w-auto ' src={fourColumns} alt="do you know" />
                    <img className=' ' src={threeColumns} alt="do you know" />
                    <img className=' ' src={intro} alt="do you know" />
                </div>
                <div className=' flex md:hidden w-1/2 mx-auto space-x-8 justify-center '>
                    <ArrowBackIos />
                    <ArrowForwardIos />
                </div>
            </section>


            <section id='how to use' className='p-5 py-40 bg-slate-100'>
                <div className='md:w-9/12 mx-auto'>
                    <h6 className='font-bold text-gray-900 font-montserrat text-4xl text-center mb-16 '> Here's how... </h6>
                    <div className="md:flex md:justify-between md:items-center md:space-x-5 ">

                        <div className='w-11/12 p-2'>
                            <img src={landscape} alt="Here's how" />
                        </div>

                        <div className='w-full'> <br />
                            The TestDriller Software has over 15+ years past questions in tons of external exams like (WAEC, JAMB, IJMB, ICAN BECE, Common Entrance), solutions and visual practical guides which is annually updated by our expert tech team.
                            <br />
                            <br />

                            The TestDriller Software also provides you with professional and actionable examination tips to help you pass any exam.
                            <br />

                        </div>
                    </div>
                </div>


            </section >


            <section className='bg-gray-700 py-16 shadow-sm'>
                <div className='p-5 md:w-[70%] mx-auto  text-gray-100 '>

                    <h6 className='font-bold  font-montserrat text-4xl  py-5'> That's not all!!! </h6>
                    <br />

                    TestDriller also provides you with loads and lots of educational fun games to help you have a better and relaxed learning and understanding and at such, increasing your performance level..
                    <br />
                    <br />

                    Still in doubt?
                    <br />
                    <br />
                    Here are some of the beautiful gossips from our esteemed users:
                    <br /> <br /> <br /><br />

                    <p className='italic text-gray-300'>I used this software to study, prepare and practice for JAMB CBT since it was my first time writing the exam and it was super helpful! I got my course choice on first sitting.</p>
                    <br />
                    ~ Amandukwu Chisom
                    <br /><br /><br /><br />


                    <p className='italic text-gray-300'>Getting TestDriller for my students was one of the best decisions I've ever made. It helped familiarize them with the CBT system. After writing JAMB, their results were beyond impressive!</p>
                    <br />
                    ~ Anonymous (School Owner)
                    <br />
                    <br />
                    <br />
                    <br />

                    Also…
                    <br />
                    <br />

                    These are some of the mind blowing JAMB scores from a few of our users…

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div >
                        <img className=' md:h-screen md:w-max w-screen mx-auto' src={testimonial} alt="do you know" />
                    </div>
                </div>
            </section>

            <section id='products' className='bg-gray-100 '>
                <div className=' md:w-[75%] mx-auto py-20 px-5 space-y-16'>
                    <h3 className=' font-semibold uppercase text-4xl text-center font-montserrat'> How Do You Get Started?</h3>
                    <p className='text-justify'>
                        <i>
                            Simply subscribe to any of the TestDriller Software product by downloading your choice TestDriller product from any of your favourite online download store by simply punching the name of your choice product on your laptop or desktop computers.. <br /><br />
                            Or by clicking any of the download buttons below our list of available products to access direct download to your choice product.
                        </i>
                    </p>
                    <div className=' md:grid md:grid-cols-3 md:gap-10'>

                        {products.filter(x => x.link)
                            .map(product => (
                                <Cards key={product.title} text={product.title} link={product.link} />
                            ))}
                    </div>

                    <p className='pt-10 text-justify'>
                        <i> Immediately after download, you activate your downloaded choice product software with your purchased unique subscription/activation code.. </i>
                    </p>
                    <div>
                        <i id='get-start'>
                            Here are some of the benefits from some of our TestDriller Products…
                        </i>

                        <ul className='my-10'>
                            <li><b>The MathSolver: The MathSolver for Senior Secondary School helps to solve mathematical problems by providing adequate workings to arrive at solutions.  Asides this, the MathSolver is used to generate printable graphs and charts from mathematical functions or statistical data.
                            </b></li>
                            <br />
                            <li><b>   The EnglishKit: The EnglishKit for Senior Secondary School is another product designed to help users improve their knowledge in the English Language. It contains idiomatic expressions, dictionary, proverbs and more.</b></li>
                        </ul>

                        With TestDriller, you're sure to make at least 75% in any exam you sit for.
                        <br />
                        <br />

                        And that's why, for a limited period of 30-days only, you can get your unique subscription pin code at a 50% discount purchase price of #2,000 naira only.
                        <br />
                        <br />

                        Ready to boost your confidence level?
                        <br />
                        <br />
                        <br />
                        <br />
                        <div id='get started' className='pb-10'>
                            <ButtonHero title="Get Started" target='_blank' link={"https://sendfox.com/lp/3qvw0l"} />
                        </div>


                    </div>


                </div>

            </section>
            <section className='p-10 md:w-4/6 md:mx-auto'>

                <p className='font-semibold'>Days until discount Expiry: </p>
                <div className='w-5/6 mx-auto flex space-x-5 justify-center pt-20'>
                    <div className=''>
                        <div className='flex items-center justify-center bg-gray-800 text-white w-20 h-10 rounded-md text-lg text-center font-bold'>
                            {timeLeft.days}
                        </div>
                        <div className='text-black text-base text-center font-semibold'>
                            Days
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center bg-gray-800 text-white w-20 h-10 rounded-md text-lg text-center font-bold'>
                            {timeLeft.hours}
                        </div>
                        <div className='text-black text-base text-center font-semibold'>
                            Hours
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center bg-gray-800 text-white w-20 h-10 rounded-md text-lg text-center font-bold'>
                            {timeLeft.minutes}
                        </div>
                        <div className='text-black text-base text-center font-semibold'>
                            Minutes
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex items-center justify-center bg-gray-800 text-white w-20 h-10 rounded-md text-lg text-center font-bold'>
                            {timeLeft.seconds}
                        </div>
                        <div className='text-black text-base text-center font-semibold'>
                            Seconds
                        </div>
                    </div>
                </div>
            </section>


            {/* <section id='get started' className='md:w-9/12 mx-auto p-5'> */}

            {/* </section> */}


        </div >
    )
}

export default Home