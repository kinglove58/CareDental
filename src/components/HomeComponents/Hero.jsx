import React from 'react'

const Hero = () => {

    const hero_data = [
        {
            title: "Care Dental Plan",
            text: "Quality Care Made Affordable, with Savings of Up to 50%",
            action: "Start Saving Now",
        },
        {
            title: "Affordable Family Dental Care",
            text: "Up to 50% Off",
            action: "Join Now",
        },
        {
            title: "Couples Save Big on",
            text: "Quality Dental Care",
            action: "Enjoy Now",
        },
    ]

    return (
        <div className=''>
            <div className="">
                {
                    hero_data.map((item) => (
                        <div className="">
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Hero
