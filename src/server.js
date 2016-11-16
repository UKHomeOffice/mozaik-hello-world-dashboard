import Mozaik  from 'mozaik';
import config  from '../config';
import github  from 'mozaik-ext-github/client';
import drone   from './mozaik-ext-drone/client';
// import sample   from './mozaik-ext-sample/client';
import travis  from 'mozaik-ext-travis/client';
import weather from 'mozaik-ext-weather/client';

const mozaik = new Mozaik(config);

mozaik.bus.registerApi('github',  github);
mozaik.bus.registerApi('drone',  drone);
// mozaik.bus.registerApi('sample',  sample);
mozaik.bus.registerApi('travis',  travis);
mozaik.bus.registerApi('weather', weather);

mozaik.startServer();
