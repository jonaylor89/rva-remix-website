
const PrizesSection = () => {
    return (
        <section>
            <div className="flex flex-col items-center py-5">
                <div className="font-bold text-4xl pb-5">
                    PRIZES
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col items-center py-6">
                        <div className="font-bold text-xl">1ST PLACE</div>
                        <div>TBD</div>
                    </div>
                    <div className="flex flex-col items-center py-6">
                        <div className="font-bold text-xl">2ND PLACE</div>
                        <div>TBD</div>
                    </div>
                    <div className="flex flex-col items-center py-6">
                        <div className="font-bold text-xl">3RD PLACE</div>
                        <div>TDB</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrizesSection;