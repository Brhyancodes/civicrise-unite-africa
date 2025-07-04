
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
  }
];
