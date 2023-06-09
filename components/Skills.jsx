import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import Python from "../public/assets/skills/python.png";
import Django from "../public/assets/skills/django.png";
import Flask from "../public/assets/skills/flask.png";
import FastAPI from "../public/assets/skills/fastapi.png";
import Postgres from "../public/assets/skills/postgres2.png";
import Mongo from "../public/assets/skills/mongo.png";
import Redis from "../public/assets/skills/redis.png";
import Docker from "../public/assets/skills/docker2.png";

import { RiRadioButtonFill } from "react-icons/ri";

const Skills = () => {
    return (
        <div>
            <div id="skills" className="w-full lg:h-screen p-2">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <p className='my-3 text-3xl tracking-widest uppercase text-[#39c6df]'>
                  Skills
                </p>
                <h2 className='py-4 my-3'>What I Can Do</h2>
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Frontend Technologies
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    These are the frontend technologies that I have experience working with to streamline my development workflow.
                                </p>
                            </div>
                            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                                <div className="p-2">
                                    <div className="grid grid-cols-3 md:grid-cols-1">
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Javascript
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            React
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Tailwind
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            NextJS
                                        </p>
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Html}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>HTML</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Css}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>CSS</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Javascript}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>JavaScript</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={ReactImg}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>React</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Tailwind}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Tailwind</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={NextJS}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Next</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="skills" className="w-full lg:h-screen p-2">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">              
                        <div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Python}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Python</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Django}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Django</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Flask}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Flask</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={FastAPI}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>FastAPI</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Postgres}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Postgres</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Firebase}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Firebase</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Mongo}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Mongo DB</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Redis}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Redis</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                        <div className="m-auto">
                                            <Image
                                                src={Docker}
                                                width="64px"
                                                height="64px"
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h3>Docker</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Backend Technologies
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    This are some of the backend technologies that I'm familiar with and have a good understanding and application on their use.
                                </p>
                            </div>
                            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                                <div className="p-2">
                                    <div className="grid grid-cols-3 md:grid-cols-2">
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Python
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Django
                                        </p>
                                        
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Flask
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Fast API
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Postgres
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Redis
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Mongo DB
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            Docker
                                        </p>
                                        <p className="text-gray-600 py-2 flex items-center">
                                            <RiRadioButtonFill className="pr-1" />{" "}
                                            AWS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
