load('../node_modules/js-uuid/js-uuid.js');
const uuid = UUID();

db.createUser(
  {
    user: 'frameworkuser',
    pwd: 'frameworkuserpassword',
    roles: [
      {
        role: 'readWrite',
        db: 'frameworkServiceDev',
      }
    ],
  }
);

db.createUser(
  {
    user: 'frameworkadmin',
    pwd: 'frameworkadminpassword',
    roles: [
      {
        role: 'userAdminAnyDatabase',
        db: 'admin',
      },
    ],
  }
)

// TEMPLATES
const templates = [
  {
    id: uuid.v4(),
    label: 'Inbound Discovery'
  },
  {
    id: uuid.v4(),
    label: 'Outbound Discovery'
  },
  {
    id: uuid.v4(),
    label: 'Demo Loop: Low Quota'
  }
]
db.createCollection('templates');
db.templates.insert(templates);

// BLOCKS
const blocks = [
  // Inbound Discovery
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Pre-call Action Items',
    type: 'pre-call',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Attendees',
    type: 'attendees',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Pre-call Company Research',
    type: 'default',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Pre-call Contact Research',
    type: 'default',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Agenda',
    type: 'default',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Discovery 1',
    type: 'default',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Value Proposition',
    type: 'talk-track',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Discovery 2',
    type: 'default',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Next Steps',
    type: 'talk-track',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Actions',
    type: 'actions',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Notes',
    type: 'notes',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(), // index 11
    label: 'Battle Cards',
    type: 'battle-cards',
  },
  {
    container_id: templates[0].id,
    id: uuid.v4(),
    label: 'Post-call Action Item',
    type: 'post-call',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Pre-call Action Items',
    type: 'pre-call',
  },
  // Outbound Discovery
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Attendees',
    type: 'attendees',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Pre-call Company Research',
    type: 'default',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Pre-call Contact Research',
    type: 'default',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Agenda',
    type: 'default',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Validate',
    type: 'talk-track',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Discovery 1',
    type: 'default',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Value Proposition',
    type: 'talk-track',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Discovery 2',
    type: 'default',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Next Steps',
    type: 'talk-track',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Actions',
    type: 'actions',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Notes',
    type: 'notes',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Battle Cards',
    type: 'battle-cards',
  },
  {
    container_id: templates[1].id,
    id: uuid.v4(),
    label: 'Post-call Action Item',
    type: 'post-call',
  },
  // Demo Loop: Low Quota'
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Pre-call Action Items',
    type: 'pre-call',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Attendees',
    type: 'attendees',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Pre-call Company Research',
    type: 'default',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Pre-call Contact Research',
    type: 'default',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Agenda',
    type: 'default',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Recap: What We Know',
    type: 'default',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Demo Primer',
    type: 'talk-track',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Demo Pre-call Platform',
    type: 'default',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Demo SalesCoach',
    type: 'talk-track',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Demo Post-call Platform',
    type: 'talk-track',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Demo Framework Builder',
    type: 'default',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Next Steps',
    type: 'talk-track',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Actions',
    type: 'actions',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Notes',
    type: 'notes',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Battle Cards',
    type: 'battle-cards',
  },
  {
    container_id: templates[2].id,
    id: uuid.v4(),
    label: 'Post-call Action Items',
    type: 'post-call',
  }
];
db.createCollection('blocks');
db.blocks.insert(blocks);

// TALK_TRACKS
const talktracks = [
  {
    id: uuid.v4(), // 0
    label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 1
    label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 2
    label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 3
    label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 4
    label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 5
    label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 6
    label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    type: 'talk-track',
  },
  { // index 7
    id: uuid.v4(), // 7
    label: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    value: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 8
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 9
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 10
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 11
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // index 12
    label: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    value: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 13
    label: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    value: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // index 14
    label: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    value: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), //15
    label: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    value: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // index 16
    label: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    value: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 17
    label: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    value: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 18
    label: `SalesCoach will also enable reps to take down deliveribles they owe after the call by assigning themsleves action items, which automatically creates a post call task.`,
    value: `SalesCoach will also enable reps to take down deliveribles they owe after the call by assigning themsleves action items, which automatically creates a post call task.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // index 19
    label: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    value: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 20
    label: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    value: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 21
    label: `This is completely customizable and is a point and click set up.`,
    value: `This is completely customizable and is a point and click set up.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 22
    label: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    value: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(), // 23
    label: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    value: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    type: 'talk-track',
  },
];

// BATTLE_CARDS
const battlecards = [
  {
    id: uuid.v4(),
    label: `General Competitive`,
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[0].id,
        label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
        value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
        type: 'talk-track',
      },
      {
        id: talktracks[1].id,
        label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
        value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: uuid.v4(),
    label: `Specific Competitor`,
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[2].id,
        label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        type: 'talk-track',
      },
      {
        id: talktracks[3].id,
        label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        type: 'talk-track',
      },
      {
        id: talktracks[4].id,
        label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        type: 'talk-track',
      },
      {
        id: talktracks[5].id,
        label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: uuid.v4(),
    label: `Customer Story`,
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[6].id,
        label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
        value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
        type: 'talk-track',
      },
    ],
  },
  {
    id: uuid.v4(),
    label: `Security`,
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[7].id,
        label: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
        value: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
        type: 'talk-track',
      }
    ],
  }
];

db.createCollection('battlecards');
db.battlecards.insert(battlecards);

db.createCollection('talktracks');
db.talktracks.insert(talktracks);

// ELEMENTS
const elements = [
  // Inbound Discovery
  {
    id: uuid.v4(),
    container_id: blocks[0].id,
    label: 'Send agenda/soft reminder email',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[0].id,
    label: 'Connect on LinkedIn',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[1].id,  // note: this may not be needed, look into removing
    label: 'Attendees',
    type: 'attendees',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[2].id,
    label: 'Company Name',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[2].id,
    label: 'Industry',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[2].id,
    label: 'Current Event',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[2].id,
    label: 'Number of reps on sales team',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[2].id,
    label: 'Techstack',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[3].id,
    label: 'Name',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[3].id,
    label: 'Title',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[3].id,
    label: 'Persona pain points',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[3].id,
    label: 'Other members of their team to involve later?',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[4].id,
    label: 'Time check',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[4].id,
    label: 'Discuss what prompted your interest',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[4].id,
    label: 'I can share more about SkillUp',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[4].id,
    label: 'If there is a fit, we talk next steps',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `Other sales leaders come to us because they have a problem with low or inconsistent quota attainment across their team. I'd be curious to learn, what prompted your interest in SkillUp?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `How long has that been a challenge for you?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `We typically find low quota attainment stems from not having a proven sales framework for reps to use or little time spent coaching reps so they can adopt it. Specific to your sales process, what do you feel is preventing your team from hitting quota?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `What kinds of things have you tried or implemented already to address this?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `Sales framework? How did you build it and how do you share it across the team? How do you measure adoption?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `Coaching? How and how much time does a manager spend/week with a rep coaching?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `Why weren't those attempts successful?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[5].id,
    label: `Can you help me understand the makeup of the team (#reps/managers/etc)?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[8].id,
    container_id: blocks[6].id,
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    id: talktracks[9].id,
    container_id: blocks[6].id,
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    id: talktracks[10].id,
    container_id: blocks[6].id,
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    id: talktracks[11].id,
    container_id: blocks[6].id,
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[6].id,
    label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuracy, and new rep onboarding. Do you see room for improvement in any of those areas?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[7].id,
    label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[7].id,
    label: `You have lot's of priorities. Where would you say this sits on your overall priority list?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[7].id,
    label: `Being such a high priority, when are you hoping to have a solution in place by?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[7].id,
    label: `I'm curious, is there a particular reason we're shooting for that date?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[7].id,
    label: `So I can best support your evaluation and decision, can you walk me through how you will decide which solution is best?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[12].id,
    container_id: blocks[8].id,
    label: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    value: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[9].id, // note: this may not be needed, look into removing
    label: 'actions',
    type: 'actions',
    value: ''
  },
  {
    id: uuid.v4(),
    container_id: blocks[10].id,
    label: 'notes',
    type: 'notes-field',
    value: ''
  },
  {
    id: battlecards[0].id,
    container_id: blocks[11].id, // element index 37
    label: 'General Competitive',
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[0].id,
        label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
        value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
        type: 'talk-track',
      },
      {
        id: talktracks[1].id,
        label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
        value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: battlecards[1].id,
    container_id: blocks[11].id, // element index 38
    label: 'Specific Competitor',
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[2].id,
        label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        type: 'talk-track',
      },
      {
        id: talktracks[3].id,
        label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        type: 'talk-track',
      },
      {
        id: talktracks[4].id,
        label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        type: 'talk-track',
      },
      {
        id: talktracks[5].id,
        label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: uuid.v4(),
    container_id: blocks[12].id,
    label: `Send followup email summary & resources`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[12].id,
    label: `Update Opportunity Details`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[12].id,
    label: `Add notes to CRM`,
    type: 'check-list',
    value: false,
  },
  // Outbound Discovery
  {
    id: uuid.v4(),
    container_id: blocks[13].id,
    label: 'Send agenda/soft reminder email',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[13].id,
    label: `Fill in the 'validate research' information`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[14].id,  // note: this may not be needed, look into removing
    label: 'Attendees',
    type: 'attendees',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[15].id,
    label: 'Company Name',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[15].id,
    label: 'Industry',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[15].id,
    label: 'Current Event',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[15].id,
    label: 'Number of reps on sales team',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[15].id,
    label: 'Techstack',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[16].id,
    label: 'Name',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[16].id,
    label: 'Title',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[16].id,
    label: 'Persona pain points',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[16].id,
    label: 'Other members of their team to involve later?',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[17].id,
    label: 'Time check',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[17].id,
    label: `Share why we reached out and see if you're experiencing the common challenges we help with`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[17].id,
    label: 'Provide an overview on how we can help',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[17].id,
    label: 'If it make sense, talk next steps',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[17].id,
    label: 'Fair? Anything you want to add?',
    type: 'check-list',
    value: false,
  },
  {
    id: talktracks[13].id,
    container_id: blocks[18].id,
    label: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    value: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    type: 'talk-track',
  },
  {
    id: talktracks[14].id,
    container_id: blocks[18].id,
    label: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    value: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[18].id,
    label: `Other sales leaders we work with experience long new rep ramp times, poor adoption of the sales methodology, and low quota attainment. Are you challenged in any of these or perhaps other areas?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[19].id,
    label: `How long has that been a challenge?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[19].id,
    label: `What do you think is the main cause of it?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[19].id,
    label: `What do you feel is the biggest impacted by not addressing the challenge?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[19].id,
    label: `What have you tried to address it?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[19].id,
    label: `What sort of tools and trainings have you implemented?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[8].id,
    container_id: blocks[20].id,
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    id: talktracks[9].id,
    container_id: blocks[20].id,
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    id: talktracks[10].id,
    container_id: blocks[20].id,
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    id: talktracks[11].id,
    container_id: blocks[20].id,
    label: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[20].id,
    label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuarcy, and new rep onboarding. Do you see room for improvement in any of those areas?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[21].id,
    label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[21].id,
    label: `I know we contacted you and this may not have been on your immediate priority list, but how important would you say this is for you to get figured out?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[21].id,
    label: `Being such a high priority, when are you looking to have a solution in place by?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[21].id,
    label: `I'm curious, is there a particular reason for that timeline?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[21].id,
    label: `How have you evaluated solutions like ours in the past?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[22].id,
    label: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[22].id,
    label: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[22].id,
    label: `What has the process looked like in the past for you to evaluate, decide, and secure budget for a tool like ours?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[23].id, // note: this may not be needed, look into removing
    label: 'actions',
    type: 'actions',
    value: ''
  },
  {
    id: uuid.v4(),
    container_id: blocks[24].id,
    label: 'notes',
    type: 'notes-field',
    value: ''
  },
  {
    id: battlecards[0].id,
    container_id: blocks[25].id, // element index 81
    label: 'General Competitive',
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[0].id,
        label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
        value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
        type: 'talk-track',
      },
      {
        id: talktracks[1].id,
        label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
        value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: battlecards[1].id,
    container_id: blocks[25].id, // element index 82
    label: 'Specific Competitor',
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[2].id,
        label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        type: 'talk-track',
      },
      {
        id: talktracks[3].id,
        label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        type: 'talk-track',
      },
      {
        id: talktracks[4].id,
        label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        type: 'talk-track',
      },
      {
        id: talktracks[5].id,
        label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: battlecards[2].id,
    container_id: blocks[25].id, // element index 83
    label: 'Customer Story',
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[6].id,
        label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
        value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
        type: 'talk-track',
      },
    ],
  },
  {
    id: battlecards[3].id,
    container_id: blocks[25].id, // element index 84
    label: 'Security',
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[7].id,
        label: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
        value: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
        type: 'talk-track',
      }
    ],
  },
  {
    id: uuid.v4(),
    container_id: blocks[26].id,
    label: `Send followup email summary & resources`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[26].id,
    label: `Connect on LinkedIn`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[26].id,
    label: `Overline Executive Sponsor email?`,
    type: 'check-list',
    value: false,
  },
  // Demo Loop: Low Quota
  {
    id: uuid.v4(),
    container_id: blocks[27].id,
    label: `Send agenda/soft reminder email (include usecase specific case study)`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[27].id,
    label: `Confirm LinkedIn connection (view their LinkedIn & engage)`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[27].id,
    label: `Fill in: Recap: What We Know`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[28].id,  // note: this may not be needed, look into removing
    label: 'Attendees',
    type: 'attendees',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[29].id,
    label: 'Company Name',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[29].id,
    label: 'Industry',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[29].id,
    label: 'Current Event',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[29].id,
    label: 'Number of reps on sales team',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[29].id,
    label: 'Techstack',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[30].id,
    label: 'Name',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[30].id,
    label: 'Title',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[30].id,
    label: 'Persona pain points',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[30].id,
    label: 'Other members of their team to involve later?',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[31].id,
    label: 'Time check',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[31].id,
    label: `Quick recap of our conversation last time`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[31].id,
    label: `Jump into a demo specific to how we help with increasing quota attainment`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[31].id,
    label: 'Talk next steps and who needs to be included - fair?',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[31].id,
    label: 'Anything you would like to add?',
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[32].id,
    label: 'Main point: Low quota attainment',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[32].id,
    label: 'Root Causes',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[32].id,
    label: 'Significant Impact it has',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[32].id,
    label: 'Timeline to Resolve',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[32].id,
    label: 'Decision/Evaluation Process',
    type: 'research-field',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[32].id,
    label: 'Has any of this changed or is anything missing?',
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[33].id,
    label: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    value: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[33].id,
    label: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    value: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    type: 'talk-track',
  },
  {
    id: talktracks[8].id,
    container_id: blocks[33].id,
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    id: talktracks[9].id,
    container_id: blocks[33].id,
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    id: talktracks[10].id,
    container_id: blocks[33].id,
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    id: talktracks[11].id,
    container_id: blocks[33].id,
    label: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[34].id,
    label: `If I'm rep, I'll login to Skill Up to before my calls to begin preparing, where do your reps take notes and prepare for calls today?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[34].id,
    label: 'How often do those notes make it into CRM?',
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[15].id,
    container_id: blocks[34].id,
    label: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    value: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[34].id,
    label: `We have some examples here, but I'd be curious, what types of things can your reps do before their calls to set themselves up for success?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[16].id,
    container_id: blocks[35].id,
    label: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    value: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    type: 'talk-track',
  },
  {
    id: talktracks[17].id,
    container_id: blocks[34].id,
    label: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    value: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[35].id,
    label: `Have you ever been reviewing your forecast and found a deal forecasted but missing critical info like timeline or impact? Using SalesCoach your reps will always remember to ask those questions.`,
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[18].id,
    container_id: blocks[35].id,
    label: `SalesCoach will also enable reps to take down deliveribles they owe after the call by assigning themsleves action items, which automatically creates a post call task.`,
    value: `SalesCoach will also enable reps to take down deliveribles they owe after the call by assigning themsleves action items, which automatically creates a post call task.`,
    type: 'talk-track',
  },
  {
    id: talktracks[19].id,
    container_id: blocks[36].id,
    label: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    value: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[37].id,
    label: `Where have you documented your the various aspects of your sales motion today?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[37].id,
    label: `What has been the feedback from the team on how usable of accessible that is?`,
    type: 'question-answer',
    value: '',
  },
  {
    id: talktracks[20].id,
    container_id: blocks[37].id,
    label: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    value: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    type: 'talk-track',
  },
  {
    id: talktracks[21].id,
    container_id: blocks[37].id,
    label: `This is completely customizable and is a point and click set up.`,
    value: `This is completely customizable and is a point and click set up.`,
    type: 'talk-track',
  },
  {
    id: talktracks[22].id,
    container_id: blocks[38].id,
    label: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    value: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    type: 'talk-track',
  },
  {
    id: talktracks[23].id,
    container_id: blocks[38].id,
    label: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    value: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    type: 'talk-track',
  },
  {
    id: uuid.v4(),
    container_id: blocks[38].id,
    label: `Help me understand the things you need to help make a decision.`,
    type: 'question-answer',
    value: '',
  },
  {
    id: uuid.v4(),
    container_id: blocks[39].id, // note: this may not be needed, look into removing
    label: 'actions',
    type: 'actions',
    value: ''
  },
  {
    id: uuid.v4(),
    container_id: blocks[40].id,
    label: 'notes',
    type: 'notes-field',
    value: ''
  },
  {
    id: battlecards[1].id,
    container_id: blocks[41].id,
    label: `Specific Competitor`,
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[2].id,
        label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
        type: 'talk-track',
        containers: [],
      },
      {
        id: talktracks[3].id,
        label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
        type: 'talk-track',
        containers: [],
      },
      {
        id: talktracks[4].id,
        label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
        type: 'talk-track',
        containers: [],
      },
      {
        id: talktracks[5].id,
        label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
        type: 'talk-track',
      },
    ]
  },
  {
    id: battlecards[3].id,
    container_id: blocks[41].id,
    label: `Customer Story`,
    type: 'battle-card',
    'talk-tracks': [
      {
        id: talktracks[6].id,
        label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
        value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
        type: 'talk-track',
      },
    ],
  },
  {
    id: uuid.v4(),
    container_id: blocks[42].id,
    label: `Send followup email & resources`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[42].id,
    label: `Verify connect on LinkedIn (view and engage)`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[42].id,
    label: `Overline Executive Sponsor email?`,
    type: 'check-list',
    value: false,
  },
  {
    id: uuid.v4(),
    container_id: blocks[42].id,
    label: `Introduction email to team leads + resources for them?`,
    type: 'check-list',
    value: false,
  }
];
db.createCollection('elements');
db.elements.insert(elements);

const battlecardelements = [
  {
    id: talktracks[0].id,
    container_id: battlecards[0].id,
    label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    type: 'talk-track',
  },
  {
    id: talktracks[1].id,
    container_id: battlecards[0].id,
    label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    type: 'talk-track',
  },
  {
    id: talktracks[2].id,
    container_id: battlecards[1].id,
    label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    type: 'talk-track',
  },
  {
    id: talktracks[3].id,
    container_id: battlecards[1].id,
    label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    type: 'talk-track',
  },
  {
    id: talktracks[4].id,
    container_id: battlecards[1].id,
    label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    type: 'talk-track',
  },
  {
    id: talktracks[5].id,
    container_id: battlecards[1].id,
    label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    type: 'talk-track',
  },
  {
    id: talktracks[6].id,
    container_id: battlecards[2].id,
    label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    type: 'talk-track',
  },
  {
    id: talktracks[7].id,
    container_id: battlecards[3].id,
    label: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    value: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    type: 'talk-track',
  }
];
db.createCollection('battlecardelements');
db.battlecardelements.insert(battlecardelements);
