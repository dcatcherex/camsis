import ReactMarkdown from 'react-markdown';

function Coronavirus() {
  const markdownContent = ` ## Coronavirus (COVID-19) Policy Update

  - The global coronavirus pandemic has created an unprecedented situation, and our thoughts are with our participants and their families in these very challenging times. We hope you are all safe and well, and taking care of those around you.At present, CAMSIS Education remains fully operational, and the summer programmes are proceeding as planned. We are working closely with our host colleges to ensure that all participants and staff are kept as safe as possible whilst following UK official advice and legislation.We continue to accept enrolments and look forward to welcoming all our participants to Cambridge this summer.Remember that our team remains on hand to provide assistance and answer any questions you may have. Please feel free to contact us at ****[info@camsiseducation.com](mailto:info@camsiseducation.com) and we would be delighted to help.**Note:** The UK government’s guidance surrounding Covid-19 is subject to change at short notice, which may result in updates from CAMSIS Education. For up to date guidance please visit the official UK Government Guidance [here.](https://www.gov.uk/guidance/travel-to-england-from-another-country-during-coronavirus-covid-19)For participants coming from a **[red list country](https://www.gov.uk/guidance/red-list-of-countries-and-territories):** No. If you are required to self-isolate or quarantine in advance of your arrival – this is something you must organise independently. Unfortunately, we will not be able to provide accommodation for this.
  1. **COVID tests**
  
  Government regulations in the UK outline that from 11th February 2022 all testing measures will be removed for fully vaccinated travellers coming into the country. If you are fully vaccinated and do not have any COVID symptoms, you will therefore not need to be tested before you travel or join your course. It’s also important to note that all under 18s will be treated as fully vaccinated. Therefore participants joining our 14-18 year old programmes will not need to be tested whether they are vaccinated or not. Visit the UK Government website [here](https://www.gov.uk/guidance/travel-to-england-from-another-country-during-coronavirus-covid-19) for more information on testing regulations for travellers.
  
  2. **Coronavirus cancellation policy**
  
  If a participant from a **[red list country](https://www.gov.uk/guidance/red-list-of-countries-and-territories)** is due to travel within 28 days of the starting date but is unable (due to the mandatory quarantine), they will be eligible for one of three options:
  
  1. Receive a full refund, including the usually non-refundable deposit *(not eligible until 28 days before the course’s start date)*.
  2. Defer your place to summer 2023.
  
  Participants based in the UK or arriving from countries not on the red list are expected to attend as planned, and our standard
  
  **terms and conditions** apply if cancelling.If you simply wish to amend your programme dates or subject, please send an email to [info@camsiseducation.com](mailto:info@camsiseducation.com) outlining the changes, and we will accommodate this where possible.
  
  3. **Measures take to keep participants safe during the programme**
  
  The safety and wellbeing of our staff and participants is our highest priority. We are constantly monitoring the latest advice and acting in accordance with this to complement our existing set of robust policies and procedures to ensure participant welfare. The following points will give you an idea of the measurements we have in place for the residential programme.
  
  - On-site Policy
      - Face masks are available to all students and staff.
      - The college does regular deep cleaning of social spaces.
      - Hand sanitiser available across campuses.
  - In the event of a positive test, we will follow the steps advised by the UK government:
      - Mandatory quarantine in a bedroom.
      - All meals delivered to the bedroom.
      - Immediate quarantine and testing of others who have been in contact with the person.
      - Anyone who returns a negative test will not have to continue quarantine.
  
  We also have established relationships with local health care professionals in addition to access to world-leading hospitals and health advice.You might also want to read about the Covid-19 Risk Assessment.If you have any further questions**,** please do not hesitate to contact us at
  
  [info@camsiseducation.com](mailto:info@camsiseducation.com)`;

  return (
    <div className="p-10 bg-gray-100">
        <ReactMarkdown children={markdownContent} />;
    </div>
  );
}

export default Coronavirus;