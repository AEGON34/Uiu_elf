import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
import { eventsData } from '../data/eventsData';
import RecruitmentClosed from '../components/RecruitmentClosed';
import JoinUsHero from '../components/joinUs/JoinUsHero';
import JoinUsBenefits from '../components/joinUs/JoinUsBenefits';
import JoinUsForm from '../components/joinUs/JoinUsForm';

const JoinUs = () => {
  const activeRecruitmentEvent = eventsData.find(e => 
    e.category === 'recruitment' && 
    e.status === 'Ongoing (Registration Open)'
  );

  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    semester: '',
    whyJoin: '',
    experience: '',
    tShirtSize: '',
    photo: null,
    skills: [],
    paymentMethod: '',
    transactionId: '',
    socialsJoined: '',
    gender: '',
    bloodGroup: '',
    presentAddress: '',
    facebookProfile: '',
  });

  // const [isSubmitted, setIsSubmitted] = useState(false); // Removed as we use Swal now

  useEffect(() => {
    document.title = 'UIUELF | Join Us';
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else if (type === 'checkbox') {
      // Handle skills checkbox array
      setFormData(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const activeRecruitmentEvent = eventsData.find(e => e.category === 'recruitment' && e.status === 'Ongoing (Registration Open)') 
                                || eventsData.find(e => e.category === 'recruitment');
    
    const eventName = activeRecruitmentEvent ? activeRecruitmentEvent.title : `Recruitment_${new Date().getFullYear()}`;

    Swal.fire({
      title: 'Submitting Application...',
      text: 'Please wait while we process your application.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const submissionData = {
        ...formData,
        eventName: eventName, 
      };

      // FIX 1: Format the photo exactly how the Apps Script expects it
      if (formData.photo) {
        const file = formData.photo;
        const reader = new FileReader();
        
        const photoPromise = new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });

        reader.readAsDataURL(file);
        const base64String = await photoPromise;
        
        // Send the FULL string under the key 'photo' (Do not split it)
        submissionData.photo = base64String; 
      } else {
         delete submissionData.photo;
      }

      const SCRIPT_URL = import.meta.env.VITE_RECRUITMENT_APP_SCRIPT_URL;
      
      if (!SCRIPT_URL) {
        throw new Error('Script URL is not configured in the code.');
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        // FIX 2: Force text/plain to bypass strict browser CORS preflight blocks
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      // FIX 3: Check for both 'result' and 'status' to cover all bases
      if (result.result === 'success' || result.status === 'success') {
        Swal.fire({
          title: 'Application Submitted!',
          text: `Thank you for your interest in joining UIUELF for ${eventName}. We have received your application and will contact you shortly via messenger group with further instructions.`,
          icon: 'success',
          confirmButtonText: 'Back to Home',
          confirmButtonColor: '#ec4622',
        }).then((alertResult) => {
          if (alertResult.isConfirmed) {
            window.location.href = '/';
          }
        });
        
        // Reset form
        setFormData({
            name: '',
            studentId: '',
            email: '',
            phone: '',
            department: '',
            semester: '',
            whyJoin: '',
            experience: '',
            tShirtSize: '',
            photo: null,
            skills: [],
            paymentMethod: '',
            transactionId: '',
            socialsJoined: '',
            gender: '',
            bloodGroup: '',
            presentAddress: '',
            facebookProfile: '',
        });
      } else {
        throw new Error(result.message || result.error || 'Unknown error occurred');
      }

    } catch (error) {
      console.error('Submission Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'There was an error submitting your application: ' + error.message,
        confirmButtonColor: '#ec4622'
      });
    }
  };

  const skillsOptions = [
    'Public Speaking',
    'Writing Articles / Blogs',
    'Communication',
    'Research',
    'MS Office [Word, Excel, PowerPoint]',
    'Graphic Design [Canva, Photoshop]',
    'Digital Marketing',
    'Photography',
    'Videography',
    'Volunteering',
    'Event Management',
    'Decoration',
    'Recitation / Singing / Dancing',
    'Acting / Drama',
  ];

  const departments = [
    'Bachelor of Business Administration (BBA)',
    'BBA in Accounting and Information Systems (BBA in AIS)',
    'Bachelor of Science in Economics',
    'B.Sc. in Civil Engineering (CE)',
    'B.Sc. in Computer Science and Engineering (CSE)',
    'B.Sc. in Data Science (BSDS)',
    'B.Sc. in Electrical and Electronic Engineering (EEE)',
    'BSS in Environment and Development Studies program (BSSEDS)',
    'BSS in Media Studies and Journalism (MSJ)',
    'BA in English',
    'Bachelor of Pharmacy (B. Pharm.)',
    'Bachelor of Science in Biotechnology and Genetic Engineering (BSBGE)',
  ];

  if (!activeRecruitmentEvent) {
    return <RecruitmentClosed />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <JoinUsHero activeRecruitmentEvent={activeRecruitmentEvent} />

      {/* Benefits Section */}
      <JoinUsBenefits />

      {/* Application Form Section */}
      <Fade triggerOnce duration={2000}>
        <JoinUsForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          departments={departments}
          skillsOptions={skillsOptions}
        />
      </Fade>
    </div>
  );
};

export default JoinUs;
