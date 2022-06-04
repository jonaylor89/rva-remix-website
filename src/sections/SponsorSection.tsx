
const tapped = require('../assets/tapped_reverse.png')

const SponsorSection = () => {
    return (
        <section className="bg-rva-remix-purple mx-3 my-4 lg:mx-40">
            <div className="flex flex-col items-center py-9">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                    OUR SPONSORS
                </div>
                <div className="p-4">
                    <img src={tapped} alt="tapped logo" width={200}/>
                </div>
                <div>
                    <a className="text-red-300" href="https://rvaremix.org">Learn more</a> about becoming a sponsor! 
                </div>
            </div>
        </section>
    );
}

export default SponsorSection;