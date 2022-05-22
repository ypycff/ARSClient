export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
{
  id: 'my-placement',
  icon: 'iconsminds-digital-drawing',
  label: 'menu.my-placement',
  to: '/app/my-placement',
  subs: [{
    icon: 'simple-icon-logout',
    label: 'menu.edit-placement',
    to: '/app/my-placement/edit-placement'
  },
  {
    icon: 'simple-icon-layers',
    label: 'menu.review-placement',
    to: '/app/my-placement/review-placement',
  }
  ]
},
{
  id: 'my-profile',
  icon: 'iconsminds-digital-drawing',
  label: 'menu.my-profile',
  to: '/app/my-profile',
  subs: [{
    icon: 'simple-icon-arrow-right',
    label: 'menu.edit-profile',
    to: '/app/my-profile/edit-profile'
  },
  {
    icon: 'simple-icon-arrow-right',
    label: 'menu.review-profile',
    to: '/app/my-profile/review-profile'
  }
  ]
},
{
  id: 'job-description',
  icon: 'iconsminds-air-balloon-1',
  label: 'menu.job-description',
  to: '/app/job-description',
  subs: [
  {
    icon: 'simple-icon-arrow-right',
    label: 'menu.all-placement',
    to: '/app/job-description/all-placement',
  },
  {
    icon: 'simple-icon-arrow-right',
    label: 'menu.recommend',
    to: '/app/job-description/recommend'
  }
  ]
},
{
  id: 'analyst-profiles',
  icon: 'iconsminds-air-balloon-1',
  label: 'menu.analyst-profiles',
  to: '/app/analyst-profiles',
  subs: [{
    icon: 'simple-icon-arrow-right',
    label: 'menu.all-profile',
    to: '/app/analyst-profiles/all-profile'
  },
  {
    icon: 'simple-icon-arrow-right',
    label: 'menu.recommend',
    to: '/app/analyst-profiles/recommend'
  }
  ]
},
{
  id: 'match',
  icon: 'iconsminds-pantone',
  label: 'menu.match',
  to: '/app/match',
  subs: [{
    icon: 'simple-icon-arrow-right',
    label: 'menu.interview',
    to: '/app/match/interview'
  },
  {
    icon: 'simple-icon-arrow-right',
    label: 'menu.preference',
    to: '/app/match/preference'
  },
  {
    icon: 'simple-icon-arrow-right',
    label: 'menu.match-result',
    to: '/app/match/match-result'
  }
  ]
}
];
export default data;
