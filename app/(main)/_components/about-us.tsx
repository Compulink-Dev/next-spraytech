import LinkButton from '@/components/link-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function AboutUs() {
    return (
        <div className='pt-12'>
            <div className="grid gri-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-2">
                    <Image
                        src={"/hero.png"}
                        alt=''
                        width={300}
                        height={300}
                        className='w-full object-contain'
                    />
                </div>
                <div className="flex flex-col gap-4 col-span-3">
                    <p className="text-2xl font-bold">About SprayTech</p>
                    <div className="">
                        <p className="text-lg font-bold">SprayTech Zimbabwe is the premier autobody shop in Zimbabwe, specializing in high-end cars.
                        </p>
                        <span className="font-bold pb-4">Here’s how we portray themselves on their website:</span>
                        <ul className="list-disc px-8 text-sm mt-4">
                            <li className=""> Professionalism: Emphasize their professionalism and expertise in autobody repair and painting, particularly for
                                luxury and high-performance vehicles.</li>
                            <li className=""> Specialization: Clearly communicate their specialization in top-end cars, demonstrating their capability to
                                handle the unique needs and specifications of luxury vehicles. </li>
                            <li className="">  Customer Service: Focus on exceptional customer service, ensuring clients feel confident and
                                well-cared-for throughout the repair process.</li>
                            <li className="">Experience: Highlight their years of experience and track record of successfully servicing high-profile clients and
                                vehicles. </li>
                            <li className="">Technology and Innovation: Mention any advanced technology or innovative techniques they use in their repair and painting processes to ensure
                                the best results. </li>
                            <li className="">Trustworthiness: Build trust by including testimonials or case studies from satisfied clients, including any partnerships or endorsements they
                                may have.</li>
                            <li className="">Community Engagement: If applicable, showcase any community involvement or charitable initiative We aim to create a website that not only
                                showcases our technical expertise but also conveys a sense of luxury, trustworthiness, and reliability to potential customers looking for the best autobody
                                services for their high-end vehicles.</li>
                        </ul>

                    </div>
                    <div className="">
                        <LinkButton
                            title="Read More"
                            link="/about"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs