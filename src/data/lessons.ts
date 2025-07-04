export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  content: string;
  questions: Question[];
}

export const lessons: Lesson[] = [
  {
    id: 'civic-basics',
    title: 'Civic Engagement Basics',
    description: 'Learn the fundamentals of civic engagement and why it matters for community development.',
    duration: '15 min',
    difficulty: 'Beginner',
    topics: ['Civic Duty', 'Community', 'Democracy', 'Participation'],
    content: `
      <h2>What is Civic Engagement?</h2>
      <p>Civic engagement refers to the ways in which citizens participate in the life of a community to improve conditions for others or to help shape the community's future.</p>
      
      <h3>Why Does It Matter?</h3>
      <ul>
        <li><strong>Democratic Participation:</strong> It's the foundation of a healthy democracy</li>
        <li><strong>Community Building:</strong> Creates stronger, more connected communities</li>
        <li><strong>Social Change:</strong> Drives positive change at local and national levels</li>
        <li><strong>Personal Growth:</strong> Develops leadership and communication skills</li>
      </ul>
      
      <h3>Forms of Civic Engagement</h3>
      <p>Civic engagement can take many forms:</p>
      <ul>
        <li>Voting in elections</li>
        <li>Volunteering for community organizations</li>
        <li>Attending town halls and public meetings</li>
        <li>Advocating for causes you believe in</li>
        <li>Running for office</li>
        <li>Participating in community clean-up efforts</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'What is the primary purpose of civic engagement?',
        options: [
          'To make money for the community',
          'To participate in community life and improve conditions',
          'To criticize government officials',
          'To avoid paying taxes'
        ],
        correctAnswer: 1,
        explanation: 'Civic engagement is about participating in community life to improve conditions for others and help shape the community\'s future.'
      },
      {
        id: 'q2',
        question: 'Which of the following is NOT mentioned as a form of civic engagement?',
        options: [
          'Voting in elections',
          'Shopping at local businesses',
          'Volunteering for community organizations',
          'Attending town halls'
        ],
        correctAnswer: 1,
        explanation: 'While shopping locally can support the community economically, it\'s not specifically mentioned as a form of civic engagement in this lesson.'
      }
    ]
  },
  {
    id: 'local-government',
    title: 'Understanding Local Government',
    description: 'Explore how local government works and how you can get involved in local decision-making.',
    duration: '20 min',
    difficulty: 'Beginner',
    topics: ['Local Politics', 'City Council', 'Mayor', 'Public Services'],
    content: `
      <h2>Structure of Local Government</h2>
      <p>Local government is the level of government closest to citizens, responsible for many services that directly impact daily life.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li><strong>Mayor:</strong> The chief executive of the city</li>
        <li><strong>City Council:</strong> Legislative body that makes local laws</li>
        <li><strong>City Manager:</strong> Professional administrator who implements policies</li>
        <li><strong>Department Heads:</strong> Oversee specific services like police, fire, parks</li>
      </ul>
      
      <h3>Local Government Services</h3>
      <p>Local governments provide essential services including:</p>
      <ul>
        <li>Police and fire protection</li>
        <li>Water and sewer systems</li>
        <li>Parks and recreation</li>
        <li>Local roads and transportation</li>
        <li>Zoning and planning</li>
        <li>Libraries and community centers</li>
      </ul>
      
      <h3>Getting Involved</h3>
      <p>You can participate in local government by:</p>
      <ul>
        <li>Attending city council meetings</li>
        <li>Speaking during public comment periods</li>
        <li>Serving on boards and commissions</li>
        <li>Running for local office</li>
        <li>Participating in town halls</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'Who is typically the chief executive of a city?',
        options: ['City Manager', 'Mayor', 'City Council President', 'Police Chief'],
        correctAnswer: 1,
        explanation: 'The Mayor is typically the chief executive of a city, serving as the primary leader and representative.'
      },
      {
        id: 'q2',
        question: 'Which service is typically NOT provided by local government?',
        options: ['Police protection', 'National defense', 'Parks and recreation', 'Water systems'],
        correctAnswer: 1,
        explanation: 'National defense is provided by the federal government, not local government. Local governments focus on community-level services.'
      }
    ]
  },
  {
    id: 'community-organizing',
    title: 'Community Organizing Strategies',
    description: 'Learn effective strategies for organizing your community around important issues.',
    duration: '25 min',
    difficulty: 'Intermediate',
    topics: ['Organizing', 'Advocacy', 'Coalition Building', 'Campaign Strategy'],
    content: `
      <h2>Community Organizing Fundamentals</h2>
      <p>Community organizing is the process of building power to create change by bringing people together around shared concerns.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li><strong>Start with Relationships:</strong> Build trust and connections first</li>
        <li><strong>Listen Before You Lead:</strong> Understand community needs and concerns</li>
        <li><strong>Power Analysis:</strong> Identify who has decision-making authority</li>
        <li><strong>Strategic Thinking:</strong> Plan campaigns with clear goals and tactics</li>
      </ul>
      
      <h3>The Organizing Process</h3>
      <ol>
        <li><strong>Issue Identification:</strong> What problem needs solving?</li>
        <li><strong>Research:</strong> Gather facts and understand the landscape</li>
        <li><strong>Coalition Building:</strong> Find allies and build a base</li>
        <li><strong>Strategy Development:</strong> Plan your approach</li>
        <li><strong>Action:</strong> Implement your campaign</li>
        <li><strong>Evaluation:</strong> Learn from results and adjust</li>
      </ol>
      
      <h3>Effective Tactics</h3>
      <ul>
        <li>One-on-one conversations</li>
        <li>House parties and community meetings</li>
        <li>Petition drives</li>
        <li>Public demonstrations</li>
        <li>Media campaigns</li>
        <li>Direct meetings with officials</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'What should be the first step in community organizing?',
        options: [
          'Planning a protest',
          'Building relationships and trust',
          'Writing a petition',
          'Meeting with officials'
        ],
        correctAnswer: 1,
        explanation: 'Building relationships and trust is fundamental to effective community organizing. Without strong relationships, it\'s difficult to mobilize people for change.'
      },
      {
        id: 'q2',
        question: 'What is a "power analysis" in community organizing?',
        options: [
          'Measuring community energy levels',
          'Identifying who has decision-making authority',
          'Calculating the cost of campaigns',
          'Analyzing social media engagement'
        ],
        correctAnswer: 1,
        explanation: 'Power analysis involves identifying who has the authority to make decisions about the issues you care about, which helps you target your advocacy efforts effectively.'
      }
    ]
  },
  {
    id: 'digital-basics',
    title: 'Digital Literacy Fundamentals',
    description: 'Master the essential digital skills needed in today\'s connected world.',
    duration: '20 min',
    difficulty: 'Beginner',
    topics: ['Digital Skills', 'Internet Basics', 'Computer Skills', 'Online Safety'],
    content: `
      <h2>What is Digital Literacy?</h2>
      <p>Digital literacy refers to the ability to use, understand, and create digital technology effectively and responsibly.</p>
      
      <h3>Core Components of Digital Literacy</h3>
      <ul>
        <li><strong>Technical Skills:</strong> Operating devices and software</li>
        <li><strong>Information Literacy:</strong> Finding, evaluating, and using information</li>
        <li><strong>Communication Skills:</strong> Interacting effectively online</li>
        <li><strong>Digital Citizenship:</strong> Understanding rights and responsibilities online</li>
      </ul>
      
      <h3>Essential Digital Skills</h3>
      <p>Key skills every digital citizen should master:</p>
      <ul>
        <li>Basic computer operations (keyboard, mouse, touchscreen)</li>
        <li>Internet browsing and search techniques</li>
        <li>Email communication</li>
        <li>File management and organization</li>
        <li>Understanding of privacy and security settings</li>
        <li>Social media awareness and etiquette</li>
      </ul>
      
      <h3>Why Digital Literacy Matters</h3>
      <ul>
        <li>Access to information and services</li>
        <li>Employment opportunities</li>
        <li>Social connection and communication</li>
        <li>Civic participation in the digital age</li>
        <li>Personal safety and security online</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'What is digital literacy?',
        options: [
          'The ability to read books on electronic devices',
          'The ability to use, understand, and create digital technology effectively',
          'The ability to type quickly on a keyboard',
          'The ability to fix computer hardware'
        ],
        correctAnswer: 1,
        explanation: 'Digital literacy encompasses the comprehensive ability to use, understand, and create digital technology effectively and responsibly.'
      },
      {
        id: 'q2',
        question: 'Which is NOT mentioned as a core component of digital literacy?',
        options: [
          'Technical Skills',
          'Information Literacy',
          'Hardware Repair',
          'Digital Citizenship'
        ],
        correctAnswer: 2,
        explanation: 'Hardware repair is a specialized technical skill, but not considered a core component of general digital literacy.'
      }
    ]
  },
  {
    id: 'online-safety',
    title: 'Online Safety and Privacy',
    description: 'Learn how to protect yourself and your personal information online.',
    duration: '25 min',
    difficulty: 'Beginner',
    topics: ['Privacy', 'Security', 'Scams', 'Password Safety'],
    content: `
      <h2>Online Safety Fundamentals</h2>
      <p>Staying safe online requires understanding potential risks and taking proactive steps to protect yourself.</p>
      
      <h3>Common Online Threats</h3>
      <ul>
        <li><strong>Phishing:</strong> Fake emails or websites designed to steal information</li>
        <li><strong>Malware:</strong> Malicious software that can harm your device</li>
        <li><strong>Identity Theft:</strong> Unauthorized use of your personal information</li>
        <li><strong>Social Engineering:</strong> Manipulating people to reveal sensitive information</li>
        <li><strong>Cyberbullying:</strong> Harassment through digital platforms</li>
      </ul>
      
      <h3>Password Security Best Practices</h3>
      <ul>
        <li>Use strong, unique passwords for each account</li>
        <li>Include a mix of letters, numbers, and symbols</li>
        <li>Avoid personal information in passwords</li>
        <li>Enable two-factor authentication when available</li>
        <li>Consider using a reputable password manager</li>
      </ul>
      
      <h3>Privacy Protection Tips</h3>
      <ul>
        <li>Review and adjust social media privacy settings</li>
        <li>Be cautious about sharing personal information</li>
        <li>Understand what data websites collect</li>
        <li>Use secure networks for sensitive activities</li>
        <li>Regularly update software and security settings</li>
      </ul>
      
      <h3>Safe Online Practices</h3>
      <ul>
        <li>Verify the authenticity of websites before entering information</li>
        <li>Think before you click on links or download files</li>
        <li>Keep personal information private</li>
        <li>Report suspicious or harmful content</li>
        <li>Trust your instincts - if something seems too good to be true, it probably is</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'What is phishing?',
        options: [
          'A type of computer virus',
          'Fake emails or websites designed to steal information',
          'A method of improving internet speed',
          'A social media platform'
        ],
        correctAnswer: 1,
        explanation: 'Phishing involves fake emails or websites that appear legitimate but are designed to steal personal information like passwords or credit card numbers.'
      },
      {
        id: 'q2',
        question: 'Which is the BEST practice for password security?',
        options: [
          'Use the same password for all accounts',
          'Use your birthday as your password',
          'Use strong, unique passwords for each account',
          'Write passwords on sticky notes'
        ],
        correctAnswer: 2,
        explanation: 'Using strong, unique passwords for each account is the best practice because it prevents a single breach from compromising all your accounts.'
      }
    ]
  },
  {
    id: 'information-evaluation',
    title: 'Evaluating Online Information',
    description: 'Develop critical thinking skills to identify reliable information sources online.',
    duration: '18 min',
    difficulty: 'Intermediate',
    topics: ['Critical Thinking', 'Fact-Checking', 'Source Evaluation', 'Media Literacy'],
    content: `
      <h2>Information Evaluation in the Digital Age</h2>
      <p>With the vast amount of information available online, it's crucial to develop skills to distinguish between reliable and unreliable sources.</p>
      
      <h3>The CRAAP Test for Source Evaluation</h3>
      <ul>
        <li><strong>Currency:</strong> How recent is the information?</li>
        <li><strong>Relevance:</strong> Does it relate to your topic?</li>
        <li><strong>Authority:</strong> Who is the author or publisher?</li>
        <li><strong>Accuracy:</strong> Is the information correct and reliable?</li>
        <li><strong>Purpose:</strong> Why was this information published?</li>
      </ul>
      
      <h3>Red Flags to Watch For</h3>
      <ul>
        <li>Sensational headlines designed to provoke emotion</li>
        <li>Lack of author information or credentials</li>
        <li>No sources or references cited</li>
        <li>Obvious bias or agenda</li>
        <li>Poor grammar, spelling, or formatting</li>
        <li>Claims that seem too good to be true</li>
      </ul>
      
      <h3>Fact-Checking Strategies</h3>
      <ul>
        <li>Cross-reference information with multiple sources</li>
        <li>Check the original source of claims</li>
        <li>Use reputable fact-checking websites</li>
        <li>Look for peer-reviewed sources when possible</li>
        <li>Consider the publication date and context</li>
      </ul>
      
      <h3>Types of Reliable Sources</h3>
      <ul>
        <li>Established news organizations with editorial standards</li>
        <li>Academic journals and research publications</li>
        <li>Government websites and official documents</li>
        <li>Reputable educational institutions</li>
        <li>Professional organizations in relevant fields</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'What does the "A" in the CRAAP test stand for?',
        options: [
          'Accuracy and Authority',
          'Author and Audience',
          'Accessibility and Availability',
          'Application and Analysis'
        ],
        correctAnswer: 0,
        explanation: 'In the CRAAP test, the two A\'s stand for Authority (who wrote it) and Accuracy (is the information correct and reliable).'
      },
      {
        id: 'q2',
        question: 'Which is NOT a red flag when evaluating online information?',
        options: [
          'Sensational headlines',
          'Multiple sources cited',
          'Lack of author information',
          'Claims that seem too good to be true'
        ],
        correctAnswer: 1,
        explanation: 'Multiple sources cited is actually a positive sign of reliable information, not a red flag. It shows the author has done research and provided evidence.'
      }
    ]
  },
  {
    id: 'digital-communication',
    title: 'Digital Communication Ethics',
    description: 'Learn proper etiquette and ethics for digital communication and social media.',
    duration: '22 min',
    difficulty: 'Intermediate',
    topics: ['Digital Etiquette', 'Social Media', 'Online Communication', 'Digital Citizenship'],
    content: `
      <h2>Digital Communication and Ethics</h2>
      <p>Effective and ethical digital communication is essential for building positive relationships and maintaining professionalism online.</p>
      
      <h3>Email Etiquette</h3>
      <ul>
        <li><strong>Subject Lines:</strong> Clear and descriptive</li>
        <li><strong>Greeting:</strong> Professional salutation</li>
        <li><strong>Content:</strong> Concise and well-organized</li>
        <li><strong>Tone:</strong> Professional and respectful</li>
        <li><strong>Response Time:</strong> Timely replies when appropriate</li>
      </ul>
      
      <h3>Social Media Best Practices</h3>
      <ul>
        <li>Think before you post - consider long-term impact</li>
        <li>Respect privacy of others</li>
        <li>Use appropriate language and tone</li>
        <li>Verify information before sharing</li>
        <li>Respect intellectual property and give credit</li>
        <li>Be mindful of your digital footprint</li>
      </ul>
      
      <h3>Online Discussion Guidelines</h3>
      <ul>
        <li>Stay on topic and contribute meaningfully</li>
        <li>Respect different viewpoints and opinions</li>
        <li>Avoid personal attacks and inflammatory language</li>
        <li>Use evidence to support your arguments</li>
        <li>Acknowledge when you're wrong or uncertain</li>
      </ul>
      
      <h3>Digital Citizenship Principles</h3>
      <ul>
        <li><strong>Digital Access:</strong> Equal opportunities for technology use</li>
        <li><strong>Digital Commerce:</strong> Safe and legal online buying and selling</li>
        <li><strong>Digital Communication:</strong> Appropriate and responsible interaction</li>
        <li><strong>Digital Literacy:</strong> Teaching and learning about technology</li>
        <li><strong>Digital Etiquette:</strong> Standards of conduct online</li>
        <li><strong>Digital Law:</strong> Legal rights and restrictions</li>
        <li><strong>Digital Rights:</strong> Basic freedoms for all users</li>
        <li><strong>Digital Security:</strong> Protecting information and identity</li>
        <li><strong>Digital Health:</strong> Managing screen time and digital wellness</li>
      </ul>
    `,
    questions: [
      {
        id: 'q1',
        question: 'What should you do before sharing information on social media?',
        options: [
          'Share it immediately to be first',
          'Add your opinion to make it more interesting',
          'Verify the information is accurate',
          'Make sure it gets lots of likes'
        ],
        correctAnswer: 2,
        explanation: 'It\'s important to verify information before sharing to prevent the spread of misinformation and maintain your credibility.'
      },
      {
        id: 'q2',
        question: 'Which is NOT one of the digital citizenship principles?',
        options: [
          'Digital Access',
          'Digital Entertainment',
          'Digital Security',
          'Digital Health'
        ],
        correctAnswer: 1,
        explanation: 'Digital Entertainment is not one of the core digital citizenship principles. The principles focus on responsible and ethical technology use.'
      }
    ]
  }
];
