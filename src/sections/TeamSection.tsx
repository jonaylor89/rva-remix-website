
const johannes = require('../assets/Johannes.jpg');
const denise = require('../assets/Denise.jpg');
const shadden = require('../assets/Shadden.jpg');
const chris = require('../assets/Chris.jpeg');
const jonathan = require('../assets/Jonathan.png');

const TeamMember = (props: { name: string, title: string, img_src: string }) => {
    return (
        <section>
            <div className="flex flex-col items-center pb-5 px-10 hover:scale-125 ease-in-out duration-200">
                <img 
                    className="rounded-full object-cover w-[150px] h-[150px]" 
                    // style={{width: '300px', height: '250px', objectFit: 'cover'}} 
                    src={props.img_src} 
                    alt={props.name} 
                    />

                <div className="font-bold text-lg">
                    {props.name}
                </div>
                <div>
                    {props.title}
                </div>
            </div>
        </section>
    )
}

const TeamSection = () => {
    return (
        <section className="bg-rva-remix-purple my-4 mx-40">
            <div className="flex flex-col items-center py-5">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl lg:pb-6">
                    MEET THE TEAM
                </div>

                <div className="flex flex-col lg:flex-row">
                    <TeamMember name="Johannnes" title="Lead Organizer" img_src={johannes} />
                    <TeamMember name="Shadden" title="Lead of Operations" img_src={shadden} />
                    <TeamMember name="Denise" title="Lead Designer" img_src={denise} />
                    <TeamMember name="Jonathan" title="Artists Relation Lead" img_src={jonathan} />
                    <TeamMember name="Chris" title="Social Media Manager" img_src={chris} />
                </div>
            </div>
        </section >
    );
}

export default TeamSection;