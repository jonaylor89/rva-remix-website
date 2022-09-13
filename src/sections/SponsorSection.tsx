
const tapped = require('../assets/tapped_reverse.png')
const jam_gems = require('../assets/jam_gems_logo.png')
const tcc = require('../assets/tcc.png')

const SponsorSection = () => {
    return (
        <section className="bg-rva-remix-purple mx-3 my-4 lg:mx-40">
            <div className="flex flex-col items-center py-9">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                    OUR SPONSORS
                </div>
                <div className="flex md:flex-row">
                    <div className="p-4">
                        <img src={tapped} alt="tapped logo" width={200} />
                    </div>
                    <div className="p-4">
                        <img src={jam_gems} alt="jam gems logo" width={200} />
                    </div>
                    <div className="p-4">
                        <img src={tcc} alt="TCCEntertainment" width={200} />
                    </div>
                </div>
                <div>
                    <a className="text-red-300" href="https://drive.google.com/file/d/1HIjUZg0nmd2YB_F9z-Yys1wDUJ_WO3SJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Learn more</a> about becoming a sponsor!
                </div>
            </div>
        </section>
    );
}

export default SponsorSection;