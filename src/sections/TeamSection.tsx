import { CgProfile } from 'react-icons/cg';

const TeamMember = (props: { name: string, title: string }) => {
    return (
        <div className="flex flex-col items-center pb-5">
            <CgProfile fontSize={128} />
            <div className="font-bold text-lg">
                {props.name}
            </div>
            <div>
                {props.title}
            </div>
        </div>
    )
}

const TeamSection = () => {
    return (
        <section className="bg-rva-remix-purple my-4">
            <div className="flex flex-col items-center py-5">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                    MEET THE TEAM
                </div>

                <div className="flex flex-col">
                    <TeamMember name="Johannnes" title="Lead Organizer" />
                    <TeamMember name="Shadden" title="Lead Designer" />
                    <TeamMember name="Denise" title="Lead of Operations" />
                    <TeamMember name="Jonathan" title="Artists Relation Lead" />
                    <TeamMember name="Chris" title="Social Media Manager" />
                </div>
            </div>
        </section >
    );
}

export default TeamSection;