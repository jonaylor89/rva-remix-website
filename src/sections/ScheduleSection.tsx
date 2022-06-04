
const ScheduleSection = () => {
    return (
        <section id="schedule">
            <div className="bg-black flex flex-col items-center py-5 lg:mx-40">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                    SCHEDULE
                </div>

                <div className="flex flex-col px-9">
                    <div className="font-bold text-xl py-3">Saturday (Sept. 17th)</div>
                    <ul className="flex flex-col list-disc pb-3">
                        <li>Open Ceremony​</li>
                        <li>Optional team building</li>
                        <li>Workshops</li>
                        <li>Remixing Begins</li>
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
                </div>
            </div>
        </section>
    );
}

export default ScheduleSection;