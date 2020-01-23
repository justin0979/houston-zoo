import apePicChimp from '@images/edited_apePicChimp';
import asianElephant from '@images/edited_asianElephant';
import lions from '@images/edited_lions';
import meerkats from '@images/edited_meerKat';
import orangutan from '@images/edited_orangutan';
import elephantEating from '@images/edited_elephantEating';
import okapi from '@images/edited_okapi';

export default () => [
  {
    id: 'pics1',
    originalPic: asianElephant,
    src: apePicChimp,
    text: 'Twin Calebs?'
  },
  {
    id: 'pics2',
    originalPic: asianElephant,
    src: asianElephant,
    text: 'Asian elephant exhibit'
  },
  {
    id: 'pics3',
    originalPic: asianElephant,
    src: elephantEating,
    text: 'Elephants eating fruit'
  },
  {
    id: 'pics5',
    originalPic: asianElephant,
    src: meerkats,
    text: 'On the lookout'
  },
  {
    id: 'pics6',
    originalPic: asianElephant,
    src: lions,
    text: 'Lounging Lions'
  },
  { id: 'pics7', originalPic: asianElephant, src: orangutan, text: 'Relaxing' },
  {
    id: 'pics8',
    originalPic: asianElephant,
    src: okapi,
    text: 'Biting the rail'
  }
];
