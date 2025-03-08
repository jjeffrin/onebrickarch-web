import { INSTAGRAM, LINKEDIN } from "@/lib/constants";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image"

interface ITeam {
    name: string,
    role: string,
    imageUrl: string,
    urlIcon?: string,
    url?: string,
}

export default function OurTeam() {

    const people: ITeam[] = [
        {
            name: 'Ar. Nihil Antony',
            role: 'Founder/CEO',
            imageUrl: '/img/team/Nihil_Antony.webp',
            url: 'https://www.linkedin.com/in/nihil-antony-a034351a0',
            urlIcon: LINKEDIN
        },
        {
            name: 'Ar. Arsha Rajan',
            role: 'Co-Founder/CEO',
            imageUrl: '/img/team/Arsha.webp',
            url: 'https://www.linkedin.com/in/arsha-rajan-6270581a0',
            urlIcon: LINKEDIN
        },
        {
            name: 'Mr. Antony Rajan',
            role: 'Accounts Management Head',
            imageUrl: '/img/team/Antony_Rajan.webp',
        },
        {
            name: 'Mr. Antony Rebeira',
            role: 'Business Development Head',
            imageUrl: '/img/team/Antony_Rebeira.webp',
        },
        {
            name: 'Mr. Paulson Bosco',
            role: 'Human Resource',
            imageUrl: '/img/team/Paulson_Bosco.webp',
            url: 'https://www.instagram.com/bolsonbosco?igsh=MTl1NmJoOGg0eWlt',
            urlIcon: INSTAGRAM
        },
        {
            name: 'Er. Vinith Kumar',
            role: 'Project Manager',
            imageUrl: '/img/team/Vinith.webp',
            url: 'https://www.linkedin.com/in/vinith-kumar-13228231a',
            urlIcon: LINKEDIN
        },
        {
            name: 'Er. Ratheesh Mon R',
            role: 'Construction Management Head',
            imageUrl: '/img/team/Ratheessh_Mon.webp',
            url: 'https://www.linkedin.com/in/ratheesh-ratheesh-02b23322a',
            urlIcon: LINKEDIN
        },
        {
            name: 'Mr. John Ajish B',
            role: 'Site Executor Officer',
            imageUrl: '/img/team/Ajay.webp',
            url: 'https://www.linkedin.com/in/aj-ay-8195b42b5',
            urlIcon: LINKEDIN
        },
        {
            name: 'Mr. Castro',
            role: 'Creative Head/Editor',
            imageUrl: '/img/team/Antony_Castro.webp',
            url: 'https://www.linkedin.com/in/castro-antony-1a6986347',
            urlIcon: LINKEDIN
        },
        {
            name: 'Mr. Alex M',
            role: 'Public Relationship Officer/Admin',
            imageUrl: '/img/team/Alex.webp',
            url: 'https://www.linkedin.com/in/alex-m-b900512bb',
            urlIcon: LINKEDIN
        },
        {
            name: 'Er. Sowmya',
            role: '3D Visualizer',
            imageUrl: '/img/team/Sowmya.webp'
        }
    ]

    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                        Meet our team 🤝
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <Image alt="" src={person.imageUrl} className="size-16 rounded-full grayscale" width={100} height={100} />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    {person.urlIcon && <a href={person.url} target="_blank">{person.urlIcon === INSTAGRAM ? <FaInstagram className="text-sm/6" /> : <FaLinkedin className="text-sm/6" />}</a>}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
