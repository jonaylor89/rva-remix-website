
const rva_header = require('../assets/rva_remix_header.png');

const HeaderSection = () => {
  return (
    <section id="header">
      <div className="flex justify-center flex-col lg:pb-5">
        <div className="px-7 mx-7 lg:mx-64 lg:px-64 lg:pt-42">
          <img src={rva_header} alt="RVA REMIX COMPETITION" />
        </div>
        <p className="text-center px-5 lg:px-72">
          RVA Remix Competition is an in-person remix competition for music creators that’s located in Richmond, Virginia. The goal of the competition is to give music creators a space to showcase their creative work, network with other music creators, and compete with one another for prizes.
        </p>
      </div>
    </section>
  );
}

export default HeaderSection;