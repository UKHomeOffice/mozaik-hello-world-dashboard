import React   from 'react';
import Mozaik  from 'mozaik/browser';
import github  from 'mozaik-ext-github';
import drone  from './mozaik-ext-drone';
// import sample  from './mozaik-ext-sample';
import travis  from 'mozaik-ext-travis';
import time    from 'mozaik-ext-time';
import weather from 'mozaik-ext-weather';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions = Mozaik.Actions.Config;


Mozaik.Registry.addExtensions({
  github,
  travis,
  time,
  weather,
  // sample,
  drone
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
