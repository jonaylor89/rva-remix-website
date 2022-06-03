
const rva_header = require('../assets/rva_remix_header.png');

const HeaderSection = () => {
  return (
    <section id="header">
      <div className="flex justify-center flex-col pb-5">
        <img src={rva_header} alt="RVA REMIX COMPETITION" />
        <p className="text-center px-5">
          RVA Remix Competition is an in-person remix competition for music creators that’s located in Richmond, Virginia. The goal of the competition is to give music creators a space to showcase their creative work, network with other music creators, and compete with one another for prizes.
        </p>
      </div>
    </section>
  );
}

export default HeaderSection;