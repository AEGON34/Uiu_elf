// Import all webp images from ../assets/events/
const eventImages = import.meta.glob('../assets/events/*.webp', { eager: true });

const rawEventsData = [
  {
    "id": 1,
    "title": "Balu River Trip",
    "date": "2022-07-26",
    "time": "TBA",
    "venue": "Balu River",
    "category": "Tour",
    "details": "A refreshing boat trip organized for the core panel and new recruits to foster camaraderie and team spirit.",
    "image": "../assets/events/Balu_River_Trip_26_Jul_2022.webp",
    "status": "Past"
  },
  {
    "id": 2,
    "title": "Seminar: Open Innovation in Entrepreneurship",
    "date": "2022-07-30",
    "time": "2:00 PM",
    "venue": "UIU Multipurpose Hall",
    "category": "Seminar",
    "details": "Seminar on circular economy featuring visiting professors Dr. Mateusz Molasy & Dr. Anna Wozna from Wroclaw University of Science and Technology, Poland.",
    "image": "../assets/events/Seminar_Open_Innovation_in_Entrepreneurship_30_Jul_2022.webp",
    "status": "Past"
  },
  {
    "id": 3,
    "title": "Seminar: IELTS Tricks and Techniques",
    "date": "2022-09-14",
    "time": "4:00 PM",
    "venue": "UIU Auditorium",
    "category": "Seminar",
    "details": "Highly attended seminar offering critical tips for IELTS preparation with Ms. Munzereen Shahid (Chief Instructor, 10 Minute School).",
    "image": "../assets/events/Seminar_IELTS_Tricks_and_Techniques_14_Sep_2022.webp",
    "status": "Past"
  },
  {
    "id": 4,
    "title": "21st Century Competencies for Telecom Industry",
    "date": "2022-10-23",
    "time": "2:30 PM",
    "venue": "UIU Multipurpose Hall Basement",
    "category": "Seminar",
    "details": "Featuring Grameenphone Ltd. Keynote by Mr. Syed Tanvir Husain (CHRO, Grameenphone). Included a session by GP Academy and e-certification.",
    "image": "../assets/events/Seminar_21st_Century_Competencies_Telecom_Industry_23_Oct_2022.webp",
    "status": "Past"
  },
  {
    "id": 5,
    "title": "Meet & Greet with Rafsan Sabab",
    "date": "2022-11-08",
    "time": "3:00 PM",
    "venue": "UIU Playground",
    "category": "Event",
    "details": "A fun, jest-filled session with the famous content creator Rafsan Sabab, discussing cricket, the World Cup, and entertainment.",
    "image": "../assets/events/Meet_and_Greet_with_Rafsan_Sabab_08_Nov_2022.webp",
    "status": "Past"
  },
  {
    "id": 6,
    "title": "FBHRO-UIU 5th HR Convention 2022",
    "date": "2022-11-25",
    "time": "9:00 AM",
    "venue": "UIU Multipurpose Hall",
    "category": "Volunteering",
    "details": "UIUELF represented the university as the volunteering partner for this prestigious national convention organized by the Federation of Bangladesh Human Resource Organizations.",
    "image": "../assets/events/FBHRO_UIU_5th_HR_Convention_2022_25_Nov_2022.webp",
    "status": "Past"
  },
  {
    "id": 7,
    "title": "Augmedix Talent Hunt Session",
    "date": "2023-02-13",
    "time": "TBA",
    "venue": "UIU Campus",
    "category": "Career Session",
    "details": "A recruitment session where the HR team of Augmedix Bangladesh scouted for potential talent among UIU students. Keynote: Mr. Risalat Zabeer.",
    "image": "../assets/events/Augmedix_Talent_Hunt_Session_13_Feb_2023.webp",
    "status": "Past"
  },
  {
    "id": 8,
    "title": "CAREERtalk at United International University",
    "date": "2023-06-21",
    "time": "11:00 AM",
    "venue": "UIU Multipurpose Hall",
    "category": "Seminar",
    "details": "Jointly organized with UIU Accounting & HR Forums. Keynote Speaker: Mr. Chowdhury Moinul Islam (DMD, BRAC Bank Limited).",
    "image": "../assets/events/CAREERtalk_at_United_International_University_21_Jun_2023.webp",
    "status": "Past"
  },
  {
    "id": 9,
    "title": "English Elegance Seminar",
    "date": "2023-08-05",
    "time": "3:00 PM",
    "venue": "UIU Multipurpose Hall",
    "category": "Seminar",
    "details": "A premium seminar organized under the DCCSA to inspire students towards corporate elegance. Keynote Speaker: Mr. Ghulam Sumdany Don.",
    "image": "../assets/events/English_Elegance_Seminar_05_Aug_2023.webp",
    "status": "Past"
  },
  {
    "id": 10,
    "title": "Rise Above All 2023 (Volunteering)",
    "date": "2023-08-25",
    "time": "TBA",
    "venue": "KIB Complex",
    "category": "Volunteering",
    "details": "UIUELF served as the official volunteering partner for the largest public speaking event in Bangladesh, hosted by Don Sumdany and powered by Daraz.",
    "image": "../assets/events/Rise_Above_All_2023_Volunteering_25_Aug_2023.webp",
    "status": "Past"
  },
  {
    "id": 11,
    "title": "UIU Vagabonds Tour (Rangamati)",
    "date": "2023-09-16",
    "time": "TBA",
    "venue": "Rangamati",
    "category": "Tour",
    "details": "A 3-day adventure into the mountains and lakes of Rangamati. The tour focused on strengthening the bond between the core panel and general members.",
    "image": "../assets/events/UIU_Vagabonds_Tour_Rangamati_16_Sep_2023.webp",
    "status": "Past"
  },
  {
    "id": 12,
    "title": "UIUELF 10th Anniversary Celebration",
    "date": "2023-09-20",
    "time": "TBA",
    "venue": "UIU Campus",
    "category": "Celebration",
    "details": "A milestone event celebrating a decade of excellence (2013–2023) and honoring the forward-looking minds who founded the forum.",
    "image": "../assets/events/UIUELF_10th_Anniversary_Celebration_20_Sep_2023.webp",
    "status": "Past"
  },
  {
    "id": 13,
    "title": "Design Your Career (Guest Participation)",
    "date": "2023-09-29",
    "time": "TBA",
    "venue": "External",
    "category": "Seminar",
    "details": "UIUELF members attended as guests to a panel discussion regarding PhD programs and career design hosted by BSPUA, featuring Ghulam Sumdany Don.",
    "image": "../assets/events/Design_Your_Career_Guest_Participation_29_Sep_2023.webp",
    "status": "Past"
  },
  {
    "id": 14,
    "title": "Fall 2023 Orientation Programme",
    "date": "2023-10-08",
    "time": "TBA",
    "venue": "UIU Auditorium",
    "category": "Orientation",
    "details": "Marking the highest recruitment of 2023, this grand orientation celebrated new beginnings with Guest Ms. Zohara Nazneen (Deputy Director, DCCSA). The event featured a cake-cutting ceremony by 'Bake and Cheese' and honored outstanding members with certificates.",
    "image": "../assets/events/Fall_2023_Orientation_Programme_08_Oct_2023.webp",
    "status": "Past"
  },
  {
    "id": 15,
    "title": "Seminar: AIs and AIoTs for English Communication",
    "date": "2023-12-29",
    "time": "8:00 PM",
    "venue": "Zoom (Online)",
    "category": "Seminar",
    "details": "International webinar with Dr. Muthmainnah from Indonesia, dissecting the intersection of Artificial Intelligence, IoT, and language education.",
    "image": "../assets/events/Seminar_AIs_and_AIoTs_for_English_Communication_29_Dec_2023.webp",
    "status": "Past"
  },
  {
    "id": 16,
    "title": "Commanding The Stage: Crafting Confidence",
    "date": "2024-02-17",
    "time": "12:00 PM",
    "venue": "UIU Smart Room 126",
    "category": "Seminar",
    "details": "A dynamic seminar on public speaking by Mohammad Aman Ullah (Founder, English Olympiad), sharing expertise in entrepreneurship and communication.",
    "image": "../assets/events/Commanding_The_Stage_Crafting_Confidence_17_Feb_2024.webp",
    "status": "Past"
  },
  {
    "id": 17,
    "title": "Unveiling Opportunities: Mastering the Art of CV Writing",
    "date": "2024-03-20",
    "time": "1:30 PM",
    "venue": "UIU Smart Room 126",
    "category": "Workshop",
    "details": "A career-focused workshop by Ms. Kirsten Gudgeon providing insights into crafting standout CVs that open doors to job opportunities.",
    "image": "../assets/events/Unveiling_Opportunities_Mastering_the_Art_of_CV_Writing_20_Mar_2024.webp",
    "status": "Past"
  },
  {
    "id": 18,
    "title": "Noor E Ramadan IFTAR FEAST",
    "date": "2024-03-24",
    "time": "4:30 PM",
    "venue": "UIU Cafeteria",
    "category": "Event",
    "details": "Titled 'Sharing Ramadan Joy amongst All'. Gifts were distributed to UIU security personnel as a token of gratitude during this event.",
    "image": "../assets/events/Noor_E_Ramadan_IFTAR_FEAST_24_Mar_2024.webp",
    "status": "Past"
  },
  {
    "id": 19,
    "title": "UIUELF Daylong Tour",
    "date": "2024-04-18",
    "time": "7:30 AM",
    "venue": "RASS Resort, Gazipur",
    "category": "Tour",
    "details": "An escape from city life with swimming, boating, and sports. A day filled with fun activities and relaxation at the picturesque RASS Resort.",
    "image": "../assets/events/Daylong_Tour_RASS_Resort_18_Apr_2024.webp",
    "status": "Past"
  },
  {
    "id": 20,
    "title": "PTE Strategy Workshop",
    "date": "2024-04-24",
    "time": "3:15 PM",
    "venue": "Room 126",
    "category": "Workshop",
    "details": "Organized with CIAC & SIAS. Speaker Ibrahim M. Nayeemul Karim (Head of ESL, ACE PTE) discussed strategies for the Pearson Test of English.",
    "image": "../assets/events/PTE_Workshop_with_CIAC_and_SIAS_24_Apr_2024.webp",
    "status": "Past"
  },
  {
    "id": 21,
    "title": "IDP Education Roadshow",
    "date": "2024-07-07",
    "time": "11:00 AM",
    "venue": "UIU Lobby (Level 1)",
    "category": "Event",
    "details": "A massive roadshow connecting students with top-ranked universities from Canada, USA, UK, and Australia for Masters & PhD programs.",
    "image": "../assets/events/IDP_Education_Roadshow_07_Jul_2024.webp",
    "status": "Past"
  },
  {
    "id": 22,
    "title": "Workshop on Speak Bold",
    "date": "2024-07-10",
    "time": "TBA",
    "venue": "Smart Room 126",
    "category": "Workshop",
    "details": "Titled 'Turning Stage Fright into Confidence', this session by Ms. Kirsten Gudgeon addressed body language, nervousness, and practical speaking exercises.",
    "image": "../assets/events/Workshop_on_Speak_Bold_10_Jul_2024.webp",
    "status": "Past"
  },
  {
    "id": 23,
    "title": "Presentation Champs – Season 1",
    "type": "featured",
    "date": "2024-09-27",
    "time": "10:00 AM",
    "venue": "UIU Smart Room 126 & Multipurpose Hall",
    "category": "Competition",
    "details": "The inaugural season of the presentation battle featuring 57 teams. Powered by Global Study and Co-Sponsored by Bongo, this event marked the beginning of a new legacy in public speaking at UIU.",
    "image": "../assets/events/Presentation_Champs_Season_1_27_Sep_2024.webp",
    "status": "Past"
  },
  {
    "id": 24,
    "title": "Mastering Storytelling Workshop",
    "date": "2024-12-07",
    "time": "2:30 PM",
    "venue": "UIU Multipurpose Hall",
    "category": "Workshop",
    "details": "An advanced workshop for aspiring storytellers facilitated by Dr. Mario Hirstain. Participants learned to weave ideas and emotions into compelling narratives.",
    "image": "../assets/events/Mastering_Storytelling_Workshop_07_Dec_2024.webp",
    "status": "Past"
  },
  {
    "id": 25,
    "title": "Rehmat-e-Iftar: A Gathering of Gratitude & Joy",
    "date": "2025-03-19",
    "time": "4:30 PM",
    "venue": "UIU Permanent Campus, Cafeteria Neptune",
    "category": "Event",
    "details": "A special gathering to celebrate the spirit of Ramadan. Members came together to break their fast, reflecting on patience, empathy, and community bonding.",
    "image": "../assets/events/Rehmat_e_Iftar_Gathering_of_Gratitude_and_Joy_19_Mar_2025.webp",
    "status": "Past"
  },
  {
    "id": 26,
    "title": "The July 36 Challenge: A Linguistic Uprising",
    "type": "featured",
    "date": "2025-08-10",
    "time": "TBA",
    "venue": "UIU Multipurpose Hall",
    "category": "Competition",
    "details": "An Intra-University Quiz Competition inspired by the spirit of the July 2024 uprising. Categories included Synonyms, Spelling Bee, and General Knowledge.",
    "image": "../assets/events/The_July_36_Challenge_A_Linguistic_Uprising_10_Aug_2025.webp",
    "status": "Past"
  },
  {
    "id": 27,
    "title": "Speak with Impact: Mastering Professional Communication",
    "date": "2025-09-28",
    "time": "TBA",
    "venue": "Seminar Room 126",
    "category": "Workshop",
    "details": "Hands-on training for professional communication with Interactive Cares. Keynote speaker Sadia Islam Promi (Trainer, 13+ years exp) shared insights on workplace communication.",
    "image": "../assets/events/Speak_with_Impact_Mastering_Professional_Communication_28_Sep_2025.webp",
    "status": "Past"
  },
  {
    "id": 28,
    "title": "Summer 2025 Orientation",
    "date": "2025-10-07",
    "time": "3:00 PM",
    "venue": "UIU Multipurpose Hall",
    "category": "Orientation",
    "details": "Official welcome session for new members to step into a world of confidence. The session introduced members to the club's culture and the motto 'Break fear and be confident'.",
    "image": "../assets/events/Summer_2025_Orientation_07_Oct_2025.webp",
    "status": "Past"
  },
  {
    "id": 29,
    "title": "Masterclass on English Communication & Public Speaking",
    "date": "2025-10-15",
    "time": "TBA",
    "venue": "UIU Multipurpose Hall",
    "category": "Workshop",
    "details": "Jointly organized with the UIU Entrepreneur Development Forum and 'Get Set Go'. The session focused on enhancing fluency, engaging audiences, and public speaking techniques through interactive games.",
    "image": "../assets/events/Masterclass_on_English_Communication_and_Public_Speaking_15_Oct_2025.webp",
    "status": "Past"
  },
  {
    "id": 30,
    "title": "Presentation Champs – Season II",
    "type": "featured",
    "date": "2026-01-16",
    "time": "10:00 AM",
    "venue": "UIU Multipurpose Hall",
    "category": "Competition",
    "details": "An Inter-University Presentation Competition designed to identify confident speakers. Features three rounds: Elevator Pitch, Extempore Team Presentation, and Pecha-Kucha Grand Finale. Powered by TCL Global.",
    "image": "../assets/events/Presentation_Champs_Season_II_16_Jan_2026.webp",
    "registrationStart": "2026-01-03",
    "registrationEnd": "2026-01-14",
    "registrationTime": "10:00 AM - 4:30 PM (Campus)\n24 Hours (Online)",
    "registrationVenue": "UIU Campus & Online"
  },
  {
    "id": 31,
    "title": "Member Recruitment | Spring '26",
    "date": "2026-03-15",
    "time": "TBA",
    "venue": "UIU Campus",
    "category": "recruitment",
    "details": "Are you ready to transform your communication skills and build a professional career? The UIU English Language Forum (UIU ELF) is back with its Member Recruitment for the Spring 2026 trimester!\n\nUIU ELF is a dynamic forum for students who are eager to improve their English language proficiency and work toward significant career development. This is your chance to join a community that helps you overcome hesitation and find your voice.\n\nWhy UIU ELF?\n● Improve English proficiency and public speaking.\n● Focus on career development and professional growth.\n● Gain confidence through diverse events and workshops.\n● Become part of UIU's most active student forums.",
    "image": "../assets/events/Recruitment_Spring_'26.webp",
    "registrationStart": "2026-02-28",
    "registrationEnd": "2026-03-03",
    "registrationTime": "10:00 AM - 4:00 PM (Campus)\n24 Hours (Online)",
    "registrationVenue": "Booth No. 08, Ground Floor (Campus) & Online"
  },
  {
    "id": 32,
    "title": "Nafahat-E-Ramadan: A Journey of Faith and Fellowship",
    "date": "2026-03-10",
    "time": "5:00 PM onwards",
    "venue": "UIU Cafeteria",
    "category": "Event",
    "details": "As the sacred spirit of Ramadan draws near, it brings a time for reflection, gratitude, and togetherness. To celebrate this blessed month, the UIU English Language Forum is delighted to invite you to \"Nafahat-E-Ramadan\"—an evening dedicated to faith, fellowship, and the joy of breaking fast together. \n\nBeyond the daily academic hustle, let’s gather to strengthen our bonds and share the essence of Ramadan over a hearty meal. We look forward to welcoming you to an evening filled with warmth and community spirit. \n\nHadiya: 400 BDT",
    "image": "../assets/events/Nafahat_E_Ramadan_2026.webp",
    "registrationStart": "2026-02-28",
    "registrationEnd": "2026-03-03",
    "registrationTime": "10:00 AM - 4:30 PM (Campus)\n24 Hours (Online)",
    "registrationVenue": "Ground Floor, Booth No. 8"
  },
]

const getEventStatus = (event) => {
  const now = new Date();
  const eventDate = new Date(event.date);
  
  // Set event end time to end of day to include the day itself
  eventDate.setHours(23, 59, 59, 999);

  if (now > eventDate) {
    return "Past";
  }

  // If no registration dates are provided, fallback to basic Upcoming/Past logic
  if (!event.registrationStart || !event.registrationEnd) {
    return "Upcoming"; 
  }

  const regStart = new Date(event.registrationStart);
  const regEnd = new Date(event.registrationEnd);
  
  // Set regEnd to end of day
  regEnd.setHours(23, 59, 59, 999);

  if (now < regStart) {
    return "Upcoming (Registration not started)";
  } else if (now >= regStart && now <= regEnd) {
    return "Ongoing (Registration Open)";
  } else {
    // Registration ended but event hasn't happened yet
    return "Ongoing (Registration Closed)";
  }
};

export const eventsData = rawEventsData.map(event => ({
  ...event,
  image: eventImages[event.image]?.default || event.image,
  status: getEventStatus(event)
}));

