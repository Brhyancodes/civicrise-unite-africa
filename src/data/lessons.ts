export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  content: string;
  videos?: VideoContent[];
  youtubeRecommendations?: VideoContent[];
  questions: Question[];
}

export const lessons: Lesson[] = [
  {
    id: 'civic-basics',
    title: 'Civic Engagement Basics',
    description: 'Learn the fundamentals of civic engagement and why it matters for community development.',
    duration: '25 min',
    difficulty: 'Beginner',
    topics: ['Civic Duty', 'Community', 'Democracy', 'Participation'],
    content: `
      <h2>What is Civic Engagement?</h2>
      <p>Civic engagement refers to the ways in which citizens participate in the life of a community to improve conditions for others or to help shape the community's future.</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3 class="text-blue-800 font-semibold">💡 Key Insight</h3>
        <p class="text-blue-700">Civic engagement is not just about voting - it's about being an active participant in your community's growth and development.</p>
      </div>
      
      <h3>Why Does It Matter?</h3>
      <ul>
        <li><strong>Democratic Participation:</strong> It's the foundation of a healthy democracy</li>
        <li><strong>Community Building:</strong> Creates stronger, more connected communities</li>
        <li><strong>Social Change:</strong> Drives positive change at local and national levels</li>
        <li><strong>Personal Growth:</strong> Develops leadership and communication skills</li>
        <li><strong>Social Impact:</strong> Your voice can influence policies that affect thousands</li>
      </ul>
      
      <h3>Forms of Civic Engagement</h3>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-green-50 p-3 rounded">
          <h4 class="font-semibold text-green-800">Political Participation</h4>
          <ul class="text-sm text-green-700">
            <li>Voting in elections</li>
            <li>Running for office</li>
            <li>Attending town halls</li>
          </ul>
        </div>
        <div class="bg-purple-50 p-3 rounded">
          <h4 class="font-semibold text-purple-800">Community Service</h4>
          <ul class="text-sm text-purple-700">
            <li>Volunteering</li>
            <li>Community clean-up</li>
            <li>Helping neighbors</li>
          </ul>
        </div>
      </div>
      
      <h3>Getting Started: Your First Steps</h3>
      <ol>
        <li><strong>Identify Issues You Care About:</strong> What problems do you see in your community?</li>
        <li><strong>Research:</strong> Learn about local organizations working on these issues</li>
        <li><strong>Start Small:</strong> Attend a meeting, volunteer for an hour, or join a community group</li>
        <li><strong>Connect:</strong> Meet like-minded people and build your network</li>
        <li><strong>Take Action:</strong> Participate in campaigns, initiatives, or advocacy efforts</li>
      </ol>
    `,
    videos: [
      {
        id: 'civic-intro',
        title: 'Introduction to Civic Engagement',
        description: 'Understanding the basics of civic participation',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '8:45'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'civic-democracy',
        title: 'How Democracy Works',
        description: 'A comprehensive guide to democratic processes',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '15:30'
      },
      {
        id: 'community-organizing',
        title: 'Community Organizing 101',
        description: 'Learn how to organize your community effectively',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '12:20'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'What should be your first step in civic engagement?',
        options: [
          'Run for political office',
          'Identify issues you care about',
          'Start a protest',
          'Create a social media campaign'
        ],
        correctAnswer: 1,
        explanation: 'The first step is to identify issues you care about in your community, which helps you focus your civic engagement efforts effectively.'
      }
    ]
  },
  {
    id: 'local-government',
    title: 'Understanding Local Government',
    description: 'Explore how local government works and how you can get involved in local decision-making.',
    duration: '30 min',
    difficulty: 'Beginner',
    topics: ['Local Politics', 'City Council', 'Mayor', 'Public Services'],
    content: `
      <h2>Structure of Local Government</h2>
      <p>Local government is the level of government closest to citizens, responsible for many services that directly impact daily life.</p>
      
      <div class="bg-amber-50 p-4 rounded-lg my-4">
        <h3 class="text-amber-800 font-semibold">🏛️ Did You Know?</h3>
        <p class="text-amber-700">Local governments handle about 70% of the services you use daily - from the water you drink to the roads you drive on!</p>
      </div>
      
      <h3>Key Components</h3>
      <div class="space-y-3">
        <div class="border-l-4 border-blue-500 pl-4">
          <h4 class="font-semibold">Mayor</h4>
          <p class="text-sm text-gray-600">The chief executive of the city, responsible for implementing policies and managing city operations.</p>
        </div>
        <div class="border-l-4 border-green-500 pl-4">
          <h4 class="font-semibold">City Council</h4>
          <p class="text-sm text-gray-600">Legislative body that makes local laws, approves budgets, and sets city policies.</p>
        </div>
        <div class="border-l-4 border-purple-500 pl-4">
          <h4 class="font-semibold">City Manager</h4>
          <p class="text-sm text-gray-600">Professional administrator who implements policies and manages day-to-day operations.</p>
        </div>
        <div class="border-l-4 border-red-500 pl-4">
          <h4 class="font-semibold">Department Heads</h4>
          <p class="text-sm text-gray-600">Specialists who oversee specific services like police, fire, parks, and public works.</p>
        </div>
      </div>
      
      <h3>Local Government Services</h3>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-red-50 p-3 rounded">
          <h4 class="font-semibold text-red-800">Emergency Services</h4>
          <ul class="text-sm text-red-700">
            <li>Police protection</li>
            <li>Fire department</li>
            <li>Emergency medical services</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-3 rounded">
          <h4 class="font-semibold text-blue-800">Infrastructure</h4>
          <ul class="text-sm text-blue-700">
            <li>Water and sewer systems</li>
            <li>Local roads</li>
            <li>Public transportation</li>
          </ul>
        </div>
        <div class="bg-green-50 p-3 rounded">
          <h4 class="font-semibold text-green-800">Recreation & Culture</h4>
          <ul class="text-sm text-green-700">
            <li>Parks and recreation</li>
            <li>Libraries</li>
            <li>Community centers</li>
          </ul>
        </div>
        <div class="bg-yellow-50 p-3 rounded">
          <h4 class="font-semibold text-yellow-800">Planning & Development</h4>
          <ul class="text-sm text-yellow-700">
            <li>Zoning and planning</li>
            <li>Building permits</li>
            <li>Economic development</li>
          </ul>
        </div>
      </div>
      
      <h3>Getting Involved: Your Voice Matters</h3>
      <div class="bg-indigo-50 p-4 rounded-lg">
        <h4 class="font-semibold text-indigo-800 mb-2">Ways to Participate:</h4>
        <ul class="text-indigo-700 space-y-1">
          <li>📅 Attend city council meetings (usually monthly)</li>
          <li>🎤 Speak during public comment periods</li>
          <li>🤝 Serve on boards and commissions</li>
          <li>🗳️ Vote in local elections</li>
          <li>📧 Contact your representatives</li>
          <li>🏃‍♀️ Consider running for local office</li>
        </ul>
      </div>
    `,
    videos: [
      {
        id: 'local-gov-structure',
        title: 'How Local Government Works',
        description: 'Understanding the structure and function of local government',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '10:15'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'city-council-meetings',
        title: 'Attending Your First City Council Meeting',
        description: 'A guide to participating in local government meetings',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '8:30'
      },
      {
        id: 'local-politics',
        title: 'Local Politics Explained',
        description: 'How local politics affects your daily life',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '14:45'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'What percentage of daily services are handled by local government?',
        options: ['About 30%', 'About 50%', 'About 70%', 'About 90%'],
        correctAnswer: 2,
        explanation: 'Local governments handle approximately 70% of the services citizens use daily, from water and roads to parks and emergency services.'
      }
    ]
  },
  {
    id: 'community-organizing',
    title: 'Community Organizing Strategies',
    description: 'Learn effective strategies for organizing your community around important issues.',
    duration: '35 min',
    difficulty: 'Intermediate',
    topics: ['Organizing', 'Advocacy', 'Coalition Building', 'Campaign Strategy'],
    content: `
      <h2>Community Organizing Fundamentals</h2>
      <p>Community organizing is the process of building power to create change by bringing people together around shared concerns.</p>
      
      <div class="bg-green-50 p-4 rounded-lg my-4">
        <h3 class="text-green-800 font-semibold">🌟 Success Story</h3>
        <p class="text-green-700">The Civil Rights Movement is one of the most powerful examples of community organizing, showing how ordinary people can create extraordinary change through collective action.</p>
      </div>
      
      <h3>Key Principles</h3>
      <div class="space-y-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4 class="font-semibold text-blue-800">1. Start with Relationships</h4>
          <p class="text-blue-700">Build trust and connections first. People don't care how much you know until they know how much you care.</p>
        </div>
        <div class="bg-purple-50 p-4 rounded">
          <h4 class="font-semibold text-purple-800">2. Listen Before You Lead</h4>
          <p class="text-purple-700">Understand community needs and concerns through deep listening and genuine conversation.</p>
        </div>
        <div class="bg-orange-50 p-4 rounded">
          <h4 class="font-semibold text-orange-800">3. Power Analysis</h4>
          <p class="text-orange-700">Identify who has decision-making authority and how to influence them effectively.</p>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <h4 class="font-semibold text-red-800">4. Strategic Thinking</h4>
          <p class="text-red-700">Plan campaigns with clear goals, tactics, and measurable outcomes.</p>
        </div>
      </div>
      
      <h3>The Organizing Process</h3>
      <div class="relative">
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div class="space-y-6">
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div class="ml-4">
              <h4 class="font-semibold">Issue Identification</h4>
              <p class="text-gray-600">What problem needs solving? Make it specific and winnable.</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div class="ml-4">
              <h4 class="font-semibold">Research</h4>
              <p class="text-gray-600">Gather facts, understand stakeholders, and map the landscape.</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div class="ml-4">
              <h4 class="font-semibold">Coalition Building</h4>
              <p class="text-gray-600">Find allies, build your base, and create diverse partnerships.</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div class="ml-4">
              <h4 class="font-semibold">Strategy Development</h4>
              <p class="text-gray-600">Plan your approach with specific tactics and timeline.</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
            <div class="ml-4">
              <h4 class="font-semibold">Action</h4>
              <p class="text-gray-600">Implement your campaign with coordinated activities.</p>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
            <div class="ml-4">
              <h4 class="font-semibold">Evaluation</h4>
              <p class="text-gray-600">Learn from results, celebrate wins, and plan next steps.</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3>Effective Tactics Toolkit</h3>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-indigo-50 p-3 rounded">
          <h4 class="font-semibold text-indigo-800">Building Relationships</h4>
          <ul class="text-sm text-indigo-700">
            <li>One-on-one conversations</li>
            <li>House parties</li>
            <li>Community listening sessions</li>
          </ul>
        </div>
        <div class="bg-teal-50 p-3 rounded">
          <h4 class="font-semibold text-teal-800">Public Pressure</h4>
          <ul class="text-sm text-teal-700">
            <li>Petition drives</li>
            <li>Public demonstrations</li>
            <li>Media campaigns</li>
          </ul>
        </div>
      </div>
    `,
    videos: [
      {
        id: 'organizing-basics',
        title: 'Community Organizing 101',
        description: 'Learn the fundamentals of community organizing',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '12:30'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'saul-alinsky',
        title: 'Saul Alinsky: Rules for Radicals',
        description: 'Classic community organizing principles',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '18:45'
      },
      {
        id: 'grassroots-campaigns',
        title: 'Successful Grassroots Campaigns',
        description: 'Case studies of effective community organizing',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '22:15'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'Which principle emphasizes understanding community needs before taking action?',
        options: [
          'Start with Relationships',
          'Listen Before You Lead',
          'Power Analysis',
          'Strategic Thinking'
        ],
        correctAnswer: 1,
        explanation: '"Listen Before You Lead" emphasizes the importance of understanding community needs and concerns through deep listening before taking action.'
      }
    ]
  },
  {
    id: 'digital-basics',
    title: 'Digital Literacy Fundamentals',
    description: 'Master the essential digital skills needed in today\'s connected world.',
    duration: '30 min',
    difficulty: 'Beginner',
    topics: ['Digital Skills', 'Internet Basics', 'Computer Skills', 'Online Safety'],
    content: `
      <h2>What is Digital Literacy?</h2>
      <p>Digital literacy refers to the ability to use, understand, and create digital technology effectively and responsibly.</p>
      
      <div class="bg-cyan-50 p-4 rounded-lg my-4">
        <h3 class="text-cyan-800 font-semibold">📱 Modern Reality</h3>
        <p class="text-cyan-700">By 2024, over 5 billion people worldwide use the internet, making digital literacy as essential as traditional reading and writing skills!</p>
      </div>
      
      <h3>Core Components of Digital Literacy</h3>
      <div class="grid grid-cols-2 gap-4 my-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4 class="font-semibold text-blue-800">🔧 Technical Skills</h4>
          <p class="text-blue-700">Operating devices, using software, understanding basic computer functions and troubleshooting common issues.</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4 class="font-semibold text-green-800">📚 Information Literacy</h4>
          <p class="text-green-700">Finding, evaluating, and using information effectively while recognizing credible sources.</p>
        </div>
        <div class="bg-purple-50 p-4 rounded">
          <h4 class="font-semibold text-purple-800">💬 Communication Skills</h4>
          <p class="text-purple-700">Interacting effectively online through email, social media, and digital collaboration tools.</p>
        </div>
        <div class="bg-orange-50 p-4 rounded">
          <h4 class="font-semibold text-orange-800">🏛️ Digital Citizenship</h4>
          <p class="text-orange-700">Understanding rights, responsibilities, and ethical behavior in digital spaces.</p>
        </div>
      </div>
      
      <h3>Essential Digital Skills for 2025</h3>
      <div class="space-y-3">
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
          <div>
            <h4 class="font-medium">Basic Device Operation</h4>
            <p class="text-sm text-gray-600">Keyboard, mouse, touchscreen navigation, and device settings</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
          <div>
            <h4 class="font-medium">Internet Navigation</h4>
            <p class="text-sm text-gray-600">Web browsing, search techniques, and understanding URLs</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
          <div>
            <h4 class="font-medium">Digital Communication</h4>
            <p class="text-sm text-gray-600">Email, messaging apps, video calls, and professional online interaction</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
          <div>
            <h4 class="font-medium">File Management</h4>
            <p class="text-sm text-gray-600">Organizing, saving, sharing, and backing up digital files</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
          <div>
            <h4 class="font-medium">Privacy & Security</h4>
            <p class="text-sm text-gray-600">Password management, privacy settings, and recognizing online threats</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs">✓</div>
          <div>
            <h4 class="font-medium">Digital Content Creation</h4>
            <p class="text-sm text-gray-600">Creating documents, presentations, and basic multimedia content</p>
          </div>
        </div>
      </div>
      
      <h3>Why Digital Literacy Matters More Than Ever</h3>
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <ul class="space-y-2">
          <li class="flex items-center space-x-2">
            <span class="text-blue-500">🌐</span>
            <span><strong>Access to Information:</strong> Navigate the vast digital information landscape</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-green-500">💼</span>
            <span><strong>Employment Opportunities:</strong> Most jobs now require basic digital skills</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-purple-500">👥</span>
            <span><strong>Social Connection:</strong> Stay connected with family, friends, and communities</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-orange-500">🗳️</span>
            <span><strong>Civic Participation:</strong> Engage in democracy through digital platforms</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="text-red-500">🛡️</span>
            <span><strong>Personal Safety:</strong> Protect yourself from online scams and threats</span>
          </li>
        </ul>
      </div>
    `,
    videos: [
      {
        id: 'digital-literacy-intro',
        title: 'Digital Literacy in 2025',
        description: 'Introduction to essential digital skills',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '11:20'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'computer-basics',
        title: 'Computer Basics for Beginners',
        description: 'Complete guide to using computers effectively',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '25:45'
      },
      {
        id: 'internet-safety',
        title: 'Internet Safety Tips',
        description: 'Stay safe online with these essential tips',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '16:30'
      },
      {
        id: 'digital-skills-workplace',
        title: 'Digital Skills for the Modern Workplace',
        description: 'Essential digital skills for career success',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '19:15'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'Approximately how many people worldwide use the internet by 2024?',
        options: [
          'Over 3 billion',
          'Over 4 billion',
          'Over 5 billion',
          'Over 6 billion'
        ],
        correctAnswer: 2,
        explanation: 'By 2024, over 5 billion people worldwide use the internet, making digital literacy increasingly essential.'
      }
    ]
  },
  {
    id: 'online-safety',
    title: 'Online Safety and Privacy',
    description: 'Learn how to protect yourself and your personal information online.',
    duration: '35 min',
    difficulty: 'Beginner',
    topics: ['Privacy', 'Security', 'Scams', 'Password Safety'],
    content: `
      <h2>Online Safety Fundamentals</h2>
      <p>Staying safe online requires understanding potential risks and taking proactive steps to protect yourself.</p>
      
      <div class="bg-red-50 p-4 rounded-lg my-4">
        <h3 class="text-red-800 font-semibold">🚨 Alarming Statistics</h3>
        <p class="text-red-700">Cybercrime damages are projected to reach $10.5 trillion annually by 2025. Every 39 seconds, there's a hacker attack somewhere on the web!</p>
      </div>
      
      <h3>Common Online Threats</h3>
      <div class="space-y-4">
        <div class="border-l-4 border-red-500 bg-red-50 p-4">
          <h4 class="font-semibold text-red-800">🎣 Phishing</h4>
          <p class="text-red-700">Fake emails or websites designed to steal your personal information, passwords, or financial details.</p>
          <div class="mt-2 text-sm">
            <strong>Red flags:</strong> Urgent language, spelling errors, suspicious links, requests for sensitive info
          </div>
        </div>
        <div class="border-l-4 border-orange-500 bg-orange-50 p-4">
          <h4 class="font-semibold text-orange-800">🦠 Malware</h4>
          <p class="text-orange-700">Malicious software that can steal data, damage your device, or spy on your activities.</p>
          <div class="mt-2 text-sm">
            <strong>Types:</strong> Viruses, ransomware, spyware, trojans
          </div>
        </div>
        <div class="border-l-4 border-purple-500 bg-purple-50 p-4">
          <h4 class="font-semibold text-purple-800">🎭 Identity Theft</h4>
          <p class="text-purple-700">Unauthorized use of your personal information to commit fraud or other crimes.</p>
          <div class="mt-2 text-sm">
            <strong>Common targets:</strong> Social Security numbers, credit card info, addresses, birthdates
          </div>
        </div>
        <div class="border-l-4 border-yellow-500 bg-yellow-50 p-4">
          <h4 class="font-semibold text-yellow-800">🧠 Social Engineering</h4>
          <p class="text-yellow-700">Psychological manipulation to trick you into revealing sensitive information or performing actions.</p>
          <div class="mt-2 text-sm">
            <strong>Tactics:</strong> Pretexting, baiting, quid pro quo, tailgating
          </div>
        </div>
      </div>
      
      <h3>Password Security Best Practices</h3>
      <div class="bg-green-50 p-4 rounded-lg">
        <h4 class="font-semibold text-green-800 mb-3">🔐 The Ultimate Password Strategy</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-green-700">Do's:</h5>
            <ul class="text-sm text-green-600 space-y-1">
              <li>✅ Use 12+ characters minimum</li>
              <li>✅ Mix letters, numbers, symbols</li>
              <li>✅ Unique password per account</li>
              <li>✅ Enable two-factor authentication</li>
              <li>✅ Use a password manager</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-red-700">Don'ts:</h5>
            <ul class="text-sm text-red-600 space-y-1">
              <li>❌ Use personal information</li>
              <li>❌ Reuse passwords</li>
              <li>❌ Share passwords</li>
              <li>❌ Use common passwords</li>
              <li>❌ Store in plain text</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>Privacy Protection Strategies</h3>
      <div class="space-y-3">
        <div class="bg-blue-50 p-3 rounded">
          <h4 class="font-semibold text-blue-800">Social Media Privacy</h4>
          <p class="text-sm text-blue-700">Review settings regularly, limit personal info sharing, be selective with friend requests</p>
        </div>
        <div class="bg-indigo-50 p-3 rounded">
          <h4 class="font-semibold text-indigo-800">Browsing Privacy</h4>
          <p class="text-sm text-indigo-700">Use private/incognito mode, clear cookies regularly, consider VPN for sensitive activities</p>
        </div>
        <div class="bg-teal-50 p-3 rounded">
          <h4 class="font-semibold text-teal-800">Data Protection</h4>
          <p class="text-sm text-teal-700">Read privacy policies, opt out of data collection when possible, monitor credit reports</p>
        </div>
      </div>
      
      <h3>Safe Online Practices Checklist</h3>
      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium mb-2">🔍 Before You Click:</h5>
            <ul class="text-sm space-y-1">
              <li>• Verify website URLs</li>
              <li>• Check for HTTPS (secure connection)</li>
              <li>• Hover over links to see destinations</li>
              <li>• Be skeptical of urgent requests</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium mb-2">📱 Daily Habits:</h5>
            <ul class="text-sm space-y-1">
              <li>• Keep software updated</li>
              <li>• Use secure networks</li>
              <li>• Log out of accounts</li>
              <li>• Monitor account activity</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    videos: [
      {
        id: 'online-safety-2025',
        title: 'Online Safety in 2025',
        description: 'Latest threats and how to protect yourself',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '14:30'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'password-security',
        title: 'Password Security Masterclass',
        description: 'Create unbreakable passwords and secure your accounts',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '18:20'
      },
      {
        id: 'avoid-scams',
        title: 'How to Spot and Avoid Online Scams',
        description: 'Recognize and protect yourself from common scams',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '22:15'
      },
      {
        id: 'privacy-settings',
        title: 'Ultimate Privacy Settings Guide',
        description: 'Secure your social media and online accounts',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '16:45'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'How often does a hacker attack occur somewhere on the web?',
        options: [
          'Every 39 seconds',
          'Every 5 minutes',
          'Every hour',
          'Every day'
        ],
        correctAnswer: 0,
        explanation: 'According to cybersecurity statistics, there is a hacker attack somewhere on the web every 39 seconds, highlighting the importance of online security.'
      }
    ]
  },
  {
    id: 'information-evaluation',
    title: 'Evaluating Online Information',
    description: 'Develop critical thinking skills to identify reliable information sources online.',
    duration: '28 min',
    difficulty: 'Intermediate',
    topics: ['Critical Thinking', 'Fact-Checking', 'Source Evaluation', 'Media Literacy'],
    content: `
      <h2>Information Evaluation in the Digital Age</h2>
      <p>With the vast amount of information available online, it's crucial to develop skills to distinguish between reliable and unreliable sources.</p>
      
      <div class="bg-yellow-50 p-4 rounded-lg my-4">
        <h3 class="text-yellow-800 font-semibold">📊 Information Overload</h3>
        <p class="text-yellow-700">Every day, humans create 2.5 quintillion bytes of data. 90% of the world's data was created in just the last two years! Learning to evaluate information is more critical than ever.</p>
      </div>
      
      <h3>The CRAAP Test for Source Evaluation</h3>
      <div class="space-y-4">
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-semibold text-blue-800">📅 Currency</h4>
          <p class="text-blue-700 mb-2">How recent is the information?</p>
          <ul class="text-sm text-blue-600 space-y-1">
            <li>• When was it published or last updated?</li>
            <li>• Are the links and sources current?</li>
            <li>• Is the topic time-sensitive?</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <h4 class="font-semibold text-green-800">🎯 Relevance</h4>
          <p class="text-green-700 mb-2">Does it relate to your topic?</p>
          <ul class="text-sm text-green-600 space-y-1">
            <li>• Does it answer your questions?</li>
            <li>• Is it at the right level (not too basic/advanced)?</li>
            <li>• Would you cite this source?</li>
          </ul>
        </div>
        <div class="bg-purple-50 p-4 rounded-lg">
          <h4 class="font-semibold text-purple-800">👤 Authority</h4>
          <p class="text-purple-700 mb-2">Who is the author or publisher?</p>
          <ul class="text-sm text-purple-600 space-y-1">
            <li>• What are their credentials?</li>
            <li>• Are they affiliated with reputable organizations?</li>
            <li>• Can you contact them?</li>
          </ul>
        </div>
        <div class="bg-orange-50 p-4 rounded-lg">
          <h4 class="font-semibold text-orange-800">✅ Accuracy</h4>
          <p class="text-orange-700 mb-2">Is the information correct and reliable?</p>
          <ul class="text-sm text-orange-600 space-y-1">
            <li>• Are sources cited and verifiable?</li>
            <li>• Can you find the same info elsewhere?</li>
            <li>• Is it free from obvious errors?</li>
          </ul>
        </div>
        <div class="bg-red-50 p-4 rounded-lg">
          <h4 class="font-semibold text-red-800">🎭 Purpose</h4>
          <p class="text-red-700 mb-2">Why was this information published?</p>
          <ul class="text-sm text-red-600 space-y-1">
            <li>• To inform, persuade, sell, or entertain?</li>
            <li>• Is there obvious bias or agenda?</li>
            <li>• Who is the intended audience?</li>
          </ul>
        </div>
      </div>
      
      <h3>Red Flags: Warning Signs of Unreliable Information</h3>
      <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
        <h4 class="font-semibold text-red-800 mb-3">🚩 Be Alert For:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-red-700">Content Issues:</h5>
            <ul class="text-sm text-red-600 space-y-1">
              <li>• Sensational headlines</li>
              <li>• Poor grammar/spelling</li>
              <li>• No sources cited</li>
              <li>• Claims too good to be true</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-red-700">Source Issues:</h5>
            <ul class="text-sm text-red-600 space-y-1">
              <li>• Anonymous authors</li>
              <li>• Suspicious website design</li>
              <li>• Obvious bias or agenda</li>
              <li>• No contact information</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>Fact-Checking Strategies</h3>
      <div class="space-y-3">
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</div>
          <div>
            <h4 class="font-medium">Cross-Reference Sources</h4>
            <p class="text-sm text-gray-600">Check multiple reputable sources to verify information</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">2</div>
          <div>
            <h4 class="font-medium">Trace to Original Source</h4>
            <p class="text-sm text-gray-600">Find where the claim or data originally came from</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">3</div>
          <div>
            <h4 class="font-medium">Use Fact-Checking Sites</h4>
            <p class="text-sm text-gray-600">Consult Snopes, FactCheck.org, or PolitiFact for verification</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">4</div>
          <div>
            <h4 class="font-medium">Check Publication Date</h4>
            <p class="text-sm text-gray-600">Ensure information is current and contextually relevant</p>
          </div>
        </div>
      </div>
      
      <h3>Types of Reliable Sources</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-green-50 p-4 rounded">
          <h4 class="font-semibold text-green-800">🏛️ Institutional Sources</h4>
          <ul class="text-sm text-green-700 space-y-1">
            <li>• Government websites (.gov)</li>
            <li>• Educational institutions (.edu)</li>
            <li>• Established news organizations</li>
            <li>• Professional associations</li>
          </ul>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h4 class="font-semibold text-blue-800">📚 Academic Sources</h4>
          <ul class="text-sm text-blue-700 space-y-1">
            <li>• Peer-reviewed journals</li>
            <li>• Research publications</li>
            <li>• Academic databases</li>
            <li>• Expert interviews</li>
          </ul>
        </div>
      </div>
    `,
    videos: [
      {
        id: 'fact-checking-guide',
        title: 'Complete Fact-Checking Guide',
        description: 'Learn to verify information like a pro',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '13:45'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'media-literacy',
        title: 'Media Literacy in the Digital Age',
        description: 'Critical thinking skills for consuming media',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '20:30'
      },
      {
        id: 'misinformation-guide',
        title: 'Spotting Misinformation and Fake News',
        description: 'Identify and combat false information online',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '17:25'
      },
      {
        id: 'research-skills',
        title: 'Advanced Online Research Skills',
        description: 'Find reliable information efficiently online',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '24:10'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'What percentage of the world\'s data was created in the last two years?',
        options: [
          '50%',
          '70%',
          '80%',
          '90%'
        ],
        correctAnswer: 3,
        explanation: 'An astounding 90% of the world\'s data was created in just the last two years, highlighting the rapid pace of information creation and the need for evaluation skills.'
      }
    ]
  },
  {
    id: 'digital-communication',
    title: 'Digital Communication Ethics',
    description: 'Learn proper etiquette and ethics for digital communication and social media.',
    duration: '32 min',
    difficulty: 'Intermediate',
    topics: ['Digital Etiquette', 'Social Media', 'Online Communication', 'Digital Citizenship'],
    content: `
      <h2>Digital Communication and Ethics</h2>
      <p>Effective and ethical digital communication is essential for building positive relationships and maintaining professionalism online.</p>
      
      <div class="bg-indigo-50 p-4 rounded-lg my-4">
        <h3 class="text-indigo-800 font-semibold">🌐 Global Connection</h3>
        <p class="text-indigo-700">Over 4.8 billion people use social media worldwide. Your digital communication can reach anyone, anywhere, at any time - making ethical behavior more important than ever!</p>
      </div>
      
      <h3>Professional Email Etiquette</h3>
      <div class="bg-blue-50 p-4 rounded-lg">
        <h4 class="font-semibold text-blue-800 mb-3">📧 Email Best Practices</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-blue-700 mb-2">Structure:</h5>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Clear, descriptive subject line</li>
              <li>• Professional greeting</li>
              <li>• Concise, organized content</li>
              <li>• Proper closing and signature</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-blue-700 mb-2">Tone & Style:</h5>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Professional and respectful</li>
              <li>• Proofread before sending</li>
              <li>• Appropriate response time</li>
              <li>• Use CC and BCC appropriately</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>Social Media Best Practices</h3>
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 bg-green-50 p-4">
          <h4 class="font-semibold text-green-800">🤔 Think Before You Post</h4>
          <p class="text-green-700 mb-2">Consider the long-term impact of your posts</p>
          <ul class="text-sm text-green-600 space-y-1">
            <li>• Would you be comfortable with your employer seeing this?</li>
            <li>• How might this affect your reputation?</li>
            <li>• Is this information accurate and helpful?</li>
          </ul>
        </div>
        <div class="border-l-4 border-purple-500 bg-purple-50 p-4">
          <h4 class="font-semibold text-purple-800">🔒 Respect Privacy</h4>
          <p class="text-purple-700 mb-2">Protect your own and others' privacy</p>
          <ul class="text-sm text-purple-600 space-y-1">
            <li>• Don't share personal info without permission</li>
            <li>• Be cautious with location sharing</li>
            <li>• Respect others' boundaries and preferences</li>
          </ul>
        </div>
        <div class="border-l-4 border-orange-500 bg-orange-50 p-4">
          <h4 class="font-semibold text-orange-800">✅ Verify Before Sharing</h4>
          <p class="text-orange-700 mb-2">Combat misinformation by checking facts</p>
          <ul class="text-sm text-orange-600 space-y-1">
            <li>• Check sources and credibility</li>
            <li>• Look for corroborating evidence</li>
            <li>• Don't share sensational or unverified claims</li>
          </ul>
        </div>
        <div class="border-l-4 border-red-500 bg-red-50 p-4">
          <h4 class="font-semibold text-red-800">© Give Credit Where Due</h4>
          <p class="text-red-700 mb-2">Respect intellectual property rights</p>
          <ul class="text-sm text-red-600 space-y-1">
            <li>• Credit original creators and sources</li>
            <li>• Use proper attribution for quotes and images</li>
            <li>• Understand fair use and copyright laws</li>
          </ul>
        </div>
      </div>
      
      <h3>Online Discussion Guidelines</h3>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-3">💬 Productive Online Conversations</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-green-700 mb-2">Do:</h5>
            <ul class="text-sm text-green-600 space-y-1">
              <li>✅ Stay on topic</li>
              <li>✅ Listen to different viewpoints</li>
              <li>✅ Use evidence to support arguments</li>
              <li>✅ Acknowledge when you're wrong</li>
              <li>✅ Ask clarifying questions</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-red-700 mb-2">Don't:</h5>
            <ul class="text-sm text-red-600 space-y-1">
              <li>❌ Make personal attacks</li>
              <li>❌ Use inflammatory language</li>
              <li>❌ Spread unverified information</li>
              <li>❌ Dominate conversations</li>
              <li>❌ Ignore others' perspectives</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>The Nine Elements of Digital Citizenship</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-50 p-3 rounded">
          <h4 class="font-semibold text-blue-800 text-sm">🌐 Digital Access</h4>
          <p class="text-xs text-blue-700">Equal opportunities for technology use</p>
        </div>
        <div class="bg-green-50 p-3 rounded">
          <h4 class="font-semibold text-green-800 text-sm">💳 Digital Commerce</h4>
          <p class="text-xs text-green-700">Safe and legal online transactions</p>
        </div>
        <div class="bg-purple-50 p-3 rounded">
          <h4 class="font-semibold text-purple-800 text-sm">💬 Digital Communication</h4>
          <p class="text-xs text-purple-700">Appropriate online interaction</p>
        </div>
        <div class="bg-orange-50 p-3 rounded">
          <h4 class="font-semibold text-orange-800 text-sm">📚 Digital Literacy</h4>
          <p class="text-xs text-orange-700">Teaching and learning technology</p>
        </div>
        <div class="bg-red-50 p-3 rounded">
          <h4 class="font-semibold text-red-800 text-sm">🤝 Digital Etiquette</h4>
          <p class="text-xs text-red-700">Standards of online conduct</p>
        </div>
        <div class="bg-indigo-50 p-3 rounded">
          <h4 class="font-semibold text-indigo-800 text-sm">⚖️ Digital Law</h4>
          <p class="text-xs text-indigo-700">Legal rights and restrictions</p>
        </div>
        <div class="bg-teal-50 p-3 rounded">
          <h4 class="font-semibold text-teal-800 text-sm">🛡️ Digital Rights</h4>
          <p class="text-xs text-teal-700">Basic freedoms for all users</p>
        </div>
        <div class="bg-yellow-50 p-3 rounded">
          <h4 class="font-semibold text-yellow-800 text-sm">🔒 Digital Security</h4>
          <p class="text-xs text-yellow-700">Protecting information and identity</p>
        </div>
        <div class="bg-pink-50 p-3 rounded">
          <h4 class="font-semibold text-pink-800 text-sm">💚 Digital Health</h4>
          <p class="text-xs text-pink-700">Managing digital wellness</p>
        </div>
      </div>
      
      <h3>Building Your Digital Reputation</h3>
      <div class="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-3">🌟 Your Digital Footprint Matters</h4>
        <div class="space-y-2 text-sm">
          <p><strong>Professional Presence:</strong> Curate profiles that reflect your values and goals</p>
          <p><strong>Consistent Voice:</strong> Maintain authenticity across all platforms</p>
          <p><strong>Positive Contribution:</strong> Share valuable content and engage constructively</p>
          <p><strong>Regular Audit:</strong> Periodically review and clean up your online presence</p>
        </div>
      </div>
    `,
    videos: [
      {
        id: 'digital-etiquette',
        title: 'Digital Etiquette Masterclass',
        description: 'Professional online communication skills',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '16:20'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'social-media-strategy',
        title: 'Social Media Strategy for Professionals',
        description: 'Build a professional online presence',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '21:30'
      },
      {
        id: 'digital-citizenship',
        title: 'Digital Citizenship in Practice',
        description: 'Responsible behavior in digital spaces',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '19:45'
      },
      {
        id: 'content-creation-ethics',
        title: 'Content Creation Ethics and Best Practices',
        description: 'Create engaging content responsibly',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '25:15'
      }
    ],
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
      },
      {
        id: 'q3',
        question: 'Approximately how many people use social media worldwide?',
        options: [
          'Over 3.8 billion',
          'Over 4.8 billion',
          'Over 5.8 billion',
          'Over 6.8 billion'
        ],
        correctAnswer: 1,
        explanation: 'Over 4.8 billion people use social media worldwide, making digital communication ethics crucial for global interaction.'
      }
    ]
  },
  {
    id: 'content-creation',
    title: 'Digital Content Creation',
    description: 'Learn to create engaging digital content across various platforms and formats.',
    duration: '40 min',
    difficulty: 'Intermediate',
    topics: ['Content Strategy', 'Visual Design', 'Video Creation', 'Brand Building'],
    content: `
      <h2>The Art and Science of Digital Content Creation</h2>
      <p>In today's digital landscape, creating compelling content is a valuable skill for personal branding, business growth, and community engagement.</p>
      
      <div class="bg-purple-50 p-4 rounded-lg my-4">
        <h3 class="text-purple-800 font-semibold">🎯 Content Creation Statistics</h3>
        <p class="text-purple-700">Every minute, 500 hours of video are uploaded to YouTube, 347,000 Instagram stories are shared, and 6,000 tweets are sent. Standing out requires strategy and skill!</p>
      </div>
      
      <h3>Understanding Your Audience</h3>
      <div class="space-y-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4 class="font-semibold text-blue-800">🎯 Audience Research</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <h5 class="font-medium text-blue-700">Demographics:</h5>
              <ul class="text-sm text-blue-600 space-y-1">
                <li>• Age, location, gender</li>
                <li>• Education level</li>
                <li>• Income and lifestyle</li>
                <li>• Technology usage</li>
              </ul>
            </div>
            <div>
              <h5 class="font-medium text-blue-700">Psychographics:</h5>
              <ul class="text-sm text-blue-600 space-y-1">
                <li>• Interests and hobbies</li>
                <li>• Values and beliefs</li>
                <li>• Pain points and challenges</li>
                <li>• Content preferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h3>Content Types and Formats</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-green-50 p-4 rounded">
          <h4 class="font-semibold text-green-800">📝 Written Content</h4>
          <ul class="text-sm text-green-700 space-y-1">
            <li>• Blog posts and articles</li>
            <li>• Social media captions</li>
            <li>• Email newsletters</li>
            <li>• eBooks and guides</li>
            <li>• Scripts and copy</li>
          </ul>
        </div>
        <div class="bg-orange-50 p-4 rounded">
          <h4 class="font-semibold text-orange-800">🎨 Visual Content</h4>
          <ul class="text-sm text-orange-700 space-y-1">
            <li>• Graphics and illustrations</li>
            <li>• Photography</li>
            <li>• Infographics</li>
            <li>• Memes and GIFs</li>
            <li>• Design templates</li>
          </ul>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <h4 class="font-semibold text-red-800">🎥 Video Content</h4>
          <ul class="text-sm text-red-700 space-y-1">
            <li>• Educational tutorials</li>
            <li>• Short-form videos (TikTok, Reels)</li>
            <li>• Live streams</li>
            <li>• Animations and motion graphics</li>
            <li>• Webinars and presentations</li>
          </ul>
        </div>
        <div class="bg-purple-50 p-4 rounded">
          <h4 class="font-semibold text-purple-800">🎵 Audio Content</h4>
          <ul class="text-sm text-purple-700 space-y-1">
            <li>• Podcasts</li>
            <li>• Voice-overs</li>
            <li>• Audio stories</li>
            <li>• Music and sound effects</li>
            <li>• Voice messages</li>
          </ul>
        </div>
      </div>
      
      <h3>Content Creation Process</h3>
      <div class="space-y-4">
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <h4 class="font-semibold">Planning & Strategy</h4>
            <p class="text-sm text-gray-600">Define goals, research topics, create content calendar</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <h4 class="font-semibold">Creation & Production</h4>
            <p class="text-sm text-gray-600">Write, design, film, record - bring your ideas to life</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <h4 class="font-semibold">Editing & Optimization</h4>
            <p class="text-sm text-gray-600">Refine content, optimize for platforms, add SEO elements</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
          <div>
            <h4 class="font-semibold">Publishing & Distribution</h4>
            <p class="text-sm text-gray-600">Share across platforms, engage with audience</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
          <div>
            <h4 class="font-semibold">Analysis & Improvement</h4>
            <p class="text-sm text-gray-600">Monitor performance, gather feedback, iterate</p>
          </div>
        </div>
      </div>
      
      <h3>Essential Tools for Content Creators</h3>
      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 class="font-medium mb-2">🎨 Design Tools:</h5>
            <ul class="text-sm space-y-1">
              <li>• Canva (beginner-friendly)</li>
              <li>• Adobe Creative Suite</li>
              <li>• Figma (collaborative)</li>
              <li>• GIMP (free alternative)</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium mb-2">🎥 Video Tools:</h5>
            <ul class="text-sm space-y-1">
              <li>• DaVinci Resolve (free)</li>
              <li>• Adobe Premiere Pro</li>
              <li>• Final Cut Pro (Mac)</li>
              <li>• CapCut (mobile)</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium mb-2">📊 Analytics Tools:</h5>
            <ul class="text-sm space-y-1">
              <li>• Google Analytics</li>
              <li>• Social media insights</li>
              <li>• YouTube Analytics</li>
              <li>• Buffer/Hootsuite</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>Building Your Brand Through Content</h3>
      <div class="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-3">🌟 Brand Consistency Elements</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-medium text-purple-700">Visual Identity:</h5>
            <ul class="text-sm text-purple-600 space-y-1">
              <li>• Consistent color palette</li>
              <li>• Typography choices</li>
              <li>• Logo and imagery style</li>
              <li>• Layout and composition</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-pink-700">Voice & Tone:</h5>
            <ul class="text-sm text-pink-600 space-y-1">
              <li>• Writing style and personality</li>
              <li>• Language and vocabulary</li>
              <li>• Humor and emotion</li>
              <li>• Values and messaging</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    videos: [
      {
        id: 'content-creation-basics',
        title: 'Content Creation Fundamentals',
        description: 'Essential skills for digital content creators',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '18:30'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'video-editing-tutorial',
        title: 'Video Editing for Beginners',
        description: 'Learn professional video editing techniques',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '28:45'
      },
      {
        id: 'social-media-content',
        title: 'Creating Viral Social Media Content',
        description: 'Strategies for engaging social media posts',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '22:20'
      },
      {
        id: 'brand-building',
        title: 'Personal Brand Building Through Content',
        description: 'Build your personal brand with strategic content',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '26:10'
      }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What should be the first step in content creation?',
        options: [
          'Start filming immediately',
          'Planning and strategy',
          'Buying expensive equipment',
          'Copying successful creators'
        ],
        correctAnswer: 1,
        explanation: 'Planning and strategy should come first - defining your goals, researching your audience, and creating a content calendar sets the foundation for successful content creation.'
      },
      {
        id: 'q2',
        question: 'How many hours of video are uploaded to YouTube every minute?',
        options: [
          '100 hours',
          '300 hours',
          '500 hours',
          '700 hours'
        ],
        correctAnswer: 2,
        explanation: 'Every minute, 500 hours of video are uploaded to YouTube, highlighting the competitive nature of content creation and the need for quality, strategic content.'
      },
      {
        id: 'q3',
        question: 'Which is NOT mentioned as an essential element of brand consistency?',
        options: [
          'Color palette',
          'Typography choices',
          'Expensive equipment',
          'Voice and tone'
        ],
        correctAnswer: 2,
        explanation: 'Expensive equipment is not essential for brand consistency. Brand consistency focuses on visual identity elements like colors, fonts, and consistent voice and tone across content.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Essentials',
    description: 'Master the fundamentals of digital marketing and online business promotion.',
    duration: '45 min',
    difficulty: 'Intermediate',
    topics: ['SEO', 'Social Media Marketing', 'Email Marketing', 'Analytics'],
    content: `
      <h2>Digital Marketing in the Modern Era</h2>
      <p>Digital marketing encompasses all marketing efforts that use electronic devices or the internet to connect with current and prospective customers.</p>
      
      <div class="bg-emerald-50 p-4 rounded-lg my-4">
        <h3 class="text-emerald-800 font-semibold">💰 Market Reality</h3>
        <p class="text-emerald-700">Global digital ad spending is expected to reach $876 billion by 2026. Businesses that embrace digital marketing grow revenue 2.8x faster than those that don't!</p>
      </div>
      
      <h3>The Digital Marketing Ecosystem</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <h4 class="font-semibold text-blue-800">🔍 Search Engine Optimization (SEO)</h4>
          <p class="text-sm text-blue-700 mb-2">Improve your website's visibility in search results</p>
          <ul class="text-xs text-blue-600 space-y-1">
            <li>• Keyword research and optimization</li>
            <li>• On-page and technical SEO</li>
            <li>• Link building strategies</li>
            <li>• Local SEO for businesses</li>
          </ul>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <h4 class="font-semibold text-green-800">📱 Social Media Marketing</h4>
          <p class="text-sm text-green-700 mb-2">Build brand awareness and engage customers</p>
          <ul class="text-xs text-green-600 space-y-1">
            <li>• Platform-specific strategies</li>
            <li>• Community management</li>
            <li>• Influencer partnerships</li>
            <li>• Social commerce</li>
          </ul>
        </div>
        <div class="bg-purple-50 p-4 rounded">
          <h4 class="font-semibold text-purple-800">📧 Email Marketing</h4>
          <p class="text-sm text-purple-700 mb-2">Direct communication with your audience</p>
          <ul class="text-xs text-purple-600 space-y-1">
            <li>• List building and segmentation</li>
            <li>• Automated email sequences</li>
            <li>• Personalization strategies</li>
            <li>• Performance optimization</li>
          </ul>
        </div>
        <div class="bg-orange-50 p-4 rounded">
          <h4 class="font-semibold text-orange-800">💰 Paid Advertising</h4>
          <p class="text-sm text-orange-700 mb-2">Targeted promotion across digital channels</p>
          <ul class="text-xs text-orange-600 space-y-1">
            <li>• Google Ads and search marketing</li>
            <li>• Social media advertising</li>
            <li>• Display and remarketing</li>
            <li>• Budget optimization</li>
          </ul>
        </div>
      </div>
      
      <h3>The Customer Journey</h3>
      <div class="relative mb-6">
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
        <div class="space-y-6">
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
            <div class="ml-4">
              <h4 class="font-semibold text-blue-800">Awareness</h4>
              <p class="text-sm text-gray-600">Customer realizes they have a problem or need</p>
              <div class="text-xs text-blue-600 mt-1">Tactics: SEO, content marketing, social media</div>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">I</div>
            <div class="ml-4">
              <h4 class="font-semibold text-green-800">Interest</h4>
              <p class="text-sm text-gray-600">Customer researches solutions and shows interest</p>
              <div class="text-xs text-green-600 mt-1">Tactics: Email marketing, webinars, free resources</div>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">D</div>
            <div class="ml-4">
              <h4 class="font-semibold text-purple-800">Desire</h4>
              <p class="text-sm text-gray-600">Customer wants your specific solution</p>
              <div class="text-xs text-purple-600 mt-1">Tactics: Case studies, testimonials, demos</div>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">A</div>
            <div class="ml-4">
              <h4 class="font-semibold text-orange-800">Action</h4>
              <p class="text-sm text-gray-600">Customer makes a purchase or conversion</p>
              <div class="text-xs text-orange-600 mt-1">Tactics: Targeted ads, special offers, retargeting</div>
            </div>
          </div>
          <div class="relative flex items-start">
            <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">R</div>
            <div class="ml-4">
              <h4 class="font-semibold text-red-800">Retention</h4>
              <p class="text-sm text-gray-600">Customer becomes loyal and advocates for brand</p>
              <div class="text-xs text-red-600 mt-1">Tactics: Customer service, loyalty programs, referrals</div>
            </div>
          </div>
        </div>
      </div>
      
      <h3>Key Metrics and Analytics</h3>
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-semibold mb-3">📊 Essential KPIs to Track</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 class="font-medium text-blue-700 mb-2">Traffic Metrics:</h5>
            <ul class="text-sm text-blue-600 space-y-1">
              <li>• Website visitors</li>
              <li>• Page views</li>
              <li>• Session duration</li>
              <li>• Bounce rate</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-green-700 mb-2">Engagement Metrics:</h5>
            <ul class="text-sm text-green-600 space-y-1">
              <li>• Click-through rates</li>
              <li>• Social media engagement</li>
              <li>• Email open rates</li>
              <li>• Video completion rates</li>
            </ul>
          </div>
          <div>
            <h5 class="font-medium text-purple-700 mb-2">Conversion Metrics:</h5>
            <ul class="text-sm text-purple-600 space-y-1">
              <li>• Conversion rate</li>
              <li>• Cost per acquisition</li>
              <li>• Return on ad spend</li>
              <li>• Customer lifetime value</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3>Digital Marketing Strategy Framework</h3>
      <div class="space-y-4">
        <div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
          <h4 class="font-semibold text-yellow-800">1. Set SMART Goals</h4>
          <p class="text-sm text-yellow-700">Specific, Measurable, Achievable, Relevant, Time-bound objectives</p>
        </div>
        <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
          <h4 class="font-semibold text-blue-800">2. Know Your Audience</h4>
          <p class="text-sm text-blue-700">Create detailed buyer personas and understand customer pain points</p>
        </div>
        <div class="bg-green-50 p-4 rounded border-l-4 border-green-500">
          <h4 class="font-semibold text-green-800">3. Choose Your Channels</h4>
          <p class="text-sm text-green-700">Select platforms where your audience is most active and engaged</p>
        </div>
        <div class="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
          <h4 class="font-semibold text-purple-800">4. Create Valuable Content</h4>
          <p class="text-sm text-purple-700">Develop content that educates, entertains, or solves problems</p>
        </div>
        <div class="bg-red-50 p-4 rounded border-l-4 border-red-500">
          <h4 class="font-semibold text-red-800">5. Measure and Optimize</h4>
          <p class="text-sm text-red-700">Continuously analyze performance and adjust strategies based on data</p>
        </div>
      </div>
    `,
    videos: [
      {
        id: 'digital-marketing-intro',
        title: 'Digital Marketing 101',
        description: 'Complete introduction to digital marketing strategies',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '22:15'
      }
    ],
    youtubeRecommendations: [
      {
        id: 'seo-guide',
        title: 'SEO for Beginners 2025',
        description: 'Complete guide to search engine optimization',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '35:20'
      },
      {
        id: 'social-media-ads',
        title: 'Social Media Advertising Masterclass',
        description: 'Run profitable ads on Facebook, Instagram, and more',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '28:45'
      },
      {
        id: 'email-marketing',
        title: 'Email Marketing That Converts',
        description: 'Build and nurture email lists that drive sales',
        youtubeId: 'dQw4w9WgXcQ',
        duration: '31:30'
      }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What does the "A" in AIDA represent in the customer journey?',
        options: [
          'Action and Advertising',
          'Awareness and Action',
          'Analytics and Assessment',
          'Attention and Acquisition'
        ],
        correctAnswer: 1,
        explanation: 'In the AIDAR customer journey model, the two A\'s represent Awareness (customer realizes they have a need) and Action (customer makes a purchase or conversion).'
      },
      {
        id: 'q2',
        question: 'How much faster do businesses grow when they embrace digital marketing?',
        options: [
          '1.5x faster',
          '2.8x faster',
          '3.2x faster',
          '4.1x faster'
        ],
        correctAnswer: 1,
        explanation: 'Businesses that embrace digital marketing grow revenue 2.8x faster than those that don\'t, highlighting the importance of digital marketing strategies.'
      },
      {
        id: 'q3',
        question: 'Which is NOT mentioned as a key traffic metric?',
        options: [
          'Website visitors',
          'Page views',
          'Social media followers',
          'Session duration'
        ],
        correctAnswer: 2,
        explanation: 'Social media followers is an engagement metric, not a traffic metric. Traffic metrics focus on website performance like visitors, page views, and session duration.'
      }
    ]
  }
];
