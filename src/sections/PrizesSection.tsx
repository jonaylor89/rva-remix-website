
const PrizesSection = () => {
    return (
        <section id="prizes">
            <div className="bg-black flex flex-col items-center py-5 lg:mx-40">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                    PRIZES
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-around">
                    <div className="flex flex-col items-center py-6 lg:px-24">
                        <div className="font-bold text-xl">1ST PLACE</div>
                        <div>TBD</div>
                    </div>
                    <div className="flex flex-col items-center py-6 lg:px-24">
                        <div className="font-bold text-xl">2ND PLACE</div>
                        <div>TBD</div>
                    </div>
                    <div className="flex flex-col items-center py-6 lg:px-24">
                        <div className="font-bold text-xl">3RD PLACE</div>
                        <div>TDB</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrizesSection;