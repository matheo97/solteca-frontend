import gettingInIconOn from '../../../images/sideBar/ico-getting-in-on.svg';
import gettingInIconOff from '../../../images/sideBar/ico-getting-in-off.svg';
import gettingOutIconOn from '../../../images/sideBar/ico-getting-out-on.svg';
import gettingOutIconOff from '../../../images/sideBar/ico-getting-out-off.svg';
import ticketIconOn from '../../../images/sideBar/ico-list-on.svg';
import ticketIconOff from '../../../images/sideBar/ico-list-off.svg';

const items = [
  {
    label: 'getting in',
    iconOn: gettingInIconOn,
    iconOff: gettingInIconOff,
    key: 'getting-in',
  },
  {
    label: 'getting out',
    iconOn: gettingOutIconOn,
    iconOff: gettingOutIconOff,
    key: 'getting-out',
  },
  {
    label: 'tickets',
    iconOn: ticketIconOn,
    iconOff: ticketIconOff,
    key: 'tickets',
  },
];

export default items;
