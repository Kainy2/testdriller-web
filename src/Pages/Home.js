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

const Home = () => {

    const products = [
        { title: ' TestDriller UTME' },
        { title: 'TestDriller SSCE' },
        { title: 'MathSolver' },
        { title: 'EnglishKit' },
        { title: 'TestDriller Unilag Foundation' },
        { title: 'TestDriller Post UTME' },
        { title: 'TestDriller BECE' },
        { title: ' TestDriller NDA' },
        { title: 'TestDriller Scholarship' },
        { title: 'TestCentre' },
        { title: 'Law MCQ' },
        { title: ' TestDriller National Common Entrance Examination' },
        { title: 'TestDriller Cowbellpedia' },
        { title: 'TestDriller IJMB' },
        { title: 'TestDriller ICAN' },
        { title: ' School Exam Management System.' },

    ]
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`05/05/${year}`) - +new Date();

        let timeLeft = {};

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

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className='font-bold'>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });




    return (
        <div>
            <section>
                <Hero />
            </section>
            <section className='md:w-[70%] p-5 mx-auto'>
                <h3 className='font-extrabold text-gray-900 md:text-4xl text-2xl text-center w-[80%] mx-auto py-20 '>REVEALED: The Simplest, Easiest and Quickest Way To Pass Even the Most Toughest Examination</h3>
                <div className='md:w-[90%] mx-auto'>

                    <p>
                        Even if you've failed 99 times, been shamed by friends and family, spatted on by the people you're suppose to be ahead of and have given up on life, schooling and education.
                        <br />
                        Every student desires to smash their exams in one sitting especially the tough nuts and Destiny Determiners like WAEC, JAMB, Common Entrance, etc.
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
                        It isn't there fault after all... No one wants to keep planting in a soil that looks fertile but doesn't produce anything year after year..
                        <br />

                        And even if they are people like that, not in this part of our world..
                        <br />

                        But why go through all this stress when you've got TestDriller.
                        <br />

                        Like why should you?
                        <br />
                    </p>



                </div>
            </section>
            <section id='usage' className='p-5 bg-slate-100 my-28 py-16'>

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

            <section>
                <div className='flex justify-center space-x-10 h-52  my-20 mx-3 overflow-auto '>
                    <img className=' ' src={fourColumns} alt="do you know" />
                    <img className=' ' src={threeColumns} alt="do you know" />
                    <img className=' ' src={intro} alt="do you know" />

                </div>
            </section>


            <section id='how to use' className='p-5 md:w-[70%] mx-auto mb-24'>
                <div className=''>
                    <h6 className='font-bold text-gray-900 font-montserrat text-4xl text-center mb-16 '> Here's how... </h6>
                    <div className="md:flex justify-between items-center space-x-5 ">

                        <div className='w-11/12 p-2'>
                            <img src={landscape} alt="Here's how" />
                        </div>

                        <div className='w-full'>
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

                    - TestDriller also provides you with loads and lots of educational fun games to help you have a better and relaxed learning and understanding and at such, increasing your performance level..
                    <br />

                    Still in doubt?
                    <br />

                    Here are some of the beautiful gossips from our esteemed users:
                    <br />

                    I used this software to study, prepare and practice for JAMB CBT since it was my first time writing the exam and it was super helpful! I got my course choice on first sitting.
                    ~Amandukwu Chisom
                    <br />


                    Getting TestDriller for my students was one of the best decisions I've ever made. It helped familiarize them with the CBT system. After writing JAMB, their results were beyond impressive!
                    <br />

                    ~Anonymous (School Owner)
                    <br />

                    Also…
                    <br />

                    These are some of the mind blowing JAMB scores from a few of our users…

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
                <div className=' md:w-[75%] mx-auto  mb-10  py-20 space-y-20'>
                    <h3 className=' font-semibold text-3xl text-center '>Products</h3>
                    <div className=' md:grid md:grid-cols-3 md:gap-10'>

                        {products.map(product => (
                            <Cards key={product.title} text={product.title} />
                        ))}
                    </div>
                </div>
            </section>


            <section id='get started' className='md:w-[70%] mx-auto p-5'>
                <h3 className='font-semibold text-3xl pb-12'>How do you get started?</h3>
                <div>
                    <i>
                        Simply subscribe to any of the TestDriller Software product by downloading your choice TestDriller application from any of your favourite online store (Google play Store or Apple Store) by clicking any of these buttons below:
                    </i>


                    <div className=" md:mt-5 mt-16">
                        <ButtonHero title=" Download (Android) " link={'https://play.google.com/store/apps/details?id=com.iafsawii.testdriller'} />
                        <ButtonHero title=" Download (iOS) " link={'https://apps.apple.com/ng/app/jamb-cbt-news-results/id1515034318'} />
                    </div>
                    <p>
                        on your mobile device or by simply punching the name of your choice product on your laptop or desktop computers.
                    </p>
                    <br />
                    <p>
                        Immediately after download, you activate your downloaded choice product software with your purchased unique subscription.
                    </p>

                    <br />
                    <br />
                    <i>
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

                    Hit the button below to <b>GET STARTED!!!</b>
                    <br />
                    <br />


                </div>
                <div id='Get Started'>
                    <ButtonHero title=" Get Started" target='_blank' link={"https://sendfox.com/lp/3qvw0l"} />

                </div>
                <div className='text-center mx-aut0'>
                    <p>Discount offer elapses with timer :</p> <br />
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}

                </div>


            </section>


        </div >
    )
}

export default Home