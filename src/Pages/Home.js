import React from 'react'
import Cards from '../Components/Card'
import Hero from '../Components/Hero'
import know from '../Assets/do-you-know.jpg'
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
                    Every student desires to smash their exams in one sitting especially the Destiny Determiners like WAEC, JAMB, Common Entrance, etc.
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

                    But why go through all these stress when you've got TestDriller.
                    <br />

                    Why? Why? Like why?, really?
                    <br />
                </p>



                </div>
            </section>
            <section id='usage' className='p-5 bg-slate-100 my-28 py-16'>

                <div className=' md:w-[70%] mx-auto '>
                    <h6 className='font-bold text-gray-900 font-montserrat text-4xl mb-10 pb-5'> Do you know that..</h6>
                    <div className="md:flex justify-between items-center  space-x-5  ">
                        <div className='w-full'>

                            TestDriller is a Computer-Based Testing and Learning Application that enables students challenge their exam preparedness.
                            <br />

                            With TestDriller CBT software, you can practise each subject by topic to gain mastery.
                            <br />
                            The TestDriller also comes with a Practice Mode, Study Mode and Mock Mode to enable you prepare better for your exam up to 99%.
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


            <section id='how to use' className='p-5 md:w-[70%] mx-auto mb-24'>
                <div className=''>
                    <h6 className='font-bold text-gray-900 font-montserrat text-4xl text-center mb-20 '> Here's how... </h6>
                    <div className="md:flex justify-between items-center space-x-5 ">

                        <div className='w-11/12 p-2'>
                            <img src={know} alt="Here's how" />
                        </div>

                        <div className='w-full'>
                            - The TestDriller Software has over 15+ years past questions in tons of external exams like (WAEC, JAMB, IJMB, ICAN BECE, Common Entrance), solutions and visual practical guides which is annually updated by our expert tech team.
                            <br />

                            - The TestDriller Software also provides you with professional and actionable examination tips to help you pass any exam.
                            <br />

                        </div>
                    </div>
                </div>


            </section >


            <section className='bg-gray-700 py-16 shadow-sm'>
                <div className='p-5 md:w-[70%] mx-auto  text-gray-100 '>

                    <h6 className='font-bold  font-montserrat text-4xl  py-5'> That's not all!!! </h6>
                    <br />

                    - TestDriller also provides you with loads and lots of educational fun games to help you have a better and relaxed learning and understanding!
                    <br />

                    Still not convinced?
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

                    These are some of the scores from a few of our users…


                    <br />
                </div>
            </section>

            <section id='products' className='bg-gray-100 '>
                <div className=' md:w-[75%] mx-auto  mb-10  py-20 space-y-20'>
                    <h3 className=' font-semibold text-3xl text-center '>Products</h3>
                    <div className=' md:grid md:grid-cols-3 md:gap-10'>

                        {products.map(product => (
                            <Cards text={product.title} />
                        ))}
                    </div>
                </div>
            </section>


            <section id='get started' className='md:w-[70%] mx-auto p-5'>
                <h3 className='font-semibold text-3xl px-10 py-20'>How to get started</h3>
                <p>
                    <i>
                        Simply subscribe to any of the TestDriller Software product by downloading the TestDriller software application from any of your favourite online store on your mobile device, laptop or desktop computers and activate your choice product software with your unique subscription pin upon purchase.
                    </i>
                    But..
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
                    What are you waiting for? Hit the button below to
                    <b> GET STARTED!!!  ( I'll send you a get started link) and purchase your unique subscription pin with the ongoing 30-days 50% discount price of #2,000 naira only.
                    </b>


                </p>
                <div id='Get Started'>
                        <ButtonHero title=" Get Started"  target='_blank' link={"http://localhost:3000/'https://sendfox.com/lp/3qvw0l'"} />

                </div>


            </section>


        </div >
    )
}

export default Home