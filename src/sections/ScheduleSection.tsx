
const character = require('../assets/character.png');

const ScheduleSection = () => {
    return (
        <section id="schedule">
            <div className="bg-black flex justify-around py-5 lg:mx-40">
                <div className="flex flex-col items-center lg:items-start">
                    <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                        SCHEDULE
                    </div>
                    <div className="flex flex-col px-9">
                        <div className="font-bold text-xl py-3">Saturday (Sept. 17th)</div>
                        <ul className="flex flex-col list-disc pb-3">
                            <li>10am Start of Event​</li>
                            <li>11am Opening Ceremony</li>
                            <li>11:30a Team building session</li>
                            <li>12pm Lunch!</li>
                            <li>1pm Workshop - Coding with Music with Code Beats</li>
                            <li>2pm Workshop - How to Make Money as an Artist with Carlos from In Your Ear Studio</li>
                            <li>3pm Workshop - How to Improvise with Jonathan Watson</li>
                            <li>3:30pm Workshop - Music NFTs with VCU Blockchain club</li>
                            <li>3-5pm Networking Happy Hour 🍺</li>
                            <li>6pm End of day one!</li>
                        </ul>
                        <div className="font-bold text-xl py-3">Sunday-Thursday (Sept. 18th-22nd)</div>
                        <ul className="flex flex-col list-disc pb-3">
                            <li>Grind time</li>
                            <li>Submissions are due Thursday at midnight</li>
                        </ul>
                        <div className="font-bold text-xl py-3">Friday (Sept. 23rd)</div>
                        <ul className="flex flex-col list-disc pb-3">
                            <li>Official Judging</li>
                            <li>Community Judging through Social Media</li>
                        </ul>
                        <div className="font-bold text-xl py-3">Saturday (Sept. 24rd)</div>
                        <ul className="flex flex-col list-disc pb-3">
                            <li>6pm Opening for Final Concert</li>
                            <li>7pm Price Ceremony</li>
                            <li>8pm 3rd place winner performance</li>
                            <li>9pm 2nd place winner performance</li>
                            <li>10pm 1st place winner performance</li>
                        </ul>
                    </div>

                </div>
                <div className="hidden lg:block">
                    <img className="w-200 object-contain" src={character} alt="tiny charater" width={400} />
                </div>
            </div>
        </section>
    );
}

export default ScheduleSection;