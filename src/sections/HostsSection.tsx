
import { CgProfile } from 'react-icons/cg';

const Host = (props: { name: string }) => {
    return (
        <div className="flex flex-col items-center">
            <CgProfile fontSize={128} />
            <div className="font-bold text-lg">
                {props.name}
            </div>
        </div>
    )
}

const HostsSection = () => {
    return (
        <section className="bg-rva-remix-purple my-4">
            <div className="flex flex-col items-center py-5">
                <div className="font-bold text-4xl pb-5">
                    MEET THE HOSTS
                </div>

                <div className="flex flex-col">
                    <Host name="TBD!" />
                </div>
            </div>
        </section >
    );
}

export default HostsSection;