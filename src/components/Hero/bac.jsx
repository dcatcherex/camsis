import certificate from "../../../src/assets/images/bac-certificate.jpg";
import certificate2 from "../../../src/assets/images/bac-oil-certificate1.jpg";
import certificate3 from "../../../src/assets/images/bac-oil-certificate2.jpg";
import baclogo from "../../../src/assets/images/bac-logo.png";


const Bac = () => {
  return (
    <div>
      <img className="my-4 sm:my-6 rounded-md mx-auto md:max-w-[200px]  " 
        src={baclogo}
        
        
        alt="" />
      <h2 className="text-2xl sm:text-4xl text-bold uppercase  mx-auto text-center leading-relaxed ">
        Our Awards and Accreditations
      </h2>
      <p>
        BAC was established by the UK’s Department of Education and the British
        Council in 1984 to oversee independent further and higher education in
        the UK. BAC is a registered charity and a not for profit organisation.
        They are full members of the European Association for Quality Assurance
        in Higher Education (ENQA) and the International Network for Quality
        Assurance Agencies in Higher Education (INQAAHE). BAC currently
        accredits more than 230 providers across 20 countries.
      </p>
      <p>
        All BAC accredited providers, CAMSIS Education included, are monitored
        and receive an interim visit within 12 months of accreditation so there
        is a regular review of the provider to ensure that it continues the high
        standards required ranging from teaching, administration, participant
        welfare, and facilities in order to maintain BAC accreditation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 ">
      <img className="my-4 sm:my-6 rounded-md border-[1px] border-slate-300" 
        src={certificate}  alt="" />
      <img className="my-4 sm:my-6 rounded-md border-[1px] border-slate-300" 
        src={certificate2}  alt="" />
      <img className="my-4 sm:my-6 rounded-md border-[1px] border-slate-300" 
        src={certificate3}  alt="" />
      </div>
    </div>
  );
};
export default Bac;
