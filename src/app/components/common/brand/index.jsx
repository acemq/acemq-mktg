'use client';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { slideIn } from "../../../Animations/common";
import MaxContainer from '../../common/maxContainer'


const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])

    const brands = [
        {
            image: '/square.png',
            width: 'sm:w-[6rem] w-[7rem] aspect-square hover:opacity-[.5]',
        },
        {
            image: '/enbridge.png',
            width: 'sm:w-[18rem]',
            hoveredimage: '/enbridge_hov.png',
        },
        {
            image: '/microsoft.png',
            width: 'sm:w-[18rem] hover:opacity-[.5]',
        },
        // {
        //     image: '/henry.png',
        //     width: 'w-[18rem]',
        // },
        {
            image: '/gojek.png',
            width: 'sm:w-[18rem]',
            hoveredimage: '/gojek_hov.png',
        },
        {
            image: '/ceaser.png',
            width: 'sm:w-[18rem]',
            hoveredimage: '/ceaser_hov.png',
        },

    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: brands.length
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    }
    return (
        <section data-animation-id='slideIn' className="px-[3rem] sm:px-[10rem] sm:mt-[8rem] pt-[4rem] sm:pt-[10rem] pb-[5rem] sm:pb-[0] flex gap-x-[4rem] w-[100%]">
            <div className="w-[100%] relative z-[5] bg-[#11151A] sm:px-[5rem] rounded-bl-[0] rounded-b-[0] sm:rounded-bl-[2rem] sm:rounded-b-[2rem] px-[0] rounded-[2rem] border-[#FF6600] border sm:py-[4rem] py-[2rem]">
                <h2 className="text-[2.4rem] capitalize hidden sm:block sm:text-[3.2rem] text-center sm:text-left font-[700] mb-[3rem]">Trusted By <span className="text-[#FF6600]">brands globally</span></h2>
                <h2 className="text-[2.7rem] sm:hidden sm:text-[3.2rem]  text-center sm:text-left font-[700] mb-[3rem]">Trusted by <span className="text-[#FF6600]">Brands  Globally:</span></h2>
                <div className="hidden sm:flex items-center justify-between w-[100%]">
                    {brands.map((item, i) => <Icon item={item} key={i} />) }
                </div>
                <div className="sm:hidden">
                    <Carousel showDots={true} autoPlay={true} autoPlaySpeed={1000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", 'desktop']} responsive={responsive}>
                        {brands.map((item, i) => <Image src={item.image} key={i} alt="brand icon" className={`h-auto ${item.width}'`} width={150} height={100} />)}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}


export default Index;

const Icon = ({ item }) => {
    const [hovered, setIsHovered] = useState(false)
    return (
        <Image
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={hovered && item.hoveredimage ? item.hoveredimage : item.image}
            className={`h-auto ${item.width} hover:cursor-pointer`}
            width={150} alt="brand icon"
            height={100} />
    );
}

