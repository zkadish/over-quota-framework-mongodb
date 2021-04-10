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

const blocks = [
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
    id: uuid.v4(),
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

const talkTracks = [
  {
    id: uuid.v4(),
    label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    type: 'talk-track',
    containers: [],
  },
  {
    id: uuid.v4(),
    label: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    value: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    type: 'talk-track',
    containers: [],
  }
];

const battleCards = [
  {
    id: uuid.v4(),
    label: `General Competitive`,
    type: 'battle-card',
    talkTracks: [talkTracks[0].id, talkTracks[1].id],
  },
  {
    id: uuid.v4(),
    label: `Specific Competitor`,
    type: 'battle-card',
    talkTracks: [talkTracks[2].id, talkTracks[3].id, talkTracks[4].id, talkTracks[5].id],
  },
  {
    id: uuid.v4(),
    label: `Customer Story`,
    type: 'battle-card',
    talkTracks: [talkTracks[6].id],
  },
  {
    id: uuid.v4(),
    label: `Security`,
    type: 'battle-card',
    talkTracks: [talkTracks[7].id],
  }
];

talkTracks[0].containers.push(battleCards[0].id)
talkTracks[1].containers.push(battleCards[0].id)
talkTracks[2].containers.push(battleCards[1].id)
talkTracks[3].containers.push(battleCards[1].id)
talkTracks[4].containers.push(battleCards[1].id)
talkTracks[5].containers.push(battleCards[1].id)
talkTracks[6].containers.push(battleCards[2].id)
talkTracks[7].containers.push(battleCards[3].id)

db.createCollection('battleCards');
db.battleCards.insert(battleCards);

db.createCollection('talkTracks');
db.talkTracks.insert(talkTracks);

const elements = [
  // Inbound Discovery
  {
    container_id: blocks[0],
    id: uuid.v4(),
    label: 'Send agenda/soft reminder email',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[0],
    id: uuid.v4(),
    label: 'Connect on LinkedIn',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[1],  // note: this may not be needed, look into removing
    id: uuid.v4(),
    label: 'Attendees',
    type: 'attendees',
    value: false,
  },
  {
    container_id: blocks[2],
    id: uuid.v4(),
    label: 'Company Name',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[2],
    id: uuid.v4(),
    label: 'Industry',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[2],
    id: uuid.v4(),
    label: 'Current Event',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[2],
    id: uuid.v4(),
    label: 'Number of reps on sales team',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[2],
    id: uuid.v4(),
    label: 'Techstack',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[3],
    id: uuid.v4(),
    label: 'Name',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[3],
    id: uuid.v4(),
    label: 'Title',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[3],
    id: uuid.v4(),
    label: 'Persona pain points',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[3],
    id: uuid.v4(),
    label: 'Other members of their team to involve later?',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[4],
    id: uuid.v4(),
    label: 'Time check',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[4],
    id: uuid.v4(),
    label: 'Discuss what prompted your interest',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[4],
    id: uuid.v4(),
    label: 'I can share more about SkillUp',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[4],
    id: uuid.v4(),
    label: 'If there is a fit, we talk next steps',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `Other sales leaders come to us because they have a problem with low or inconsistent quota attainment across their team. I'd be curious to learn, what prompted your interest in SkillUp?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `How long has that been a challenge for you?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `We typically find low quota attainment stems from not having a proven sales framework for reps to use or little time spent coaching reps so they can adopt it. Specific to your sales process, what do you feel is preventing your team from hitting quota?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `What kinds of things have you tried or implemented already to address this?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `Sales framework? How did you build it and how do you share it across the team? How do you measure adoption?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `Coaching? How and how much time does a manager spend/week with a rep coaching?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `Why weren't those attempts successful?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[5],
    id: uuid.v4(),
    label: `Can you help me understand the makeup of the team (#reps/managers/etc)?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[6],
    id: uuid.v4,
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[6],
    id: uuid.v4,
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[6],
    id: uuid.v4,
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[6],
    id: uuid.v4,
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[6],
    id: uuid.v4,
    label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuracy, and new rep onboarding. Do you see room for improvement in any of those areas?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[7],
    id: uuid.v4(),
    label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[7],
    id: uuid.v4(),
    label: `You have lot's of priorities. Where would you say this sits on your overall priority list?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[7],
    id: uuid.v4(),
    label: `Being such a high priority, when are you hoping to have a solution in place by?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[7],
    id: uuid.v4(),
    label: `I'm curious, is there a particular reason we're shooting for that date?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[7],
    id: uuid.v4(),
    label: `So I can best support your evaluation and decision, can you walk me through how you will decide which solution is best?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[8],
    id: uuid.v4(),
    label: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[9], // note: this may not be needed, look into removing
    id: uuid.v4(),
    label: 'actions',
    type: 'actions',
    value: ''
  },
  {
    container_id: blocks[10],
    id: uuid.v4(),
    label: 'notes',
    type: 'notes-field',
    value: ''
  },
  {
    container_id: blocks[11], // element index 37
    id: uuid.v4(),
    label: 'Battle Cards',
    type: 'battle-cards',
    value: [battleCards[0].id, battleCards[1].id]
  },
  {
    container_id: blocks[12],
    id: uuid.v4(),
    label: `Send followup email summary & resources`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[12],
    id: uuid.v4(),
    label: `Update Opportunity Details`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[12],
    id: uuid.v4(),
    label: `Add notes to CRM`,
    type: 'check-list',
    value: false,
  },
  // Outbound Discovery
  {
    container_id: blocks[13],
    id: uuid.v4(),
    label: 'Send agenda/soft reminder email',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[13],
    id: uuid.v4(),
    label: `Fill in the 'validate research' information`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[14],  // note: this may not be needed, look into removing
    id: uuid.v4(),
    label: 'Attendees',
    type: 'attendees',
    value: false,
  },
  {
    container_id: blocks[15],
    id: uuid.v4(),
    label: 'Company Name',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[15],
    id: uuid.v4(),
    label: 'Industry',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[15],
    id: uuid.v4(),
    label: 'Current Event',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[15],
    id: uuid.v4(),
    label: 'Number of reps on sales team',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[15],
    id: uuid.v4(),
    label: 'Techstack',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[16],
    id: uuid.v4(),
    label: 'Name',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[16],
    id: uuid.v4(),
    label: 'Title',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[16],
    id: uuid.v4(),
    label: 'Persona pain points',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[16],
    id: uuid.v4(),
    label: 'Other members of their team to involve later?',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[17],
    id: uuid.v4(),
    label: 'Time check',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[17],
    id: uuid.v4(),
    label: `Share why we reached out and see if you're experiencing the common challenges we help with`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[17],
    id: uuid.v4(),
    label: 'Provide an overview on how we can help',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[17],
    id: uuid.v4(),
    label: 'If it make sense, talk next steps',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[17],
    id: uuid.v4(),
    label: 'Fair? Anything you want to add?',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[18],
    id: uuid.v4(),
    label: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[18],
    id: uuid.v4(),
    label: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[18],
    id: uuid.v4(),
    label: `Other sales leaders we work with experience long new rep ramp times, poor adoption of the sales methodology, and low quota attainment. Are you challenged in any of these or perhaps other areas?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[19],
    id: uuid.v4(),
    label: `How long has that been a challenge?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[19],
    id: uuid.v4(),
    label: `What do you think is the main cause of it?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[19],
    id: uuid.v4(),
    label: `What do you feel is the biggest impacted by not addressing the challenge?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[19],
    id: uuid.v4(),
    label: `What have you tried to address it?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[19],
    id: uuid.v4(),
    label: `What sort of tools and trainings have you implemented?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[20],
    id: uuid.v4(),
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[20],
    id: uuid.v4(),
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[20],
    id: uuid.v4(),
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[20],
    id: uuid.v4(),
    label: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[20],
    id: uuid.v4(),
    label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuarcy, and new rep onboarding. Do you see room for improvement in any of those areas?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[21],
    id: uuid.v4(),
    label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[21],
    id: uuid.v4(),
    label: `I know we contacted you and this may not have been on your immediate priority list, but how important would you say this is for you to get figured out?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[21],
    id: uuid.v4(),
    label: `Being such a high priority, when are you looking to have a solution in place by?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[21],
    id: uuid.v4(),
    label: `I'm curious, is there a particular reason for that timeline?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[21],
    id: uuid.v4(),
    label: `How have you evaluated solutions like ours in the past?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[22],
    id: uuid.v4(),
    label: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[22],
    id: uuid.v4(),
    label: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[22],
    id: uuid.v4(),
    label: `What has the process looked like in the past for you to evaluate, decide, and secure budget for a tool like ours?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[23], // note: this may not be needed, look into removing
    id: uuid.v4(),
    label: 'actions',
    type: 'actions',
    value: ''
  },
  {
    container_id: blocks[24],
    id: uuid.v4(),
    label: 'notes',
    type: 'notes-field',
    value: ''
  },
  {
    container_id: blocks[25], // element index 81
    id: uuid.v4(),
    label: 'Battle Cards',
    type: 'battle-cards',
    value: [battleCards[0].id, battleCards[1].id, battleCards[2].id, battleCards[3].id],
  },
  {
    container_id: blocks[26],
    id: uuid.v4(),
    label: `Send followup email summary & resources`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[26],
    id: uuid.v4(),
    label: `Connect on LinkedIn`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[26],
    id: uuid.v4(),
    label: `Overline Executive Sponsor email?`,
    type: 'check-list',
    value: false,
  },
  // Demo Loop: Low Quota
  {
    container_id: blocks[27],
    id: uuid.v4(),
    label: `Send agenda/soft reminder email (include usecase specific case study)`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[27],
    id: uuid.v4(),
    label: `Confirm LinkedIn connection (view their LinkedIn & engage)`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[27],
    id: uuid.v4(),
    label: `Fill in: Recap: What We Know`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[28],  // note: this may not be needed, look into removing
    id: uuid.v4(),
    label: 'Attendees',
    type: 'attendees',
    value: false,
  },
  {
    container_id: blocks[29],
    id: uuid.v4(),
    label: 'Company Name',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[29],
    id: uuid.v4(),
    label: 'Industry',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[29],
    id: uuid.v4(),
    label: 'Current Event',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[29],
    id: uuid.v4(),
    label: 'Number of reps on sales team',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[29],
    id: uuid.v4(),
    label: 'Techstack',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[30],
    id: uuid.v4(),
    label: 'Name',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[30],
    id: uuid.v4(),
    label: 'Title',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[30],
    id: uuid.v4(),
    label: 'Persona pain points',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[30],
    id: uuid.v4(),
    label: 'Other members of their team to involve later?',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[31],
    id: uuid.v4(),
    label: 'Time check',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[31],
    id: uuid.v4(),
    label: `Quick recap of our conversation last time`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[31],
    id: uuid.v4(),
    label: `Jump into a demo specific to how we help with increasing quota attainment`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[31],
    id: uuid.v4(),
    label: 'Talk next steps and who needs to be included - fair?',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[31],
    id: uuid.v4(),
    label: 'Anything you would like to add?',
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[32],
    id: uuid.v4(),
    label: 'Main point: Low quota attainment',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[32],
    id: uuid.v4(),
    label: 'Root Causes',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[32],
    id: uuid.v4(),
    label: 'Significant Impact it has',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[32],
    id: uuid.v4(),
    label: 'Timeline to Resolve',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[32],
    id: uuid.v4(),
    label: 'Decision/Evaluation Process',
    type: 'research-field',
    value: '',
  },
  {
    container_id: blocks[32],
    id: uuid.v4(),
    label: 'Has any of this changed or is anything missing?',
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[33],
    id: uuid.v4(),
    label: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[33],
    id: uuid.v4(),
    label: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[33],
    id: uuid.v4(),
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[33],
    id: uuid.v4(),
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[33],
    id: uuid.v4(),
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[33],
    id: uuid.v4(),
    label: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[34],
    id: uuid.v4(),
    label: `If I'm rep, I'll login to Skill Up to before my calls to begin preparing, where do your reps take notes and prepare for calls today?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[34],
    id: uuid.v4(),
    label: 'How often do those notes make it into CRM?',
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[34],
    id: uuid.v4(),
    label: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[34],
    id: uuid.v4(),
    label: `We have some examples here, but I'd be curious, what types of things can your reps do before their calls to set themselves up for success?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[35],
    id: uuid.v4(),
    label: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[34],
    id: uuid.v4(),
    label: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[35],
    id: uuid.v4(),
    label: `Have you ever been reviewing your forecast and found a deal forecasted but missing critical info like timeline or impact? Using SalesCoach your reps will always remember to ask those questions.`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[35],
    id: uuid.v4(),
    label: `SalesCoach will also enable reps to take down deliveribles they owe after the call by assigning themsleves action items, which automatically creates a post call task.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[36],
    id: uuid.v4(),
    label: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[37],
    id: uuid.v4(),
    label: `Where have you documented your the various aspects of your sales motion today?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[37],
    id: uuid.v4(),
    label: `What has been the feedback from the team on how usable of accessible that is?`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[37],
    id: uuid.v4(),
    label: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easeily disperse them across the team by having them use the best framework for each call.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[37],
    id: uuid.v4(),
    label: `This is completely customizable and is a point and click set up.`,
    type: 'talk-track',
  },
  {
    container_id: blocks[38],
    id: uuid.v4(),
    id: 'bKkG1osMwgKLywCCjp3JrQ',
    label: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[38],
    id: uuid.v4(),
    id: 'a6HvgeRom3cgD6qjE83iHD',
    label: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    type: 'talk-track',
  },
  {
    container_id: blocks[38],
    id: uuid.v4(),
    id: 'XDGMTCtebzf2WyAKc666q',
    label: `Help me understand the things you need to help make a decision.`,
    type: 'question-answer',
    value: '',
  },
  {
    container_id: blocks[39], // note: this may not be needed, look into removing
    id: uuid.v4(),
    label: 'actions',
    type: 'actions',
    value: ''
  },
  {
    container_id: blocks[40],
    id: uuid.v4(),
    label: 'notes',
    type: 'notes-field',
    value: ''
  },
  {
    container_id: blocks[41], // element index 133
    id: uuid.v4(),
    label: 'Battle Cards',
    type: 'battle-cards',
    value: [battleCards[2].id, battleCards[3].id]
  },
  {
    container_id: blocks[42],
    id: uuid.v4(),
    label: `Send followup email & resources`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[42],
    id: uuid.v4(),
    label: `Verify connect on LinkedIn (view and engage)`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[42],
    id: uuid.v4(),
    label: `Overline Executive Sponsor email?`,
    type: 'check-list',
    value: false,
  },
  {
    container_id: blocks[42],
    id: uuid.v4(),
    label: `Introduction email to team leads + resources for them?`,
    type: 'check-list',
    value: false,
  }
];
db.createCollection('elements');
db.elements.insert(elements);



// Create a new DB and insert a user 
// use sessionsDev;
// var db = db.getSiblingDB('sessionsDev');

// db.createUser(
//   {
//     user: 'sessionuser',
//     pwd: 'sessionuserpassword',
//     roles: [
//       {
//         role: 'readWrite',
//         db: 'sessionsDev',
//       }
//     ],
//   }
// );