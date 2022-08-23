
const money = require('../assets/money.png')

const PrizesSection = () => {
    return (
        <section id="prizes">
            <div className="bg-black flex flex-col items-center py-5 lg:mx-40">
                <div className="font-bold text-4xl pb-5 lg:font-black lg:text-5xl">
                    PRIZES
                </div>

                <img src={money} alt={'money'} width={200}/>

                <div className="flex flex-col lg:flex-row lg:justify-around">
                    <div className="flex flex-col items-center py-6 lg:px-20">
                        <div className="font-bold text-5xl text-center">1ST PLACE</div>
                        <div className="text-3xl hover:scale-125 hover:text-green-500">$300</div>
                        <div className="text-center">Prime slot for the RVA Remix Concert</div>
                    </div>
                    <div className="flex flex-col items-center py-6 lg:px-20">
                        <div className="font-bold text-5xl text-center">2ND PLACE</div>
                        <div className="text-3xl hover:scale-125 hover:text-green-500">$200</div>
                        <div className="text-center">Second slot for the RVA Remix Concert</div>
                    </div>
                    <div className="flex flex-col items-center py-6 lg:px-20">
                        <div className="font-bold text-5xl text-center">3RD PLACE</div>
                        <div className="text-3xl hover:scale-125 hover:text-green-500">$100</div>
                        <div className="text-center">Opening slot for the RVA Remix Concert</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrizesSection;