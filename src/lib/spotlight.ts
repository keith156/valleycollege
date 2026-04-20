export interface SpotlightAlumnus {
  id: string;
  name: string;
  period: string;
  profession: string;
  workStation: string;
  imageUrl: string;
}

// Built from the image filenames in public/spotlight/
// Filename convention: [period]_Name_Profession_WorkStation.ext
const spotlightData: SpotlightAlumnus[] = [
  {
    id: '1',
    name: 'Justus Rukundo',
    period: '2003 - 2008',
    profession: 'Electrical Engineer',
    workStation: 'ATC',
    imageUrl: '/spotlight/[2003 - 2008]_Justus Rukundo_Electrical Engineer_ATC.JPG',
  },
  {
    id: '2',
    name: 'Atuhaire Phionah',
    period: '2004 - 2005',
    profession: 'Medical Laboratory Technologist',
    workStation: 'Uganda Virus Research Institute Entebbe',
    imageUrl: '/spotlight/[2004 - 2005]_ATUHAIRE PHIONAH_Medical Laboratory technologist_Uganda Virus Research institute Entebbe.jpg',
  },
  {
    id: '3',
    name: 'Alex Ndyabakira',
    period: '2004-2005',
    profession: 'Medical Doctor',
    workStation: 'Kampala Capital City Authority',
    imageUrl: '/spotlight/[2004-2005]_Alex Ndyabakira_Medical Doctor_Kampala Capital City Authority.png',
  },
  {
    id: '4',
    name: 'Arinaitwe Robert',
    period: '2004-2005',
    profession: 'Lawyer',
    workStation: 'State Attorney, Office of Director of Public Prosecutions',
    imageUrl: '/spotlight/[2004-2005]_Arinaitwe Robert_Lawyer_State Attorney, Office of Director of Public Prosecutions.jpg',
  },
  {
    id: '5',
    name: 'Counsel Pearl Atukunda',
    period: '2004-2005',
    profession: 'Lawyer-UN',
    workStation: 'United Nations',
    imageUrl: '/spotlight/[2004-2005]_Counsel Pearl Atukunda_Lawyer-UN_United Nations.png',
  },
  {
    id: '6',
    name: 'Eng. Moses Agaba (CEng)',
    period: '2004-2005',
    profession: 'Engineer - Head of Engineering & Production',
    workStation: 'Engineering Development and Innovation Centre (EDiC), Kampala Industrial & Business Park - Namanve',
    imageUrl: '/spotlight/[2004-2005]_Eng. Moses Agaba (CEng)_Engineer - Head of Engineering & Production_Engineering Development and Innovation Centre (EDiC), Kampala Industrial & Business Park - Namanve.JPG',
  },
  {
    id: '7',
    name: 'Kansiime Ibrahim',
    period: '2004-2005',
    profession: 'Accountant',
    workStation: 'URA',
    imageUrl: '/spotlight/[2004-2005]_Kansiime Ibrahim_Accountant_URA.jpg',
  },
  {
    id: '8',
    name: 'Birungi Sandra',
    period: '2004-2007, 2008',
    profession: 'Teacher [AI Evaluator]',
    workStation: 'Sama',
    imageUrl: '/spotlight/[2004-2007, 2008]_Birungi Sandra_Teacher [AI Evaluator]_Sama.jpg',
  },
  {
    id: '9',
    name: 'Hon. Kyinyamatama Juliet',
    period: '2004-2007',
    profession: 'W-MP',
    workStation: 'Rakai District',
    imageUrl: '/spotlight/[2004-2007]_Hon.Kyinyamatama Juliet_W-MP_Rakai District.png',
  },
  {
    id: '10',
    name: 'Davis Tukamushaba',
    period: '2006-2007',
    profession: 'Mechanical Engineer',
    workStation: 'Ministry of Works & Transport',
    imageUrl: '/spotlight/[2006-2007]_Davis Tukamushaba_Mechanical Engineer_Ministry of Works & Transport.jpeg',
  },
  {
    id: '11',
    name: 'Heather Lambert',
    period: '2006-2007',
    profession: 'Financial Advisor-Administrator',
    workStation: 'Old Mutual Insurance',
    imageUrl: '/spotlight/[2006-2007]_Heather Lambert_Financial Advisor-Administrator_Old mutual insurance.png',
  },
  {
    id: '12',
    name: 'Luka Layman',
    period: '2006-2007',
    profession: 'Branch Manager - African Trade Winds Ltd',
    workStation: 'Bundibugyo',
    imageUrl: '/spotlight/[2006-2007]_Luka Layman_Branch Manager- African Trade Winds Ltd_Bundibugyo.jpg',
  },
  {
    id: '13',
    name: 'Ndyamwesiga Stephen',
    period: '2006-2007',
    profession: 'Engineer',
    workStation: 'Kampala',
    imageUrl: '/spotlight/[2006-2007]_Ndyamwesiga stephen_Engineer_Kampala.jpg',
  },
  {
    id: '14',
    name: 'Nuwahumuza Mark',
    period: '2006-2007',
    profession: 'Consultant Sales Engineer',
    workStation: 'Epiroc Eastern Africa Limited',
    imageUrl: '/spotlight/[2006-2007]_Nuwahumuza Mark_Consultant Sales Engineer_Epiroc Eastern Africa Limited.jpg',
  },
  {
    id: '15',
    name: 'Taremwa Elias',
    period: '2006-2007',
    profession: 'Engineer + Business Man',
    workStation: 'Uplink Builders Limited',
    imageUrl: '/spotlight/[2006-2007]_Taremwa Elias_Engineer+Business Man_Uplink Builders Limited.jpg',
  },
  {
    id: '16',
    name: 'Kananura Keneth',
    period: '2007-2008',
    profession: 'Medical Doctor',
    workStation: 'Mbarara Regional Referral Hospital',
    imageUrl: '/spotlight/[2007-2008]_Kananura Keneth_Medical doctor_Mbarara Regional Referral Hospital.jpg',
  },
  {
    id: '17',
    name: 'Brian Mutungi',
    period: '2008-2009',
    profession: 'Clinical (Imaging) Applications Specialist',
    workStation: 'Siemens Healthineers-Uganda',
    imageUrl: '/spotlight/[2008-2009]_Brian Mutungi_Clinical(Imaging) Applications Specialist_Siemens Healthineers-Uganda.jpg',
  },
  {
    id: '18',
    name: 'Ezra Mugume',
    period: '2010 - 2011',
    profession: 'Business Consultant',
    workStation: 'Airtel Uganda Ltd',
    imageUrl: '/spotlight/[2010 - 2011]_Ezra Mugume_Business Consultant_Airtel Uganda Ltd.jpg',
  },
  {
    id: '19',
    name: 'Kamusiime Anatori',
    period: '2013-2016',
    profession: 'Lawyer',
    workStation: 'D. Kagarura Advocates and Solicitors, Kampala Road',
    imageUrl: '/spotlight/[2013-2016]_Kamusiime Anatori_Lawyer_D. Kagarura Advocates and Solicitors, Kampala road.jpg',
  },
];

export function getSpotlight(): SpotlightAlumnus[] {
  return spotlightData;
}
