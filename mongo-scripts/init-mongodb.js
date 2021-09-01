load('../node_modules/js-uuid/js-uuid.js');
const uuid = UUID();
const cleanId = () => uuid.v4().replace(/-/g, '');
// TODO: refactor to use UTC time
const weekday = dateObj => {
  let day = null;
  switch (dateObj.getDay()) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    default:
      day = 'Saturday';
  }

  return day;
};
const getMonth = dateObj => {
  let month = null;
  switch (dateObj.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    default:
      month = 'December';
  }
  return month;
};
const getTodayOffSet = (offSet = 0) => {
  const dateObj = new Date();
  const offSetObj = new Date(dateObj.setDate(dateObj.getDate() + offSet));
  const date = offSetObj.getDate();
  const year = offSetObj.getFullYear();
  return {
    date: `${weekday(offSetObj)}, ${getMonth(offSetObj)} ${date} ${year}`,
    dateObj: offSetObj,
  };
};

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
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'Inbound Discovery',
    blocks: [],
    system: true,
  },
  {
    id: uuid.v4(),
    corporate_id: '',
    label: 'Outbound Discovery',
    account_id: 'all-accounts',
    blocks: [],
    system: true,
  },
  {
    id: uuid.v4(),
    corporate_id: '',
    label: 'Demo Loop: Low Quota',
    account_id: 'all-accounts',
    blocks: [],
    system: true,
  },
];

const templateorders = [
  {
    id: uuid.v4(),
    account_id: 'all-accounts',
    corporate_id: null,
    templates: [
      templates[0].id,
      templates[1].id,
      templates[2].id,
    ],
    system: true,
  },
];

db.createCollection('templateorders');
db.templateorders.insert(templateorders);

// BLOCKS
const blocks = [
  { // Inbound Discovery
    id: uuid.v4(), // 0
    container_id: templates[0].id,
    label: 'Pre-call Action Items',
    type: 'pre-call',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 1
    container_id: templates[0].id,
    label: 'Attendees',
    type: 'attendees',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 2
    container_id: templates[0].id,
    label: 'Pre-call Company Research',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 3
    container_id: templates[0].id,
    label: 'Pre-call Contact Research',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 4
    container_id: templates[0].id,
    label: 'Agenda',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 5
    container_id: templates[0].id,
    label: 'Discovery 1',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 6
    container_id: templates[0].id,
    label: 'Value Proposition',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 7
    container_id: templates[0].id,
    label: 'Discovery 2',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 8
    container_id: templates[0].id,
    label: 'Next Steps',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 9
    container_id: templates[0].id,
    label: 'Actions',
    type: 'actions',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 10
    container_id: templates[0].id,
    label: 'Notes',
    type: 'notes',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 11
    container_id: templates[0].id,
    label: 'Battle Cards',
    type: 'battle-cards',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 12
    container_id: templates[0].id,
    label: 'Post-call Action Item',
    type: 'post-call',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 13
    container_id: templates[1].id,
    label: 'Pre-call Action Items',
    type: 'pre-call',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  { // Outbound Discovery
    id: uuid.v4(), // 14
    container_id: templates[1].id,
    label: 'Attendees',
    type: 'attendees',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 15
    container_id: templates[1].id,
    label: 'Pre-call Company Research',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 16
    container_id: templates[1].id,
    label: 'Pre-call Contact Research',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 17
    container_id: templates[1].id,
    label: 'Agenda',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 18
    container_id: templates[1].id,
    label: 'Validate',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 19
    container_id: templates[1].id,
    label: 'Discovery 1',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 20
    container_id: templates[1].id,
    label: 'Value Proposition',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 21
    container_id: templates[1].id,
    label: 'Discovery 2',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 22
    container_id: templates[1].id,
    label: 'Next Steps',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 23
    container_id: templates[1].id,
    label: 'Actions',
    type: 'actions',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 24
    container_id: templates[1].id,
    label: 'Notes',
    type: 'notes',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 25
    container_id: templates[1].id,
    label: 'Battle Cards',
    type: 'battle-cards',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 26
    container_id: templates[1].id,
    label: 'Post-call Action Item',
    type: 'post-call',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  { // Demo Loop: Low Quota'
    id: uuid.v4(), // 27
    container_id: templates[2].id,
    label: 'Pre-call Action Items',
    type: 'pre-call',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 28
    container_id: templates[2].id,
    label: 'Attendees',
    type: 'attendees',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 29
    container_id: templates[2].id,
    label: 'Pre-call Company Research',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 30
    container_id: templates[2].id,
    label: 'Pre-call Contact Research',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 31
    container_id: templates[2].id,
    label: 'Agenda',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 32
    container_id: templates[2].id,
    label: 'Recap: What We Know',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 33
    container_id: templates[2].id,
    label: 'Demo Primer',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 34
    container_id: templates[2].id,
    label: 'Demo Pre-call Platform',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 35
    container_id: templates[2].id,
    label: 'Demo SalesCoach',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 36
    container_id: templates[2].id,
    label: 'Demo Post-call Platform',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 37
    container_id: templates[2].id,
    label: 'Demo Framework Builder',
    type: 'default',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 38
    container_id: templates[2].id,
    label: 'Next Steps',
    type: 'talk-track',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 39
    container_id: templates[2].id,
    label: 'Actions',
    type: 'actions',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 40
    container_id: templates[2].id,
    label: 'Notes',
    type: 'notes',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 41
    container_id: templates[2].id,
    label: 'Battle Cards',
    type: 'battle-cards',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  },
  {
    id: uuid.v4(), // 42
    container_id: templates[2].id,
    label: 'Post-call Action Items',
    type: 'post-call',
    account_id: 'all-accounts',
    elements: [],
    system: true,
  }
];

for (let i = 0; i < blocks.length; i++) {
  if (i <= 12) {
    templates[0].blocks.push(blocks[i].id);
  }
  if (i >= 13 && i <= 26) {
    templates[1].blocks.push(blocks[i].id);
  }
  if (i >= 27) {
    templates[2].blocks.push(blocks[i].id);
  }
};

db.createCollection('templates');
db.templates.insert(templates);

// TALK_TRACKS
const talktracks = [
  {
    id: uuid.v4(), // 0
    corporate_id: '',
    account_id: 'all-accounts',
    label: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    value: `If you ask our competitors they will most likely tell you:\n- SkillUp is a small startup that might not be around in 6-12 months\n- We don't have AI, ML, or NLP\n- Or we lack enterprise grade security`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 1
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    value: `Truthfully, we are a small startup, but with such a high demand for this we're growing fast. We have decided not to include AI, ML quite yet (its coming) but we want to nail the best features first and then add intelligence. We do have inherent enterprise security because we have used best in class solutions to build SkillUp.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 2
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    value: `Balto - Targeting call centers, not B2B sales orgs which means their approach and platform are slightly misaligned for your specific use case.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 3
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    value: `Copilot - Our closest competitor but their solution is similar to a single feature on our platform (battle cards). They do not help support pre or post calls.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 4
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    value: `Dooly - Tight integration to SFDC and their mission is to help reps complete data entry to CRM not help you coach. I'm sure you can find some workarounds but they don't have the framework builder like SkillUp.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 5
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    value: `Chorus / Gong - These are not competitors. They are call recording and are essential to setting up a winning sales process. They would compliment your use of SkillUp.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 6
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    value: `Techsta - Came to us with a win rate of 15%. After implementing and using SkillUp just one quarter they hit a 25% win rate.`,
    type: 'talk-track',
    system: true,
  },
  { // index 7
    id: uuid.v4(), // 7
    corporate_id: '',
    account_id: 'all-accounts',
    label: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    value: `We have used best in class systems to build SkillUp and are continuously doing what we can to improve our security posture. In the meantime, we're happy to complete any security documentation you may have.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 8
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 9
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 10
    corporate_id: '',
    account_id: 'all-accounts',
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 11
    corporate_id: '',
    account_id: 'all-accounts',
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 12
    corporate_id: '',
    account_id: 'all-accounts',
    label: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    value: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 13
    corporate_id: '',
    account_id: 'all-accounts',
    label: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    value: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 14
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    value: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 15
    corporate_id: '',
    account_id: 'all-accounts',
    label: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    value: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 16
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    value: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 17
    corporate_id: '',
    account_id: 'all-accounts',
    label: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    value: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 18
    corporate_id: '',
    account_id: 'all-accounts',
    label: `SalesCoach will also enable reps to take down deliverables they owe after the call by assigning themselves action items, which automatically creates a post call task.`,
    value: `SalesCoach will also enable reps to take down deliverables they owe after the call by assigning themselves action items, which automatically creates a post call task.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 19
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    value: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 20
    corporate_id: '',
    account_id: 'all-accounts',
    label: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    value: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 21
    corporate_id: '',
    account_id: 'all-accounts',
    label: `This is completely customizable and is a point and click set up.`,
    value: `This is completely customizable and is a point and click set up.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 22
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    value: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 23
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    value: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 24
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`,
    value: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 25
    corporate_id: '',
    account_id: 'all-accounts',
    label: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`,
    value: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 26
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    value: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 27
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    value: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    type: 'talk-track',
    system: true,
  },
];

// BATTLE_CARDS
const battlecards = [
  {
    id: uuid.v4(), // 0
    corporate_id: '',
    account_id: 'all-accounts',
    label: `General Competitive`,
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: uuid.v4(), // 1
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Specific Competitor`,
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: uuid.v4(), // 2
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Customer Story`,
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: uuid.v4(), // 3
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Security`,
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  }
];

for (let i = 0; i < talktracks.length; i++) {
  if (i <= 1) battlecards[0]['talk-tracks'].push(talktracks[i].id);
  if (i <= 2 && i <= 5) battlecards[1]['talk-tracks'].push(talktracks[i].id);
  if (i === 6) battlecards[2]['talk-tracks'].push(talktracks[i].id);
  if (i === 7) battlecards[3]['talk-tracks'].push(talktracks[i].id);
};

db.createCollection('battlecards');
db.battlecards.insert(battlecards);

db.createCollection('talktracks');
db.talktracks.insert(talktracks);

// ELEMENTS
const elements = [
  { // Inbound Discovery
    id: uuid.v4(), // 0
    container_id: blocks[0].id,
    account_id: 'all-accounts',
    label: 'Send agenda/soft reminder email',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 1
    container_id: blocks[0].id,
    account_id: 'all-accounts',
    label: 'Connect on LinkedIn',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 2
    container_id: blocks[1].id,
    account_id: 'all-accounts',  // note: this may not be needed, look into removing
    label: 'Attendees',
    value: false,
    type: 'attendees',
    system: true,
  },
  {
    id: uuid.v4(), // 3
    container_id: blocks[2].id,
    account_id: 'all-accounts',
    label: 'Company Name',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 4
    container_id: blocks[2].id,
    account_id: 'all-accounts',
    label: 'Industry',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 5
    container_id: blocks[2].id,
    account_id: 'all-accounts',
    label: 'Current Event',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 6
    container_id: blocks[2].id,
    account_id: 'all-accounts',
    label: 'Number of reps on sales team',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 7
    container_id: blocks[2].id,
    account_id: 'all-accounts',
    label: 'Techstack',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 8
    container_id: blocks[3].id,
    account_id: 'all-accounts',
    label: 'Name',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 9
    container_id: blocks[3].id,
    account_id: 'all-accounts',
    label: 'Title',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 10
    container_id: blocks[3].id,
    account_id: 'all-accounts',
    label: 'Persona pain points',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 11
    container_id: blocks[3].id,
    account_id: 'all-accounts',
    label: 'Other members of their team to involve later?',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 12
    container_id: blocks[4].id,
    account_id: 'all-accounts',
    label: 'Time check',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 13
    container_id: blocks[4].id,
    account_id: 'all-accounts',
    label: 'Discuss what prompted your interest',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 14
    container_id: blocks[4].id,
    account_id: 'all-accounts',
    label: 'I can share more about SkillUp',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 15
    container_id: blocks[4].id,
    account_id: 'all-accounts',
    label: 'If there is a fit, we talk next steps',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 16
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `Other sales leaders come to us because they have a problem with low or inconsistent quota attainment across their team. I'd be curious to learn, what prompted your interest in SkillUp?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 17
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `How long has that been a challenge for you?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 18
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `We typically find low quota attainment stems from not having a proven sales framework for reps to use or little time spent coaching reps so they can adopt it. Specific to your sales process, what do you feel is preventing your team from hitting quota?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 19
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `What kinds of things have you tried or implemented already to address this?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 20
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `Sales framework? How did you build it and how do you share it across the team? How do you measure adoption?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 21
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `Coaching? How and how much time does a manager spend/week with a rep coaching?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 22
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `Why weren't those attempts successful?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 23
    container_id: blocks[5].id,
    account_id: 'all-accounts',
    label: `Can you help me understand the makeup of the team (#reps/managers/etc)?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 8, // 24 - id is talk-tracks index used while provisioning
    container_id: blocks[6].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 9, // 25
    container_id: blocks[6].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 10, // 26
    container_id: blocks[6].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 11, // 27
    container_id: blocks[6].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 28
    container_id: blocks[6].id,
    account_id: 'all-accounts',
    label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuracy, and new rep onboarding. Do you see room for improvement in any of those areas?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 29
    container_id: blocks[7].id,
    account_id: 'all-accounts',
    label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 30
    container_id: blocks[7].id,
    account_id: 'all-accounts',
    label: `You have lot's of priorities. Where would you say this sits on your overall priority list?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 31
    container_id: blocks[7].id,
    account_id: 'all-accounts',
    label: `Being such a high priority, when are you hoping to have a solution in place by?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 32
    container_id: blocks[7].id,
    account_id: 'all-accounts',
    label: `I'm curious, is there a particular reason we're shooting for that date?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 33
    container_id: blocks[7].id,
    account_id: 'all-accounts',
    label: `So I can best support your evaluation and decision, can you walk me through how you will decide which solution is best?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 12, // 34
    container_id: blocks[8].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    value: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 35
    container_id: blocks[9].id,
    account_id: 'all-accounts', // note: this may not be needed, look into removing
    label: 'actions',
    value: '',
    type: 'actions',
    system: true,
  },
  {
    id: uuid.v4(), // 36
    container_id: blocks[10].id,
    account_id: 'all-accounts', // note: this may not be needed, look into removing
    label: 'notes',
    value: '',
    type: 'notes-field',
    system: true,
  },
  {
    id: 0, // 37
    container_id: blocks[11].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'General Competitive',
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: 1,  // 38
    container_id: blocks[11].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'Specific Competitor',
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: uuid.v4(), // 39
    container_id: blocks[12].id,
    account_id: 'all-accounts',
    label: `Send followup email summary & resources`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 40
    container_id: blocks[12].id,
    account_id: 'all-accounts',
    label: `Update Opportunity Details`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 41
    container_id: blocks[12].id,
    account_id: 'all-accounts',
    label: `Add notes to CRM`,
    value: false,
    type: 'check-list',
    system: true,
  },
  { // Outbound Discovery
    id: uuid.v4(), // 42
    container_id: blocks[13].id,
    account_id: 'all-accounts',
    label: 'Send agenda/soft reminder email',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 43
    container_id: blocks[13].id,
    account_id: 'all-accounts',
    label: `Fill in the 'validate research' information`,
    value: false,
    type: 'check-list',
    system: true,
  },
  { // TODO: Attendees may not need element representation, look into removing
    id: uuid.v4(), // 44
    container_id: blocks[14].id,
    account_id: 'all-accounts',
    label: 'Attendees',
    value: false,
    type: 'attendees',
    system: true,
  },
  {
    id: uuid.v4(), // 45
    container_id: blocks[15].id,
    account_id: 'all-accounts',
    label: 'Company Name',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 46
    container_id: blocks[15].id,
    account_id: 'all-accounts',
    label: 'Industry',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 47
    container_id: blocks[15].id,
    account_id: 'all-accounts',
    label: 'Current Event',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 48
    container_id: blocks[15].id,
    account_id: 'all-accounts',
    label: 'Number of reps on sales team',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 49
    container_id: blocks[15].id,
    account_id: 'all-accounts',
    label: 'Techstack',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 50
    container_id: blocks[16].id,
    account_id: 'all-accounts',
    label: 'Name',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 51
    container_id: blocks[16].id,
    account_id: 'all-accounts',
    label: 'Title',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 52
    container_id: blocks[16].id,
    account_id: 'all-accounts',
    label: 'Persona pain points',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 53
    container_id: blocks[16].id,
    account_id: 'all-accounts',
    label: 'Other members of their team to involve later?',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 54
    container_id: blocks[17].id,
    account_id: 'all-accounts',
    label: 'Time check',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 55
    container_id: blocks[17].id,
    account_id: 'all-accounts',
    label: `Share why we reached out and see if you're experiencing the common challenges we help with`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 56
    container_id: blocks[17].id,
    account_id: 'all-accounts',
    label: 'Provide an overview on how we can help',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 57
    container_id: blocks[17].id,
    account_id: 'all-accounts',
    label: 'If it make sense, talk next steps',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 58
    container_id: blocks[17].id,
    account_id: 'all-accounts',
    label: 'Fair? Anything you want to add?',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: 13, // 59
    container_id: blocks[18].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    value: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 14, // 60
    container_id: blocks[18].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    value: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 61
    container_id: blocks[18].id,
    account_id: 'all-accounts',
    label: `Other sales leaders we work with experience long new rep ramp times, poor adoption of the sales methodology, and low quota attainment. Are you challenged in any of these or perhaps other areas?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 62
    container_id: blocks[19].id,
    account_id: 'all-accounts',
    label: `How long has that been a challenge?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 63
    container_id: blocks[19].id,
    account_id: 'all-accounts',
    label: `What do you think is the main cause of it?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 64
    container_id: blocks[19].id,
    account_id: 'all-accounts',
    label: `What do you feel is the biggest impacted by not addressing the challenge?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 65
    container_id: blocks[19].id,
    account_id: 'all-accounts',
    label: `What have you tried to address it?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 66
    container_id: blocks[19].id,
    account_id: 'all-accounts',
    label: `What sort of tools and trainings have you implemented?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 8, // 67
    container_id: blocks[20].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 9, // 68
    container_id: blocks[20].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 10, // 69
    container_id: blocks[20].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 11, // 70
    container_id: blocks[20].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 71
    container_id: blocks[20].id,
    account_id: 'all-accounts',
    label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuarcy, and new rep onboarding. Do you see room for improvement in any of those areas?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 72
    container_id: blocks[21].id,
    account_id: 'all-accounts',
    label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 73
    container_id: blocks[21].id,
    account_id: 'all-accounts',
    label: `I know we contacted you and this may not have been on your immediate priority list, but how important would you say this is for you to get figured out?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 74
    container_id: blocks[21].id,
    account_id: 'all-accounts',
    label: `Being such a high priority, when are you looking to have a solution in place by?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 75
    container_id: blocks[21].id,
    account_id: 'all-accounts',
    label: `I'm curious, is there a particular reason for that timeline?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 76
    container_id: blocks[21].id,
    account_id: 'all-accounts',
    label: `How have you evaluated solutions like ours in the past?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 24, // 77
    container_id: blocks[22].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`,
    value: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 25, // 78
    container_id: blocks[22].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`,
    value: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 79
    container_id: blocks[22].id,
    account_id: 'all-accounts',
    label: `What has the process looked like in the past for you to evaluate, decide, and secure budget for a tool like ours?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  { // TODO: Actions may not need element representation, look into removing
    id: uuid.v4(), // 80
    container_id: blocks[23].id,
    account_id: 'all-accounts',
    label: 'actions',
    value: '',
    type: 'actions',
    system: true,
  },
  { // TODO: Notes may not need element representation, look into removing
    id: uuid.v4(), // 81
    container_id: blocks[24].id,
    account_id: 'all-accounts',
    label: 'notes',
    value: '',
    type: 'notes-field',
    system: true,
  },
  {
    id: 0, // 82
    container_id: blocks[25].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'General Competitive',
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: 1, // 83
    container_id: blocks[25].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'Specific Competitor',
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: 2, // 84
    container_id: blocks[25].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'Customer Story',
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: 3, // 85
    container_id: blocks[25].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: 'Security',
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: uuid.v4(), // 86
    container_id: blocks[26].id,
    account_id: 'all-accounts',
    label: `Send followup email summary & resources`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 87
    container_id: blocks[26].id,
    account_id: 'all-accounts',
    label: `Connect on LinkedIn`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 88
    container_id: blocks[26].id,
    account_id: 'all-accounts',
    label: `Overline Executive Sponsor email?`,
    value: false,
    type: 'check-list',
    system: true,
  },
  { // Demo Loop: Low Quota
    id: uuid.v4(), // 89
    container_id: blocks[27].id,
    account_id: 'all-accounts',
    label: `Send agenda/soft reminder email (include use case specific case study)`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 90
    container_id: blocks[27].id,
    account_id: 'all-accounts',
    label: `Confirm LinkedIn connection (view their LinkedIn & engage)`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 91
    container_id: blocks[27].id,
    account_id: 'all-accounts',
    label: `Fill in: Recap: What We Know`,
    value: false,
    type: 'check-list',
    system: true,
  },
  { // TODO: Attendees may not need element representation, look into removing.
    id: uuid.v4(), // 92
    container_id: blocks[28].id,
    account_id: 'all-accounts',  
    label: 'Attendees',
    value: false,
    type: 'attendees',
    system: true,
  },
  {
    id: uuid.v4(), // 93
    container_id: blocks[29].id,
    account_id: 'all-accounts',
    label: 'Company Name',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 94
    container_id: blocks[29].id,
    account_id: 'all-accounts',
    label: 'Industry',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 95
    container_id: blocks[29].id,
    account_id: 'all-accounts',
    label: 'Current Event',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 96
    container_id: blocks[29].id,
    account_id: 'all-accounts',
    label: 'Number of reps on sales team',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 97
    container_id: blocks[29].id,
    account_id: 'all-accounts',
    label: 'Techstack',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 98
    container_id: blocks[30].id,
    account_id: 'all-accounts',
    label: 'Name',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 99
    container_id: blocks[30].id,
    account_id: 'all-accounts',
    label: 'Title',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 100
    container_id: blocks[30].id,
    account_id: 'all-accounts',
    label: 'Persona pain points',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 101
    container_id: blocks[30].id,
    account_id: 'all-accounts',
    label: 'Other members of their team to involve later?',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 102
    container_id: blocks[31].id,
    account_id: 'all-accounts',
    label: 'Time check',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 103
    container_id: blocks[31].id,
    account_id: 'all-accounts',
    label: `Quick recap of our conversation last time`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 104
    container_id: blocks[31].id,
    account_id: 'all-accounts',
    label: `Jump into a demo specific to how we help with increasing quota attainment`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 105
    container_id: blocks[31].id,
    account_id: 'all-accounts',
    label: 'Talk next steps and who needs to be included - fair?',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 106
    container_id: blocks[31].id,
    account_id: 'all-accounts',
    label: 'Anything you would like to add?',
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 107
    container_id: blocks[32].id,
    account_id: 'all-accounts',
    label: 'Main point: Low quota attainment',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 108
    container_id: blocks[32].id,
    account_id: 'all-accounts',
    label: 'Root Causes',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 109
    container_id: blocks[32].id,
    account_id: 'all-accounts',
    label: 'Significant Impact it has',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 110
    container_id: blocks[32].id,
    account_id: 'all-accounts',
    label: 'Timeline to Resolve',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 111
    container_id: blocks[32].id,
    account_id: 'all-accounts',
    label: 'Decision/Evaluation Process',
    value: '',
    type: 'research-field',
    system: true,
  },
  {
    id: uuid.v4(), // 112
    container_id: blocks[32].id,
    account_id: 'all-accounts',
    label: 'Has any of this changed or is anything missing?',
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 26, // 113
    container_id: blocks[33].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    value: `Low quota attainment is a results from many things, for example, inexperienced reps, poor adoption to your sales process, or limited to no time for coaching.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 27, // 114
    container_id: blocks[33].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    value: `Most tools to help solve this today are either reactive (call recording) and require both setting time aside for training and reps ability to recall the information on their calls.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 8, // 115
    container_id: blocks[33].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    value: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 9, // 116
    container_id: blocks[33].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    value: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 10, // 117
    container_id: blocks[33].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    value: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 11, // 118
    container_id: blocks[33].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    value: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 119
    container_id: blocks[34].id,
    account_id: 'all-accounts',
    label: `If I'm rep, I'll login to Skill Up to before my calls to begin preparing, where do your reps take notes and prepare for calls today?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 120
    container_id: blocks[34].id,
    account_id: 'all-accounts',
    label: 'How often do those notes make it into CRM?',
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 15, // 121
    container_id: blocks[34].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    value: `SkillUp is completely integrated, so the activities and notes we will take in here, will of course populated in CRM.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 122
    container_id: blocks[34].id,
    account_id: 'all-accounts',
    label: `We have some examples here, but I'd be curious, what types of things can your reps do before their calls to set themselves up for success?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 16, // 123
    container_id: blocks[34].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    value: `Let's fast forward, and say it's time for this call and launch salescoach.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 17, // 124
    container_id: blocks[34].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    value: `SalesCoach will guide the rep to ask the right questions, deliver the best talk tracks, and navigate objections.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 125
    container_id: blocks[35].id,
    account_id: 'all-accounts',
    label: `Have you ever been reviewing your forecast and found a deal forecasted but missing critical info like timeline or impact? Using SalesCoach your reps will always remember to ask those questions.`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 18, // 126
    container_id: blocks[35].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `SalesCoach will also enable reps to take down deliverables they owe after the call by assigning themselves action items, which automatically creates a post call task.`,
    value: `SalesCoach will also enable reps to take down deliverables they owe after the call by assigning themselves action items, which automatically creates a post call task.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 19, // 127
    container_id: blocks[36].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    value: `Following the call reps will receive notifications ensuring they complete all followup action items like sending followup emails, and updating the deal in CRM.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 128
    container_id: blocks[37].id,
    account_id: 'all-accounts',
    label: `Where have you documented your the various aspects of your sales motion today?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 129
    container_id: blocks[37].id,
    account_id: 'all-accounts',
    label: `What has been the feedback from the team on how usable of accessible that is?`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: 20, // 130
    container_id: blocks[37].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    value: `In SkillUp we will help you transfer your existing sales resources into what we call Frameworks. Then you can easily disperse them across the team by having them use the best framework for each call.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 21, // 131
    container_id: blocks[37].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `This is completely customizable and is a point and click set up.`,
    value: `This is completely customizable and is a point and click set up.`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 22, // 132
    container_id: blocks[38].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    value: `Normally, if there is a good fit, we set up a call to discuss any technical or integration questions your CRM admin may have. Should we go ahead and get that lined up?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: 23, // 133
    container_id: blocks[38].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    value: `Typically at this stage we also want to include a few members from your sales team to get their input. Do you have some team leads who typically like to weigh in on new tooling?`,
    type: 'talk-track',
    system: true,
  },
  {
    id: uuid.v4(), // 134
    container_id: blocks[38].id,
    account_id: 'all-accounts',
    label: `Help me understand the things you need to help make a decision.`,
    value: '',
    type: 'question-answer',
    system: true,
  },
  {
    id: uuid.v4(), // 135
    container_id: blocks[39].id,
    account_id: 'all-accounts', // note: this may not be needed, look into removing
    label: 'actions',
    value: '',
    type: 'actions',
    system: true,
  },
  {
    id: uuid.v4(), // 136
    container_id: blocks[40].id,
    account_id: 'all-accounts',
    label: 'notes',
    value: '',
    type: 'notes-field',
    system: true,
  },
  {
    id: 1, // 137
    container_id: blocks[41].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Specific Competitor`,
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: 3, // 138
    container_id: blocks[41].id,
    corporate_id: '',
    account_id: 'all-accounts',
    label: `Customer Story`,
    'talk-tracks': [],
    type: 'battle-card',
    system: true,
  },
  {
    id: uuid.v4(), // 139
    container_id: blocks[42].id,
    account_id: 'all-accounts',
    label: `Send followup email & resources`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 140
    container_id: blocks[42].id,
    account_id: 'all-accounts',
    label: `Verify connect on LinkedIn (view and engage)`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 141
    container_id: blocks[42].id,
    account_id: 'all-accounts',
    label: `Overline Executive Sponsor email?`,
    value: false,
    type: 'check-list',
    system: true,
  },
  {
    id: uuid.v4(), // 142
    container_id: blocks[42].id,
    account_id: 'all-accounts',
    label: `Introduction email to team leads + resources for them?`,
    value: false,
    type: 'check-list',
    system: true,
  }
];

// add elements order to blocks
for (let i = 0; i < elements.length; i++) {
  if (i <= 1) blocks[0].elements.push(elements[i].id);
  if (i === 2) blocks[1].elements.push(elements[i].id);
  if (i >= 3 && i <= 7) blocks[2].elements.push(elements[i].id);
  if (i >= 8 && i <= 11) blocks[3].elements.push(elements[i].id);
  if (i >= 12 && i <= 15) blocks[4].elements.push(elements[i].id);
  if (i >= 16 && i <= 23) blocks[5].elements.push(elements[i].id);
  if (i >= 24 && i <= 28) blocks[6].elements.push(elements[i].id);
  if (i >= 29 && i <= 33) blocks[7].elements.push(elements[i].id);
  if (i === 34) blocks[8].elements.push(elements[i].id);
  if (i === 35) blocks[9].elements.push(elements[i].id);
  if (i === 36) blocks[10].elements.push(elements[i].id);
  if (i >= 37 && i <= 38) blocks[11].elements.push(elements[i].id);
  if (i >= 39 && i <= 41) blocks[12].elements.push(elements[i].id);
  if (i >= 42 && i <= 43) blocks[13].elements.push(elements[i].id);
  if (i === 44) blocks[14].elements.push(elements[i].id);
  if (i >= 45 && i <= 49) blocks[15].elements.push(elements[i].id);
  if (i >= 50 && i <= 53) blocks[16].elements.push(elements[i].id);
  if (i >= 54 && i <= 58) blocks[17].elements.push(elements[i].id);
  if (i >= 59 && i <= 61) blocks[18].elements.push(elements[i].id);
  if (i >= 62 && i <= 66) blocks[19].elements.push(elements[i].id);
  if (i >= 67 && i <= 71) blocks[20].elements.push(elements[i].id);
  if (i >= 72 && i <= 76) blocks[21].elements.push(elements[i].id);
  if (i >= 77 && i <= 79) blocks[22].elements.push(elements[i].id);
  if (i === 80) blocks[23].elements.push(elements[i].id);
  if (i === 81) blocks[24].elements.push(elements[i].id);
  if (i >= 82 && i <= 85) blocks[25].elements.push(elements[i].id);
  if (i >= 86 && i <= 88) blocks[26].elements.push(elements[i].id);
  if (i >= 89 && i <= 91) blocks[27].elements.push(elements[i].id);
  if (i === 92) blocks[28].elements.push(elements[i].id);
  if (i >= 93 && i <= 97) blocks[29].elements.push(elements[i].id);
  if (i >= 98 && i <= 101) blocks[30].elements.push(elements[i].id);
  if (i >= 102 && i <= 106) blocks[31].elements.push(elements[i].id);
  if (i >= 107 && i <= 112) blocks[32].elements.push(elements[i].id);
  if (i >= 113 && i <= 118) blocks[33].elements.push(elements[i].id);
  if (i >= 119 && i <= 124) blocks[34].elements.push(elements[i].id);
  if (i >= 125 && i <= 126) blocks[35].elements.push(elements[i].id);
  if (i === 127) blocks[36].elements.push(elements[i].id);
  if (i >= 128 && i <= 131) blocks[37].elements.push(elements[i].id);
  if (i >= 132 && i <= 134) blocks[38].elements.push(elements[i].id);
  if (i === 135) blocks[39].elements.push(elements[i].id);
  if (i === 136) blocks[40].elements.push(elements[i].id);
  if (i >= 137 && i <= 138) blocks[41].elements.push(elements[i].id);
  if (i >= 139 && i <= 142) blocks[42].elements.push(elements[i].id);
};

db.createCollection('blocks');
db.blocks.insert(blocks);

db.createCollection('elements');
db.elements.insert(elements);

const events = [
  {
    id: 'bvuZSSjexj68DrzRuwf5iG',
    corporate_id: '',
    account_id: 'all-accounts',
    domain_id: 'rockettech',
    status: 'string',
    summary: 'RocketTech & SkillUp - Discovery Call',
    description: 'string',
    dateObj: getTodayOffSet(-1).dateObj,
    start: {
      date: getTodayOffSet(-1).date,
      dateTime: '12:00pm'
    },
    end: {
      date: getTodayOffSet(-1).date,
      dateTime: '12:30pm'
    },
    attendees: [
      {
        email: 'john.doe@rockettech.com',
        displayName: 'John Doe',
        responseStatus: 'yes'
      },
      {
        email: 'mary.smith@rockettech.com',
        displayName: 'Mary Smith',
        responseStatus: 'yes'
      },
      {
        email: 'milton.edwards@rockettech.com',
        displayName: 'Milton Edwards',
        responseStatus: 'no'
      }
    ],
    frameworkTemplate: {
      id: 'ssf8QgSn11DYvxs6EiVVPB',
      label: 'Inbound Discovery*',
      locked: true,
      blocks: [
        {
          id: 'wHYzEjzZ2i4cRMeKwPCmrJ',
          label: 'Pre-call Action Items',
          type: 'pre-call',
          active: false,
          elements: [
            {id: 'woNki6R6xA65uR8X6xRrsS', label: 'Send agenda/soft reminder email', type: 'check-list', value: true, active: false},
            {id: '4QTjEzVeaTStPgEQ2RW8aW', label: 'Connect on LinkedIn', type: 'check-list', value: true, active: false},
          ]
        },
        {
          id: 'vd74B3tj8wbsG5d23Y5svz',
          label: 'Attendees',
          type: 'attendees',
          active: false,
          elements: [
            {email: 'john.doe@rockettech.com', displayName: 'John Doe', responseStatus: 'yes'},
            {email: 'mary.smith@rockettech.com', displayName: 'Mary Smith', responseStatus: 'yes'},
            {email: 'milton.edwards@rockettech.com', displayName: 'Milton Edwards', responseStatus: 'no'}
          ]
        },
        {
          id: 'bDd99QkjYnTEhfiMBCeDNY',
          label: 'Pre-call Company Research',
          type: 'default',
          active: false,
          elements: [
            {id: '4oYDoxWZuBwJaHoZDYyBmf', label: 'Company Name', type: 'research-field', value: 'Discover', active: false},
            {id: 'o2s8E4NZ82Ff4nF8WRAviW', label: 'Industry', type: 'research-field', value: 'Finance', active: false},
            {id: 'ff51NyxpFGekkjmgtyq6qt', label: 'Current Event', type: 'research-field', value: 'Master Card, Visa', active: false},
            {id: 'kXx6eMvdyp5d7wLShuywuM', label: 'Number of reps on sales team', type: 'research-field', value: 'Skill Up', active: false},
            {id: 'vJD75WPVVZnwkuMmyYVKK2', label: 'Techstack', type: 'research-field', value: 'stock price is high', active: false},
          ]
        },
        {
          id: 'gTzMVNiNo7C2LEQKX898vK',
          label: 'Pre-call Contact Research',
          type: 'default',
          active: false,
          elements: [
            {id: 'pibUu99ATWN6nNCnELC8EK', label: 'Name', type: 'research-field', value: 'John Doe', active: false},
            {id: 'cfshzHFm2RzWJfxAtcn3d3', label: 'Title', type: 'research-field', value: 'Director of Sales', active: false},
            {id: 'eaaapEW4uVXsY55cgx4ytR', label: 'Persona pain points', type: 'research-field', value: '10 years', active: false},
            {id: '2jRyKGNPbqhj5qT5fAZG4X', label: 'Other members of their team to involve later?', type: 'research-field', value: '20 years', active: false},
          ]
        },
        {
          id: 'hiYQ6RGK9KWSzWmYy4fLu3',
          label: 'Agenda',type: 'default',
          type: 'talk-track',
          active: false,
          elements: [
            {id: 'x6jJbr1okk37e45sbqgkXU', label: 'Time check', type: 'check-list', value: false, active: false},
            {id: 'v2ZLZpAMHy7P6TFUTicc2s', label: 'Discuss what prompted your interest', type: 'check-list', value: false, active: false},
            {id: 'syCaSFiDQb3duWRNNdZ8eK', label: 'I can share more about SkillUp', type: 'check-list', value: false, active: false},
            {id: 'kuCKpNki6uEEc918zD2AN7', label: 'If there is a fit, we talk next steps', type: 'check-list', value: false, active: false}
          ]
        },
        {
          id: 'seFwPWBiLCq41sEr8AgdJK',
          label: 'Discovery 1',
          type: 'default',
          active: false,
          elements: [
            {id: '8NqoTj8UkeqhWzTwpTb5fS', label: `Other sales leaders come to us because they have a problem with low or inconsistent quota attainment across their team. I'd be curious to learn, what prompted your interest in SkillUp?`, type: 'question-answer', value: '', active: false},
            {id: '8wB85Q5gytqQJCPjZQ4RTy', label: `How long has that been a challenge for you?`, type: 'question-answer', value: '', active: false},
            {id: '8jdbQeFBvq9XkZcFR3h2vu', label: `We typically find low quota attainment stems from not having a proven sales framework for reps to use or little time spent coaching reps so they can adopt it. Specific to your sales process, what do you feel is preventing your team from hitting quota?`, type: 'question-answer', value: '', active: false},
            {id: 'k1L8MPTE6EH9ZTYfVT3Ko8', label: `What kinds of things have you tried or implemented already to address this?`, type: 'question-answer', value: '', active: false},
            {id: '7YtKFvfcBNM5zXuie6LJDX', label: `Coaching? How and how much time does a manager spend/week with a rep coaching?`, type: 'question-answer', value: '', active: false},
            {id: 't4yKL1BHnnY8zUDxPnA98U', label: `Why weren't those attempts successful?`, type: 'question-answer', value: '', active: false},
            {id: 'v17BWEXov6amDuL87zWvF6', label: `Can you help me understand the makeup of the team (#reps/managers/etc)?`, type: 'question-answer', value: '', active: false}
          ]
        },
        {
          id: 'gFV2HJYKfAVU9J726kAB8P',
          label: 'Value Proposition',
          type: 'talk-track',
          active: false,
          elements: [
            {id: 'dbQiUS7B4qQPpf5bvVvcME', label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`, type: 'talk-track', active: false},
            {id: 'awifKFEBVCDu22znhNtFoP', label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`, type: 'talk-track', active: false},
            {id: '7qPnzYt1fJsjZwT8JEJcNg', label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`, type: 'talk-track', active: false},
            {id: '5YSh4J5PaaneKNptCpbQkW', label: `This approach has a big impact because studies show that companies who coach reps regularly generate 17% more revenue.`, type: 'talk-track', active: false},
            {id: '2fUf4hHRZ7LVJPbPaNyDAZ', label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuracy, and new rep onboarding. Do you see room for improvement in any of those areas?`, type: 'question-answer', value: '', active: false}
          ]
        },
        {
          id: 'fdDWUQUP8CqnC9K61bnidd',
          label: 'Discovery 2',
          type: 'default',
          active: false,
          elements: [
            {id: 'mGKJbmTLqgFoVxpuUfJHBW', label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`, type: 'question-answer', value: '', active: false},
            {id: 'xqLNg65Kwymoq3Z1GTC3bx', label: `You have lot's of priorities. Where would you say this sits on your overall priority list?`, type: 'question-answer', value: '', active: false},
            {id: 'cnfKFj6VaB5SxxAC9Skcj', label: `Being such a high priority, when are you hoping to have a solution in place by?`, type: 'question-answer', value: '', active: false},
            {id: 'mwXx1u2bDSzVZwixECZdoe', label: `I'm curious, is there a particular reason we're shooting for that date?`, type: 'question-answer', value: '', active: false},
            {id: 'sLzBdBv8cJKntQUTEs98VV', label: `So I can best support your evaluation and decision, can you walk me through how you will decide which solution is best?`, type: 'question-answer', value: '', active: false}
          ]
        },
        {
          id: 'jnoTxR8vM7kjpJFAPkY8kS',
          label: 'Next Steps',
          type: 'talk-track',
          active: false,
          elements: [
            {id: '2ijNBREbiqiwSDiMW4GX5S', label: `We have done solid work today and there is seemingly a good fit. Normally from here we line up deeper demo with a few more colleagues from your side who are involved in the decision. Can we go ahead and get that scheduled now?`, type: 'talk-track', active: false}
          ]
        },
        {
          id: 'ezeVQY6yfSPsXqd8vXn8yw',
          label: 'Actions',
          type: 'actions',
          active: false,
          elements: [
            {id: 'ovwvF9GhCEo4je5DrDFmUd', label: 'Connect on LinkedIn', type: 'action-item', value: true, active: false},
            {id: '7GQXnwmbqsZHGgr1XYmxek', label: 'Send documentation', type: 'action-item', value: true, active: false}
          ]
        },
        {
          id: 'nhwkpLGgNd3tsi8h8PC2KM',
          label: 'Notes',
          type: 'notes',
          active: false,
          elements: [
            {id: 'db4GXW7tfUT3jmmZkzbd5y', label: 'note-1', type: 'notes-field', value: 'They know they need a product to support sales staff!'},
            {id: 'q1ovYFyCtwM1Vho5otd7xf', label: 'note-2', type: 'notes-field', value: 'They tried a few solutions but nothing has seems to catch on!'},
            {id: 'ktwuJbp4o1U2fqwUtzBEZv', label: 'note-3', type: 'notes-field', value: 'They know they need a product to support sales staff!\n\nThey tried a few solutions but nothing has seems to catch on!'},
          ]
        },
        {
          id: '8nzwZfMBucFNcx4qt1T937',
          label: 'Battle Cards',
          type: 'battle-cards',
          active: false,
          elements: []
        },
        {
          id: '9k2BGvpUbe6znmurNFjBXy',
          label: 'Post-call Action Item',
          type: 'post-call',
          active: false,
          elements: [
            {id: 'pUfbJBNGq3kL8A5ZdgZWQR', label: `Send followup email summary & resources`, type: 'check-list', value: true, active: false},
            {id: '7JBCzbhDgRLEBLLPL5x5Tw', label: `Update Opportunity Details`, type: 'check-list', value: true, active: false},
            {id: 'bQfxg8xkSXBYKSMsZgQBSA', label: `Add notes to CRM`, type: 'check-list', value: true, active: false}
          ]
        }
      ],
    }
  },
  {
    id: '7zZQUuXJZjS8YkeWH9PY78',
    corporate_id: '',
    account_id: 'all-accounts',
    domain_id: 'bytecode',
    status: 'string',
    summary: 'ByteCode & SkillUp - Discovery call',
    description: 'string',
    dateObj: getTodayOffSet(-1).dateObj,
    start: {
      date: getTodayOffSet(-1).date,
      dateTime: '1:00pm'
    },
    end: {
      date: getTodayOffSet(-1).date,
      dateTime: '1:30pm'
    },
    attendees: [
      {
        email: 'john.doe@bytecode.com',
        displayName: 'John Doe',
        responseStatus: 'maybe'
      },
      {
        email: 'mary.smith@bytecode.com',
        displayName: 'Mary Smith',
        responseStatus: 'no'
      },
      {
        email: 'milton.edwards@bytecode.com',
        displayName: 'Milton Edwards',
        responseStatus: 'yes'
      }
    ],
    frameworkTemplate: {
      id: '8QdPAuQMZhii8R3U1NZgdr',
      label: 'Inbound Call*',
      locked: true,
      blocks: [
        {
          id: 'wztH51yHGEFjAjwoLGA2yu',
          label: 'Pre-call Action Items',
          type: 'pre-call',
          active: false,
          elements: [
            {id: '34hzZcUbZYWosriSpoRQsq', label: 'Send agenda/soft reminder email', type: 'check-list', value: true, active: false},
            {id: '6NtTzCQe7YG334kBDrDunz', label: `Fill in the 'validate research' information`, type: 'check-list', value: true, active: false},
          ]
        },
        {
          id: 'qb65iirKSZvuv7momcAHkx',
          label: 'Attendees',
          type: 'attendees',
          active: false,
          elements: [
            {email: 'john.doe@bytecode.com', displayName: 'John Doe', responseStatus: 'maybe'},
            {email: 'mary.smith@bytecode.com', displayName: 'Mary Smith', responseStatus: 'no'},
            {email: 'milton.edwards@bytecode.com', displayName: 'Milton Edwards', responseStatus: 'yes'}
          ]
        },
        {
          id: '2NnHS94YoeavxRNHS9qYby',
          label: 'Pre-call Company Research',
          type: 'default',
          active: false,
          elements: [
            {id: '3sNWwhrHgHe55V55YErhPn', label: 'Company Name', type: 'research-field', value: 'HUB SPOT', active: false},
            {id: '54MSW8NDTEcLLgfVJXyFt2', label: 'Industry', type: 'research-field', value: 'business communication', active: false},
            {id: '8ZMuNKi7BrLiES9M19QJnh', label: 'Current Event', type: 'research-field', value: 'Make more money by having better trained reps', active: false},
            {id: '3iHsXk2upQfcz5YpEEamdZ', label: 'Number of reps on sales team', type: 'research-field', value: 'Customer management', active: false},
            {id: 'fG5pYJX28f6iY8PkPEqHLu', label: 'Techstack', type: 'research-field', value: 'CronoVirus', active: false},
          ]
        },
        {
          id: 'dm5jT9zUMMpfLsSXPzibJc',
          label: 'Pre-call Contact Research',
          type: 'default',
          active: false,
          elements: [
            {id: 'hqjNrHyfv1RCxyXdoMbhqf', label: 'Name', type: 'research-field', value: 'Milton Edwards', active: false},
            {id: 'qH7CLYVN55qnTC3iqL5LQd', label: 'Title', type: 'research-field', value: 'Account Manager', active: false},
            {id: 'pQhRqeSAoYRA81ufFrEbVG', label: 'Persona pain points', type: 'research-field', value: 'has been there one year', active: false},
            {id: '8Gf3a6UiWwtkYT8Nu17cZ7', label: 'Other members of their team to involve later?', type: 'research-field', value: '40 years of experience', active: false},
          ]
        },
        {
          id: 'ootTs3Atwo2mzmiyC8J554',
          label: 'Agenda',
          type: 'default',
          active: false,
          elements: [
            {id: 'jDiHXad96p9HBmDipVgXPj', label: 'Time check', type: 'check-list', value: false, active: false},
            {id: 'jBFCy6Jttn7qiyo2k5VzFm', label: `Share why we reached out and see if you're experiencing the common challenges we help with`, type: 'check-list', value: false, active: false},
            {id: 'uKe83Brw17fdWeN6sX83uG', label: 'Provide an overview on how we can help', type: 'check-list', value: false, active: false},
            {id: 'ennrYwuLdmVaKgSJKMChFw', label: 'If it make sense, talk next steps', type: 'check-list', value: false, active: false},
            {id: 'ng5qU2NLrE1BwXZusuwpft', label: 'Fair? Anything you want to add?', type: 'check-list', value: false, active: false}
          ]
        },
        {
          id: 'f3v3tPwMhLckjQjNT7KxYS',
          label: 'Validate',
          type: 'talk-track',
          active: false,
          elements: [
            {id: 'fgmJ7zH6pVZsJubYN9RWr1', label: `While researching companies similar to our success customers, we found you. We noticed the team has grown by X% in the last 6 months and estimate a manager to rep ratio of X:Y. We also found the team is located remote with a few open sales reqs on the careers page showing room for more growth to come. How did we do at scoping the landscape over there?`, type: 'talk-track', active: false},
            {id: 'mkggpvBjrCitBM2oQdyiF2', label: `Normally these types of things are leading indicators showing our solution makes sense. Fast growing companies often have resource contraints and scaling a remote team is a challenge in and of itself.`, type: 'talk-track', active: false},
            {id: 'nV72cnAM1etPpdkno2VJa2', label: `Other sales leaders we work with experience long new rep ramp times, poor adoption of the sales methodology, and low quota attainment. Are you challenged in any of these or perhaps other areas?`, type: 'question-answer', value: '', active: false}
          ]
        },

        {
          id: 'nG4dPViaTzPQ9SB1KcgwMr',
          label: 'Discovery 1',
          type: 'default',
          active: false,
          elements: [
            {id: '3pi39cXDM5wp8TvbV8N7PM', label: `How long has that been a challenge?`, type: 'question-answer', value: '', active: false},
            {id: '4eAveTDeaTWMskm4bhWwZt', label: `What do you think is the main cause of it?`, type: 'question-answer', value: '', active: false},
            {id: '3K22yWY161b1aHPijY1zRt', label: `What do you feel is the biggest impacted by not addressing the challenge?`, type: 'question-answer', value: '', active: false},
            {id: '5cDQQBDZDSAw4Jpap6Cm4M', label: `What have you tried to address it?`, type: 'question-answer', value: '', active: false},
            {id: 'sb6caahrWx67cDJjHao8ay', label: `What sort of tools and trainings have you implemented?`, type: 'question-answer', value: '', active: false}
          ]
        },
        {
          id: 'xmDjTFXnuqz9Ywbn6TfS58',
          label: 'Value Proposition',
          type: 'talk-track',
          active: false,
          elements: [
            {id: '5YA3Nyoh3GuMuK4xS56LBK', label: `Coaching reps is hard. Not only is it a different skill set, but setting the time aside is challenging. Did you know on average 47% of sales managers spend less than 30 minutes coaching per week?`, type: 'talk-track', active: false},
            {id: 'wSGMDogpGCdPDvvFEMYzUd', label: `Not only is coaching hard, but reps forget 60% of coaching after just one week.`, type: 'talk-track', active: false},
            {id: '8G19PfcYpM4zMkCeFQLyZR', label: `That's why we lead with an always on approach that is incorporated to a reps daily workflow on every deal. We guide your reps as if you were there before, during, and after their sales calls.`, type: 'talk-track', active: false},
            {id: 'hoxkpQqhYrr4aoXnoJg8dD', label: `This approach has a big impact because studies show that companies who coach reps reguraily generate 17% more revenue.`, type: 'talk-track', active: false},
            {id: '2cE6hh8jspxkRvi2xtwLH5', label: `Increased quota attainment is the benefit we talk about the most, but there are others like improved deal visibility, forecast accuarcy, and new rep onboarding. Do you see room for improvement in any of those areas?`, type: 'question-answer', value: '', active: false}
          ]
        },
        {
          id: 'cz27YpC9FeqCpCkS1gbPgb',
          label: 'Discovery 2',
          type: 'default',
          active: false,
          elements: [
            {id: 'rZ1iMFKxUtA15ox3hazvFP', label: `How do you think your team would react to having this guidance and support to improve their ability to hit quota?`, type: 'question-answer', value: '', active: false},
            {id: 'wXN3sQSGUMX7YDJmEDpgC4', label: `I know we contacted you and this may not have been on your immediate priority list, but how important would you say this is for you to get figured out?`, type: 'question-answer', value: '', active: false},
            {id: 'nc7Kfv8C3grzu5ifnuKcm3', label: `Being such a high priority, when are you looking to have a solution in place by?`, type: 'question-answer', value: '', active: false},
            {id: 'xfWD6sKiXTVWRiH5riUyeW', label: `I'm curious, is there a particular reason for that timeline?`, type: 'question-answer', value: '', active: false},
            {id: 'ffDx4Pb2mWRhNp5x6LsmtG', label: `How have you evaluated solutions like ours in the past?`, type: 'question-answer', value: '', active: false}
          ]
        },
        {
          id: '6D78kKpg7Ae9HsL3beEc49',
          label: 'Next Steps',
          type: 'talk-track',
          active: false,
          elements: [
            {id: 'Jdnfon2SwrVNjLztfSVTW', label: `Normally, if there is a good fit, we set up a deeper dialog with a demo specific to your use case, would that make sense for us?`, type: 'talk-track', active: false},
            {id: 'wnLrRJwh3vHgDy47eKwWiv', label: `I noticed a few members on your team like__,___, normally we involve people like them in the process. Do you have access to their calendars so we can include them on the next call?`, type: 'talk-track', active: false},
            {id: 'b4tPy3WXmP46rvFRjUccYN', label: `What has the process looked like in the past for you to evaluate, decide, and secure budget for a tool like ours?`, type: 'question-answer', value: '', active: false}
          ]
        },

        {
          id: '9Adtn3A3JB6TBkhQNdcrsQ',
          label: 'ACTIONS',
          type: 'actions',
          active: false,
          elements: [
            {id: 'nAxXZ8QcPG57bJRQRNuqWy', label: 'Connect on LinkedIn', type: 'action-item', value: true, active: false},
            {id: 'jCX2Ef6oD1kYYZYKJyE5YB', label: 'Send documentation', type: 'action-item', value: true, active: false}
          ]
        },
        {
          id: 'tNFevXaNpUdLP7LZXYYKG6',
          label: 'NOTES',
          type: 'notes',
          active: false,
          elements: [
            {id: 'vWRK9UbHDN2THkudDeWdwT', label: 'note-1', type: 'notes-field', value: 'They know they need a product to support sales staff!\n\nThey tried a few solutions but nothing has seems to catch on!'},
            {id: 'qfTSsq7FfrD2BRKH2Tu7sz', label: 'note-2', type: 'notes-field', value: 'They know they need a product to support sales staff!'},
            {id: 'kVUFVpJKpQ3ZDEt6xJkAyY', label: 'note-3', type: 'notes-field', value: 'They tried a few solutions but nothing has seems to catch on!'},
          ]
        },
        {
          id: 'rLhgsXsasJwxymbSXHHCLT',
          label: 'Battle Cards',
          type: 'battle-cards',
          active: false,
          elements: []
        },
        {
          id: 'tHnNK9a6FbdsY3i8TmPW62',
          label: 'Post-call Action Item',
          type: 'post-call',
          active: false,
          elements: [
            {id: 'i1MvgXtnng7dTPm5Mz8EXd', label: `Send followup email summary & resources`, type: 'check-list', value: false, active: false},
            {id: '4aEztyCcBfxRUEvHdGXspx', label: `Connect on LinkedIn`, type: 'check-list', value: false, active: false},
            {id: 'fivEhky3Hmuxq1x5iXaZjS', label: `Overline Executive Sponsor email?`, type: 'check-list', value: false, active: false}
          ]
        }
      ],
    }
  }
];

db.createCollection('events');
db.events.insert(events);
